import styled from "styled-components"

// For styles on hover check BookCard/styles.ts

export const RankingContainer = styled.div`
  width: 100%;
  height: 5rem;
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--book-detail-color);
  padding: 0 1rem;
`

export const RankingLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.15rem;

  & > svg {
    width: 0;
    height: 0;
    opacity: 0;
    font-size: 0.9rem;
    color: var(--mid-light-gray);
  }
`

export const RankingLabel = styled.h4`
  width: 100%;
  color: var(--book-cover-color);
  font-size: 2.25rem;
  font-family: var(--font-header);
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
