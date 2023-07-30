import { ChangeEvent } from "react"
import { categories } from "../../data/categories"
import { CategoryLabel, CategoryRadio, RadioContainer } from "./styles"

interface SelectCategoryProps {
  category: string
  setCategory: (category: string) => void
}

export function SelectCategory({ category, setCategory }: SelectCategoryProps) {
  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    const newCategory = event.target.value
    setCategory(newCategory)
  }

  return (
    <RadioContainer>
      {categories.map(({ list_name_encoded, display_name }) => (
        <div key={list_name_encoded}>
          <CategoryRadio
            id={list_name_encoded}
            type="radio"
            name="radio"
            value={list_name_encoded}
            className="status-filters-btn"
            onChange={handleCheck}
            checked={category === list_name_encoded}
          />
          <CategoryLabel
            htmlFor={list_name_encoded}
            className="status-radio-label"
          >
            <span className="name">{display_name}</span>
          </CategoryLabel>
        </div>
      ))}
    </RadioContainer>
  )
}
