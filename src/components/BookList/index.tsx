import { useState, useEffect } from "react"
import { BookType, fetchBooks } from "../../services/api"
import { isAxiosError } from "axios"
import { AppContainer, StyledBookList } from "./styles"
import { BookCard } from "../BookCard"
import { SelectCategory } from "../SelectCategory"

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
    <AppContainer>
      {/* <SelectCategory category={category} setCategory={setCategory} /> */}
      <StyledBookList>
        {books.map(book => (
          <BookCard key={book.primary_isbn10} book={book} />
        ))}
      </StyledBookList>
    </AppContainer>
  )
}
