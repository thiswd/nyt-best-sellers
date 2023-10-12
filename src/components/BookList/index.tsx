import { BookListContainer, StyledBookList } from "./styles"
import { BookCard } from "../BookCard"
import { HorizontalScrollBar } from "../ui/HorizontalScrollBar"
import { Loader } from "../ui/Loader"
import { BookType } from "../../types/bookTypes"

interface BookListProps {
  books: BookType[]
  loading: boolean
}

export function BookList({ books, loading }: BookListProps) {
  if (loading) {
    return <Loader />
  }

  return (
    <BookListContainer>
      <HorizontalScrollBar>
        <StyledBookList>
          {books.map(book => (
            <BookCard key={`book-card-${book.rank}`} book={book} />
          ))}
        </StyledBookList>
      </HorizontalScrollBar>
    </BookListContainer>
  )
}
