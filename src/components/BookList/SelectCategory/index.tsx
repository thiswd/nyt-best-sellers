import { ChangeEvent, useEffect, useState } from "react"
import { categories } from "../../../data/categories"
import { fetchBooks } from "../../../services/api"

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

interface SelectCategoryProps {
  getBooks: (books: Book[]) => void
}

const mainCategory = "combined-print-and-e-book-fiction"

export function SelectCategory({ getBooks }: SelectCategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(mainCategory)

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value)
  }

  useEffect(() => {
    fetchBooks(selectedCategory)
      .then(data => getBooks([...(data || [])]))
      .catch(error => console.error("Error:", error))
  }, [selectedCategory])

  return (
    <select value={selectedCategory} onChange={handleSelectChange}>
      {categories.map(category => (
        <option
          key={category.list_name_encoded}
          value={category.list_name_encoded}
        >
          {category.display_name}
        </option>
      ))}
    </select>
  )
}
