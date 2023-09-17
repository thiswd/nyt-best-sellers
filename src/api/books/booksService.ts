import { handleApiError } from "./errorHandler"
import { BookType, BooksApiResponse } from "../../types/bookTypes"
import { apiClient } from "./../apiClient"

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

export const BOOKS_PER_PAGE = 15

export async function fetchBooks(
  category: string,
  booksPerPage: number = BOOKS_PER_PAGE,
): Promise<BookType[] | undefined> {
  try {
    const response = await apiClient.get<BooksApiResponse>(`${category}.json`)
    const { books } = response.data.results

    const transformedBooks = books.map(transformBookData)

    return transformedBooks.slice(0, booksPerPage)
  } catch (err: unknown) {
    handleApiError(err)
  }
}
