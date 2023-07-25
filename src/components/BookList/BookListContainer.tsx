import { AxiosError } from "axios"
import { apiClient } from "../../services/api"
import { useEffect, useState } from "react"
import { BookList } from "."

interface Book {
  rank: number
  rank_last_week: number
  publisher: string
  description: string
  title: string
  author: string
  book_image: string
  primary_isbn10: string
}

interface ApiResponse {
  results: {
    books: Book[]
  }
}

const mainCategory = "combined-print-and-e-book-fiction"

async function fetchBooks(category: string) {
  try {
    const response = await apiClient.get<ApiResponse>(`${category}.json`)
    const { books } = response.data.results
    return books
  } catch (err: unknown) {
    const error = err as AxiosError
    const { request, response } = error

    if (response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { data, status, headers } = response
      console.log({ data, status, headers })
      if (status === 429) {
        alert("You've exceeded the API rate limit. Please try again later.")
      }
    } else if (request) {
      // The request was made but no response was received
      console.log(request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message)
    }
  }
}

export function BookListContainer() {
  const [books, setBooks] = useState<Book[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>(mainCategory)

  useEffect(() => {
    fetchBooks(selectedCategory)
      .then(data => setBooks([...(data || [])]))
      .catch(error => console.error("Error:", error))
  }, [selectedCategory])

  return <BookList books={books} />
}
