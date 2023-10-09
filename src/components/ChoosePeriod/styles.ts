import styled from "styled-components"

export const ChoosePeriodContainer = styled.div`
  width: 100%;
  padding: 0.4rem 0.25rem;
  border-top: 1px solid var(--light-gray);
  border-bottom: 3px double var(--book-cover-color);
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: space-between;
`
export const ChoosePeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--mid-gray);
`

export const PublishedTime = styled.time`
  font-family: var(--font-neutral);
  text-transform: uppercase;
  font-size: 0.9rem;
`

export const OtherListBtn = styled.button`
  font-size: 1.25rem;
`

export const LegendUl = styled.ul`
  display: flex;
  gap: 0.75rem;
`

export const LegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--light-gray);

  p {
    font-family: var(--font-neutral);
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  svg {
    font-size: 0.75rem;
  }
`
