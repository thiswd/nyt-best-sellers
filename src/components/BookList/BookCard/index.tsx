import { BookType } from "../../../services/api"
import {
  BookAuthor,
  BookContributor,
  BookCardContainer,
  BookCardWrapper,
  BookDescription,
  BookTitle,
  ImageContainer,
  RankingLabel,
  BookDescriptionContainer,
} from "./styles"

interface BookCardProps {
  book: BookType
}
export function BookCard({ book }: BookCardProps) {
  return (
    <BookCardContainer>
      <BookCardWrapper className="animate-container">
        <RankingLabel className="animate-ranking-label">
          {book.rank}
        </RankingLabel>
        <ImageContainer className="animate-image">
          <img src={book.book_image} alt="" />
        </ImageContainer>
        <BookTitle className="animate-title">{book.title}</BookTitle>
        <BookContributor className="animate-contributor">
          {book.contributor}
        </BookContributor>
        <BookDescriptionContainer>
          <BookDescription className="animate-description">
            {book.description}
          </BookDescription>
        </BookDescriptionContainer>
        <BookAuthor className="animate-author">{book.author}</BookAuthor>
      </BookCardWrapper>
    </BookCardContainer>
  )
}
