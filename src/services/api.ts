import axios, { AxiosError, isAxiosError } from "axios"

const API_BASE_URL = "https://api.nytimes.com/svc/books/v3/lists/current"

export type BookType = {
  rank: number
  rank_last_week: number
  publisher: string
  description: string
  title: string
  author: string
  contributor: string
  book_image: string
  weeks_on_list: number
}

interface ApiResponse {
  results: {
    books: BookType[]
  }
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: {
    "api-key": import.meta.env.VITE_NYT_BOOKS_API_KEY,
  },
})

const RATE_LIMIT_ERROR_MESSAGE =
  "You've exceeded the API rate limit. Please try again later."
const GENERIC_ERROR_MESSAGE = "An error occurred while fetching books."

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
    const response = await apiClient.get<ApiResponse>(`${category}.json`)
    const { books } = response.data.results

    const transformedBooks = books.map(transformBookData)

    return transformedBooks.slice(0, booksPerPage)
  } catch (err: unknown) {
    const error = err as AxiosError

    if (isAxiosError(error) && error.response?.status === 429) {
      throw new Error(RATE_LIMIT_ERROR_MESSAGE)
    } else {
      throw new Error(GENERIC_ERROR_MESSAGE)
    }
  }
}
