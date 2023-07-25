import { useCallback, useState } from "react"
import { SelectCategory } from "./SelectCategory"

interface Book {
  rank: number
  rank_last_week: number
  publisher: string
  description: string
  title: string
  author: string
  book_image: string
  primary_isbn10: string
}

export function BookList() {
  const [books, setBooks] = useState<Book[]>([])

  const getBooks = useCallback((data: Book[]) => setBooks([...data]), [])

  return (
    <div>
      <SelectCategory getBooks={getBooks} />
      <ul>
        {books.map(book => (
          <li key={book.primary_isbn10}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}
