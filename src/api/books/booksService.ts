import { handleApiError } from "./errorHandler"
import { BookType, PublishedDatesType } from "../../types/bookTypes"
import { apiClient } from "./../apiClient"

interface IBooksApiResponse {
  results: {
    books: BookType[]
    published_date: string
    next_published_date: string
    previous_published_date: string
    updated: string
  }
}

interface IFetchBooks {
  dates: PublishedDatesType
  books: BookType[]
}

function transformBookData(book: BookType): BookType {
  return {
    rank: book.rank,
    rank_last_week: book.rank_last_week,
    publisher: book.publisher,
    description: book.description,
    title: book.title,
    author: book.author,
    contributor: book.contributor,
    book_image: book.book_image,
    weeks_on_list: book.weeks_on_list,
  }
}

const BOOKS_PER_PAGE = 15

export async function fetchBooks(
  category: string,
  listPublishedDate: string,
  booksPerPage: number = BOOKS_PER_PAGE,
): Promise<IFetchBooks | undefined> {
  try {
    const response = await apiClient.get<IBooksApiResponse>(
      `${listPublishedDate}/${category}.json`,
    )

    const {
      published_date: publishedDate,
      next_published_date: nextPublishedDate,
      previous_published_date: previousPublishedDate,
      updated,
      books,
    } = response.data.results

    const transformedBooks = books.map(transformBookData).slice(0, booksPerPage)

    return {
      dates: {
        publishedDate,
        nextPublishedDate,
        previousPublishedDate,
        updated,
      },
      books: transformedBooks,
    }
  } catch (err: unknown) {
    handleApiError(err)
  }
}
