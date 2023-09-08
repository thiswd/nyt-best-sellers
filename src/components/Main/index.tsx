import { BookList } from "../BookList"
import { AppContainer } from "./styles"
import { MainTitle } from "../MainTitle"
import { RadioInput } from "../RadioInput"
import { SelectInput } from "../SelectInput"
import { SCREEN_SIZES } from "../../styles/screenSizes"
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { useBooks } from "../../hooks/useBooks"

export function Main() {
  const { windowWidth } = useWindowWidth()
  const { category, loading, books, setCategory } = useBooks()

  return (
    <>
      <MainTitle categoryName={category.label} />
      <AppContainer>
        <BookList books={books} loading={loading} />
        {windowWidth < SCREEN_SIZES.md ? (
          <SelectInput category={category} setCategory={setCategory} />
        ) : (
          <RadioInput category={category} setCategory={setCategory} />
        )}
      </AppContainer>
    </>
  )
}
