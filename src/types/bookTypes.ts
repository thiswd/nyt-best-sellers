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

export interface BooksApiResponse {
  results: {
    books: BookType[]
  }
}
