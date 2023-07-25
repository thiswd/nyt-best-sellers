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

interface BookListProps {
  books: Book[]
}

export function BookList({ books }: BookListProps) {
  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.primary_isbn10}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}
