import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import { BookList } from "../BookList"
import { AppContainer } from "./styles"
import { BookType, fetchBooks } from "../../services/api"
import { MainTitle } from "../MainTitle"
import { Category, MAIN_CATEGORY } from "../../data/categories"
import { RadioInput } from "../RadioInput"
import { SelectInput } from "../SelectInput"
import { SCREEN_SIZES } from "../../styles/screenSizes"
import { useWindowWidth } from "../../hooks/useWindowWidth"

type BooksCacheType = {
  [category: string]: BookType[]
}

export function Main() {
  const [loading, setLoading] = useState<boolean>(false)
  const [books, setBooks] = useState<BookType[]>([])
  const [booksCache, setBooksCache] = useState<BooksCacheType>(
    {} as BooksCacheType,
  )
  const [category, setCategory] = useState<Category>(MAIN_CATEGORY)

  const { windowWidth } = useWindowWidth()

  async function getBooksFromApi(categoryKey: string) {
    setLoading(true)

    try {
      const books = await fetchBooks(categoryKey)
      if (books && books.length > 0) {
        setBooks([...books])
        setBooksCache(prev => ({ ...prev, [categoryKey]: books }))
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const newCategoryKey = category.value
    const existingBooksList = booksCache[newCategoryKey]

    if (existingBooksList) {
      setBooks([...existingBooksList])
    } else {
      getBooksFromApi(newCategoryKey)
    }
  }, [category, booksCache])

  return (
    <>
      <MainTitle categoryName={category.label} />
      <AppContainer>
        <BookList books={books} loading={loading} />
        {windowWidth < SCREEN_SIZES.md ? (
          <SelectInput category={category} setCategory={setCategory} />
        ) : (
          <RadioInput category={category} setCategory={setCategory} />
        )}
      </AppContainer>
    </>
  )
}
