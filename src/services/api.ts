import axios, { AxiosError } from "axios"

const API_KEY = "c5wYt3kekdMqgQtTS60OGor3OMIAFFG8"
const API_BASE_URL = "https://api.nytimes.com/svc/books/v3/lists/current"

export type BookType = {
  rank: number
  rank_last_week: number
  publisher: string
  description: string
  title: string
  author: string
  contributor: string
  book_image: string
  primary_isbn10: string
}

interface ApiResponse {
  results: {
    books: BookType[]
  }
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: {
    "api-key": API_KEY,
  },
})

export async function fetchBooks(
  category: string,
): Promise<BookType[] | undefined> {
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
    throw error
  }
}
