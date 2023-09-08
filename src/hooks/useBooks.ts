import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import { Category, MAIN_CATEGORY } from "../data/categories"
import { BookType, fetchBooks } from "../services/api"

type BooksCacheType = {
  [category: string]: BookType[]
}

interface UseBooksPros {
  category: Category
  setCategory: (category: Category) => void
  books: BookType[]
  loading: boolean
}

export function useBooks(): UseBooksPros {
  const [loading, setLoading] = useState<boolean>(false)
  const [books, setBooks] = useState<BookType[]>([])
  const [booksCache, setBooksCache] = useState<BooksCacheType>(
    {} as BooksCacheType,
  )
  const [category, setCategory] = useState<Category>(MAIN_CATEGORY)

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

  return { loading, books, category, setCategory }
}
