import {
  BookAuthor,
  BookContributor,
  BookDescription,
  BookInfoContainer,
  BookPublisher,
  BookTitle,
  SourceContainer,
} from "./styles"
import { bookFontSize, formatTitle } from "../../../utils/bookInfos"

interface BookInfoProps {
  title: string
  contributor: string
  publisher: string
  description: string
  author: string
}

export function BookInfo({
  title,
  contributor,
  publisher,
  description,
  author,
}: BookInfoProps) {
  return (
    <BookInfoContainer className="animate-info-container">
      <BookTitle
        fontSize={bookFontSize(title, author)}
        className="animate-title"
      >
        {formatTitle(title)}
      </BookTitle>
      <SourceContainer className="animate-source-container">
        <BookContributor className="animate-contributor">
          {contributor}
        </BookContributor>
        <BookPublisher className="animate-contributor">
          {publisher}
        </BookPublisher>
      </SourceContainer>
      <BookDescription className="animate-description">
        {description}
      </BookDescription>
      <BookAuthor className="animate-author">{author}</BookAuthor>
    </BookInfoContainer>
  )
}
