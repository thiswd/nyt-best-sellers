import { useEffect, useState } from "react"
import { BookList } from "../BookList"
import { SelectCategory } from "../SelectCategory"
import { AppContainer, MainTitle } from "./styles"
import { BookType, fetchBooks } from "../../services/api"

const MAIN_CATEGORY = "combined-print-and-e-book-fiction"
export function Main() {
  const [loading, setLoading] = useState<boolean>(false)
  const [books, setBooks] = useState<BookType[]>([])
  const [category, setCategory] = useState<string>(MAIN_CATEGORY)

  function getBooks(newCategory: string) {
    setLoading(true)
    fetchBooks(newCategory)
      .then(books => {
        setBooks([...(books || [])])
      })
      .catch((error: Error) => {
        alert(error.message)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getBooks(category)
  }, [category])

  return (
    <>
      <MainTitle>Best Sellers in {category}</MainTitle>
      <AppContainer>
        <BookList books={books} loading={loading} />
        <SelectCategory category={category} setCategory={setCategory} />
      </AppContainer>
    </>
  )
}
