import { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { Category, MAIN_CATEGORY } from "../data/categories"
import { BookType } from "../types/bookTypes"
import { fetchBooks } from "../api/books/booksService"

type BooksCacheType = {
  [category: string]: BookType[]
}

interface UseBooksPros {
  category: Category
  setCategory: (category: Category) => void
  books: BookType[]
  loading: boolean
}

const DEFAULT_PERIOD_LIST = "current"

export function useBooks(): UseBooksPros {
  const [loading, setLoading] = useState<boolean>(false)
  const [books, setBooks] = useState<BookType[]>([])
  const [booksCache, setBooksCache] = useState<BooksCacheType>(
    {} as BooksCacheType,
  )
  const [publishedDates, setPublishedDates] = useState({})
  const [currentPublishedDate, setCurrentPublishedDate] =
    useState(DEFAULT_PERIOD_LIST)
  const [category, setCategory] = useState<Category>(MAIN_CATEGORY)

  const getBooksFromApi = useCallback(async () => {
    setLoading(true)

    try {
      const { dates, books } = await fetchBooks(
        category.value,
        currentPublishedDate,
      )

      if (books && books.length > 0) {
        setBooks([...books])
        setPublishedDates({ ...dates })

        const categoryWithDateKey = buildCategoryKey(
          category.value,
          currentPublishedDate,
        )
        setBooksCache(prev => ({
          ...prev,
          [categoryWithDateKey]: { books, dates },
        }))
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
  }, [category.value, currentPublishedDate])

  useEffect(() => {
    const newCategoryKey = buildCategoryKey(
      category.value,
      currentPublishedDate,
    )
    const existingBooksList = booksCache[newCategoryKey]

    if (existingBooksList) {
      setBooks([...existingBooksList.books])
      setPublishedDates({ ...existingBooksList.dates })
    } else {
      getBooksFromApi()
    }
  }, [category, booksCache, currentPublishedDate, getBooksFromApi])

  return {
    loading,
    books,
    category,
    setCategory,
    publishedDates,
    setCurrentPublishedDate,
  }
}

function buildCategoryKey(category: string, date: string) {
  return [category, date].join("-")
}
