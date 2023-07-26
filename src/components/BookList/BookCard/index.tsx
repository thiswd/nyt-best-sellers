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
  OrdinalSuffix,
  RankingContainer,
  WeeksOnList,
  BookInfoContainer,
} from "./styles"

interface BookCardProps {
  book: BookType
}

function ordinalNumber(rank: number): string {
  const suffixes = ["st", "nd", "rd", "th"]
  const index = rank - 1
  return suffixes[index] || suffixes[suffixes.length - 1]
}

function weeksOnTheListLabel(weeksAmount: number): string {
  if (weeksAmount === 0) return ""
  if (weeksAmount === 1) return "New this week"
  return `${weeksAmount} weeks on the list`
}

export function BookCard({ book }: BookCardProps) {
  return (
    <BookCardContainer rank={book.rank}>
      <BookCardWrapper className="animate-container">
        <RankingContainer className="animate-ranking-container">
          <RankingLabel className="animate-ranking-label">
            <span>{book.rank}</span>
            <OrdinalSuffix className="animate-ordinal-suffix">
              {ordinalNumber(book.rank)}
            </OrdinalSuffix>
          </RankingLabel>
          <WeeksOnList className="animate-weeks-on-list">
            {weeksOnTheListLabel(book.weeks_on_list)}
          </WeeksOnList>
        </RankingContainer>
        <ImageContainer className="animate-image">
          <img src={book.book_image} alt="" />
        </ImageContainer>
        <BookInfoContainer className="animate-info-container">
          <BookTitle className="animate-title">{book.title}</BookTitle>
          <BookContributor className="animate-contributor">
            {book.contributor}
          </BookContributor>
          <BookDescription className="animate-description">
            {book.description}
          </BookDescription>
        </BookInfoContainer>
        <BookAuthor className="animate-author">{book.author}</BookAuthor>
      </BookCardWrapper>
    </BookCardContainer>
  )
}
