import styled from "styled-components"
import { media } from "../../styles/screenSizes"

export const ChoosePeriodContainer = styled.div`
  width: 100%;
  padding: 0.4rem 0.5rem;
  border-bottom: 5px double var(--book-cover-color);
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--book-detail-color);
`
export const ChoosePeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mid-gray);
`

export const PublishedTime = styled.time`
  font-family: var(--font-neutral);
  text-transform: uppercase;
  text-align: center;
  font-size: 0.8rem;
  min-width: 8.25rem;

  ${media.sm`
    font-size: 0.9rem;
    min-width: 10rem;
  `}
`

export const OtherListBtn = styled.button`
  font-size: 1rem;
  padding-bottom: 0.5px;

  &:disabled {
    cursor: not-allowed;
    color: var(--light-gray);
  }
`

export const LegendUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  ${media.sm`
    gap: 0.75rem;
    flex-direction: row;
  `}
`

export const LegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--mid-light-gray);

  p {
    font-family: var(--font-neutral);
    text-transform: uppercase;
    font-size: 0.7rem;

    ${media.md`
      font-size: 0.8rem;
    `}
  }

  svg {
    font-size: 0.6rem;

    ${media.md`
      font-size: 0.62rem;
    `}
  }
`
