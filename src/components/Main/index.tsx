import { BookList } from "../BookList"
import { AppContainer, InputCategoryContainer } from "./styles"
import { MainTitle } from "../MainTitle"
import { RadioInput } from "../RadioInput"
import { SelectInput } from "../SelectInput"
import { ChoosePeriod } from "../ChoosePeriod"
import { SCREEN_SIZES } from "../../styles/screenSizes"
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { useBooks } from "../../hooks/useBooks"

export function Main() {
  const { windowWidth } = useWindowWidth()
  const {
    category,
    loading,
    books,
    setCategory,
    publishedDates,
    setCurrentPublishedDate,
  } = useBooks()

  const InputComponent =
    windowWidth < SCREEN_SIZES.md ? SelectInput : RadioInput

  return (
    <>
      <MainTitle categoryName={category.label} />
      <AppContainer>
        <ChoosePeriod
          publishedDates={publishedDates}
          setCurrentPublishedDate={setCurrentPublishedDate}
        />
        <BookList books={books} loading={loading} />

        <InputCategoryContainer>
          <InputComponent
            category={category}
            setCategory={setCategory}
            setCurrentPublishedDate={setCurrentPublishedDate}
          />
        </InputCategoryContainer>
      </AppContainer>
    </>
  )
}
