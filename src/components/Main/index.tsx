import { useEffect, useState } from "react"
import { BookList } from "../BookList"
import { AppContainer } from "./styles"
import { BookType, fetchBooks } from "../../services/api"
import { MainTitle } from "../MainTitle"
import { Category, MAIN_CATEGORY } from "../../data/categories"
import { RadioInput } from "../RadioInput"
import { SelectInput } from "../SelectInput"
import { SCREEN_SIZES } from "../../styles/screenSizes"

export function Main() {
  const [loading, setLoading] = useState<boolean>(false)
  const [books, setBooks] = useState<BookType[]>([])
  const [category, setCategory] = useState<Category>(MAIN_CATEGORY)
  const [width, setWidth] = useState<number>(window.innerWidth)

  function getBooks(newCategory: Category) {
    setLoading(true)

    fetchBooks(newCategory.value)
      .then(books => {
        setBooks([...(books || [])])
      })
      .catch((error: Error) => {
        alert(error.message)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window
      setWidth(innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    getBooks(category)
  }, [category])

  return (
    <>
      <MainTitle categoryName={category.label} />
      <AppContainer>
        <BookList books={books} loading={loading} />
        {width < SCREEN_SIZES.md ? (
          <SelectInput category={category} setCategory={setCategory} />
        ) : (
          <RadioInput category={category} setCategory={setCategory} />
        )}
      </AppContainer>
    </>
  )
}
