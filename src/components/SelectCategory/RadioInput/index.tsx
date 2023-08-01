import { ChangeEvent } from "react"
import { Category, categories } from "../../../data/categories"
import { CategoryLabel, CategoryRadio } from "./styles"

interface RadioInputProps {
  category: Category
  setCategory: (category: Category) => void
}
export function RadioInput({ category, setCategory }: RadioInputProps) {
  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const newCategory: Category = JSON.parse(value)
    setCategory({ ...newCategory })
  }

  return (
    <>
      {categories.map(option => (
        <div key={option.value}>
          <CategoryRadio
            id={option.value}
            type="radio"
            name="radio"
            value={JSON.stringify(option)}
            onChange={handleCheck}
            checked={category.value === option.value}
          />
          <CategoryLabel htmlFor={option.value}>{option.label}</CategoryLabel>
        </div>
      ))}
    </>
  )
}
