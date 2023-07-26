import { BookTitle } from "../styles"
import {
  BookAuthor,
  BookContributor,
  BookDescription,
  BookInfoContainer,
} from "./styles"

interface BookInfoProps {
  title: string
  contributor: string
  description: string
  author: string
}
export function BookInfo({
  title,
  contributor,
  description,
  author,
}: BookInfoProps) {
  return (
    <BookInfoContainer className="animate-info-container">
      <BookTitle className="animate-title">{title}</BookTitle>
      <BookContributor className="animate-contributor">
        {contributor}
      </BookContributor>
      <BookDescription className="animate-description">
        {description}
      </BookDescription>
      <BookAuthor className="animate-author">{author}</BookAuthor>
    </BookInfoContainer>
  )
}
