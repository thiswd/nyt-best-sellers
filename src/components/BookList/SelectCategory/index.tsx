import { ChangeEvent } from "react"
import { categories } from "../../../data/categories"

interface SelectCategoryProps {
  category: string
  setCategory: (category: string) => void
}

export function SelectCategory({ category, setCategory }: SelectCategoryProps) {
  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const newCategory = event.target.value
    setCategory(newCategory)
  }

  return (
    <select value={category} onChange={handleSelectChange}>
      {categories.map(category_option => (
        <option
          key={category_option.list_name_encoded}
          value={category_option.list_name_encoded}
        >
          {category_option.display_name}
        </option>
      ))}
    </select>
  )
}
