import { BookType } from "../../../services/api"
import {
  BookAuthor,
  BookCardContainer,
  BookCardWrapper,
  RankingLabel,
} from "./styles"

interface BookCardProps {
  book: BookType
}
export function BookCard({ book }: BookCardProps) {
  return (
    <BookCardContainer>
      <BookCardWrapper>
        <RankingLabel>{book.rank}</RankingLabel>
        <h3>{book.title}</h3>
        <BookAuthor>{book.author}</BookAuthor>
      </BookCardWrapper>
    </BookCardContainer>
  )
}
