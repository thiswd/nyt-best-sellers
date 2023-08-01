import styled from "styled-components"
import { media } from "../../styles/screenSizes"

export const MainTitleContainer = styled.div`
  margin: 2rem 2rem 1.5rem;
`

export const StyledTitle = styled.h1`
  font-family: var(--font-header);
  font-size: 2.5rem;

  ${media.md`
    font-size: 3rem;
  `}

  ${media.xl`
    font-size: 3.2rem;
  `}
`

export const SectionName = styled.div`
  display: flex;

  p {
    text-transform: uppercase;
    font-family: var(--font-subtitle);
    font-weight: 500;
  }

  p:first-child {
    &::after {
      content: "";
      border-right: 0.15rem solid var(--book-cover-color);
      padding-right: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`
