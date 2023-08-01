import { SingleValue } from "react-select"

import {
  SelectContainer,
  SelectElement,
  SelectInputContainer,
  SelectLabel,
} from "./styles"
import { Category, categoriesByUpdateFrequency } from "../../data/categories"

interface SelectCategoryProps {
  category: Category
  setCategory: (category: Category) => void
}

const { weekly, monthly } = categoriesByUpdateFrequency

export function SelectInput({ category, setCategory }: SelectCategoryProps) {
  function handleCheck(newValue: unknown) {
    const newCategory = newValue as SingleValue<Category>

    if (!newCategory) return
    setCategory(newCategory as Category)
  }

  const findCategory = (categories: Category[]): Category | null => {
    return categories.find(({ value }) => value === category.value) || null
  }

  return (
    <SelectInputContainer>
      <SelectContainer>
        <SelectLabel htmlFor="select-weekly">Weekly lists</SelectLabel>
        <SelectElement
          id="select-weekly"
          classNamePrefix="react-select"
          value={findCategory(weekly)}
          onChange={handleCheck}
          options={weekly}
          menuPlacement="top"
        />
      </SelectContainer>
      <SelectContainer>
        <SelectLabel htmlFor="select-monthly">Monthly lists</SelectLabel>
        <SelectElement
          id="select-monthly"
          classNamePrefix="react-select"
          value={findCategory(monthly)}
          onChange={handleCheck}
          options={monthly}
          menuPlacement="top"
        />
      </SelectContainer>
    </SelectInputContainer>
  )
}
