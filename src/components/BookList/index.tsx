import { useState, useEffect } from "react"
import { BookType, fetchBooks } from "../../services/api"
import { isAxiosError } from "axios"
import { ListPlaceholder, StyledBookList } from "./styles"
import { BookCard } from "../BookCard"
import { SelectCategory } from "../SelectCategory"
import { Loader } from "../Loader"
import { HorizontalScrollBar } from "../ui/HorizontalScrollBar"

const booksPerPage = 15

const mainCategory = "combined-print-and-e-book-fiction"
const rateLimitErrorMessage =
  "You've exceeded the API rate limit. Please try again later."
const errorMessage = "An error occurred while fetching books."

export function BookList() {
  const [books, setBooks] = useState<BookType[]>([])
  const [category, setCategory] = useState<string>(mainCategory)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  function getBooks(newCategory: string) {
    setLoading(true)
    fetchBooks(newCategory)
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
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getBooks(category)
  }, [category])

  if (loading) {
    return (
      <ListPlaceholder>
        <Loader />
      </ListPlaceholder>
    )
  }

  return (
    <>
      <HorizontalScrollBar>
        <StyledBookList>
          {books.map(book => (
            <BookCard key={book.primary_isbn10} book={book} />
          ))}
        </StyledBookList>
      </HorizontalScrollBar>
      <SelectCategory category={category} setCategory={setCategory} />
    </>
  )
}
