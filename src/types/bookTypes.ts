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

export type PublishedDatesType = {
  publishedDate: string
  nextPublishedDate: string
  previousPublishedDate: string
  updated: string
}
