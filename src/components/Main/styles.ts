import styled from "styled-components"
import { media } from "../../styles/screenSizes"

export const MainTitle = styled.h1`
  text-align: center;
  margin: 1.5rem 0 2rem;
  font-size: 2.5rem;
  font-family: var(--font-header);

  ${media.md`
    font-size: 3rem;
  `}
`
export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.25rem;
`
