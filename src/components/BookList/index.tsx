import { useState, useEffect } from "react"
import { SelectCategory } from "./SelectCategory"
import { BookType, fetchBooks } from "../../services/api"
import { isAxiosError } from "axios"
import { StyledBookList } from "./styles"

const booksPerPage = 10

const mainCategory = "combined-print-and-e-book-fiction"
const rateLimitErrorMessage =
  "You've exceeded the API rate limit. Please try again later."
const errorMessage = "An error occurred while fetching books."

interface GetBooksProps {
  category: string
  setBooks: (books: BookType[]) => void
  setError: (error: string | null) => void
}
function getBooks({ category, setBooks, setError }: GetBooksProps) {
  fetchBooks(category)
    .then(data => {
      const books = data || []
      setBooks([...books.slice(0, booksPerPage)])
      setError(null) // reset error on successful fetch
    })
    .catch((error: unknown) => {
      if (isAxiosError(error) && error.response?.status === 429) {
        setError(rateLimitErrorMessage)
      } else {
        setError(errorMessage)
      }
    })
}

export function BookList() {
  const [books, setBooks] = useState<BookType[]>([])
  const [category, setCategory] = useState<string>(mainCategory)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getBooks({ category, setBooks, setError })
  }, [category])

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <SelectCategory category={category} setCategory={setCategory} />
      <ul>
        {books.map(book => (
          <li key={book.primary_isbn10}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}
