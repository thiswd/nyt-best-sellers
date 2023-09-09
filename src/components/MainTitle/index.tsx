import { MainTitleContainer, SectionName, StyledTitle } from "./styles"

interface CategoryProps {
  categoryName: string
}

export function MainTitle({ categoryName }: CategoryProps) {
  return (
    <MainTitleContainer>
      <SectionName>
        <p>NYTimes</p>
        <p>Books</p>
        <p>Best sellers</p>
      </SectionName>
      <StyledTitle>{categoryName}</StyledTitle>
    </MainTitleContainer>
  )
}
