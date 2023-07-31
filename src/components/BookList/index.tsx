import { ListPlaceholder, StyledBookList } from "./styles"
import { BookCard } from "../BookCard"
import { Loader } from "../Loader"
import { HorizontalScrollBar } from "../ui/HorizontalScrollBar"
import { BookType } from "../../services/api"

interface BookListProps {
  books: BookType[]
  loading: boolean
}

export function BookList({ books, loading }: BookListProps) {
  if (loading) {
    return (
      <ListPlaceholder>
        <Loader />
      </ListPlaceholder>
    )
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
