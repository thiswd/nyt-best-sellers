import Select, { SingleValue } from "react-select"

import { Category, categoriesByUpdateFrequency } from "../../../data/categories"
import { SelectContainer, SelectInputContainer, SelectLabel } from "./styles"

interface SelectCategoryProps {
  category: Category
  setCategory: (category: Category) => void
}

const { weekly, monthly } = categoriesByUpdateFrequency

export function SelectInput({ category, setCategory }: SelectCategoryProps) {
  function handleCheck(newCategory: SingleValue<Category>) {
    if (!newCategory) return
    setCategory({ ...newCategory })
  }

  return (
    <SelectInputContainer>
      <SelectContainer>
        <SelectLabel htmlFor="select-weekly">Weekly lists</SelectLabel>
        <Select
          id="select-weekly"
          value={category}
          onChange={handleCheck}
          options={weekly}
        />
      </SelectContainer>
      <SelectContainer>
        <SelectLabel htmlFor="select-monthly">Monthly lists</SelectLabel>
        <Select
          id="select-monthly"
          value={category}
          onChange={handleCheck}
          options={monthly}
        />
      </SelectContainer>
    </SelectInputContainer>
  )
}
