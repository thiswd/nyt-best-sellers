import { StyledBookList } from "./styles"
import { BookCard } from "../BookCard"
import { HorizontalScrollBar } from "../ui/HorizontalScrollBar"
import { BookType } from "../../services/api"
import { Loader } from "../ui/Loader"

interface BookListProps {
  books: BookType[]
  loading: boolean
}

export function BookList({ books, loading }: BookListProps) {
  if (loading) {
    return <Loader />
  }

  return (
    <HorizontalScrollBar>
      <StyledBookList>
        {books.map(book => (
          <BookCard key={book.primary_isbn10} book={book} />
        ))}
      </StyledBookList>
    </HorizontalScrollBar>
  )
}
