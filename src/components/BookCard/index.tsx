import { BookType } from "../../services/api"
import { bookAltAttr } from "../../utils/bookInfos"
import { BookInfo } from "./BookInfo"
import { RankingInfo } from "./RankingInfo"
import { BookCardContainer, BookCardWrapper, ImageContainer } from "./styles"

interface BookCardProps {
  book: BookType
}

export function BookCard({ book }: BookCardProps) {
  const imgAlt = bookAltAttr(book.title, book.contributor)

  return (
    <BookCardContainer rank={book.rank}>
      <BookCardWrapper className="animate-container">
        <RankingInfo rank={book.rank} weeksOnTheList={book.weeks_on_list} />
        <ImageContainer className="animate-image">
          <img src={book.book_image} alt={imgAlt} />
        </ImageContainer>
        <BookInfo
          title={book.title}
          contributor={book.contributor}
          publisher={book.publisher}
          description={book.description}
          author={book.author}
        />
      </BookCardWrapper>
    </BookCardContainer>
  )
}
