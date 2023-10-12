import { BookCardContainer, BookCardWrapper, ImageContainer } from "./styles"
import { BookInfo } from "./BookInfo"
import { RankingInfo } from "./RankingInfo"
import { BookType } from "../../types/bookTypes"
import { bookAltAttr } from "../../utils/bookInfos"

interface BookCardProps {
  book: BookType
}

export function BookCard({ book }: BookCardProps) {
  const imgAlt = bookAltAttr(book.title, book.contributor)

  return (
    <BookCardContainer>
      <BookCardWrapper className="animate-container">
        <RankingInfo
          rank={book.rank}
          rankLastWeek={book.rank_last_week}
          weeksOnTheList={book.weeks_on_list}
        />
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
