import { ChangeEvent } from "react"

import { CategoryLabel, CategoryRadio, RadioContainer } from "./styles"
import { CATEGORIES, Category } from "../../data/categories"
import { DEFAULT_PERIOD_LIST } from "../../api/books/booksService"

interface RadioInputProps {
  category: Category
  setCategory: (category: Category) => void
  setCurrentPublishedDate: (date: string) => void
}

export function RadioInput({
  category,
  setCategory,
  setCurrentPublishedDate,
}: RadioInputProps) {
  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const newCategory: Category = JSON.parse(value)
    setCategory({ ...newCategory })
    setCurrentPublishedDate(DEFAULT_PERIOD_LIST)
  }

  return (
    <RadioContainer>
      {CATEGORIES.map(option => (
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
    </RadioContainer>
  )
}
