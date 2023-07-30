import { bookFontSize, splitTitle } from "../../../utils/bookInfos"
import {
  BookAuthor,
  BookContributor,
  BookDescription,
  BookInfoContainer,
  BookPublisher,
  BookTitle,
  SourceContainer,
} from "./styles"

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
  const formatTitle = () => {
    if (title.length >= 22) {
      const [firstLine, secondLine] = splitTitle(title)

      return (
        <>
          {firstLine} <br className="block animate-br" /> {secondLine}
        </>
      )
    }
    return title
  }

  return (
    <BookInfoContainer className="animate-info-container">
      <BookTitle fontSize={bookFontSize(title)} className="animate-title">
        {formatTitle()}
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
