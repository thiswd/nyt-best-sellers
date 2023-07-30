import styled from "styled-components"

// For styles on hover check BookCard/styles.ts

export const RankingContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--highlight);
  padding: 0 1rem;
`

export const RankingLabel = styled.h4`
  width: 100%;
  color: var(--book-cover-color);
  font-size: 2.25rem;
  font-family: var(--font-classic);
  text-align: center;
`

export const OrdinalSuffix = styled.span`
  opacity: 0;
  width: 0;
  height: 0;
  display: block;
  color: var(--book-cover-color);
`

export const WeeksOnList = styled.h4`
  opacity: 0;
  width: 0;
  height: 0;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 0.75rem;
  color: black;
`
