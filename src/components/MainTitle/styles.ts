import styled from "styled-components"
import { media } from "../../styles/screenSizes"

export const MainTitleContainer = styled.div`
  margin: 1.5rem 1rem 1rem;

  ${media.lg`
    margin: 1.5rem 1.75rem 1rem;
  `}
`

export const StyledTitle = styled.h1`
  font-family: var(--font-header);
  font-size: 2.5rem;

  ${media.sm`
    font-size: 2.4rem;
  `}

  ${media.md`
    font-size: 2.7rem;
  `}

  ${media.lg`
    font-size: 3.2rem;
  `}

  ${media.xl`
    font-size: 3.4rem;
  `}
`

export const SectionName = styled.div`
  display: flex;

  p {
    text-transform: uppercase;
    font-family: var(--font-subtitle);
    font-weight: 500;
    font-size: 0.8rem;
    margin-bottom: 0.15rem;

    ${media.md`
      font-size: 0.8rem;
    `}

    ${media.lg`
      font-size: 1rem;
      margin-bottom: 0;
    `}

    ${media.xl`
      font-size: 1.1rem;
    `}
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
