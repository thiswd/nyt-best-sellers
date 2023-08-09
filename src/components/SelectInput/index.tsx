import { SingleValue } from "react-select"

import {
  SelectContainer,
  SelectElement,
  SelectInputContainer,
  SelectLabel,
} from "./styles"
import { Category, CATEGORIES_BY_FREQUENCY } from "../../data/categories"

interface SelectCategoryProps {
  category: Category
  setCategory: (category: Category) => void
}

export function SelectInput({ category, setCategory }: SelectCategoryProps) {
  function handleCheck(newValue: unknown) {
    const newCategory = newValue as SingleValue<Category>

    if (!newCategory) return
    setCategory({ ...newCategory } as Category)
  }

  const findCategory = (categories: Category[]): Category | null => {
    return categories.find(({ value }) => value === category.value) || null
  }

  return (
    <SelectInputContainer>
      {Object.entries(CATEGORIES_BY_FREQUENCY).map(
        ([frequency, categories]) => (
          <SelectContainer key={frequency}>
            <SelectLabel htmlFor={`select-${frequency}`}>
              {frequency} lists
            </SelectLabel>
            <SelectElement
              id={`select-${frequency}`}
              classNamePrefix="react-select"
              value={findCategory(categories)}
              onChange={handleCheck}
              options={categories}
              menuPlacement="top"
            />
          </SelectContainer>
        ),
      )}
    </SelectInputContainer>
  )
}
