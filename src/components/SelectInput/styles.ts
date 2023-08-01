import Select from "react-select"

import styled from "styled-components"

export const SelectInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0.5rem 2rem;
  gap: 1rem;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 0.25rem;
`

export const SelectLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-family: var(--font-neutral);
  font-size: 1rem;
  font-weight: 600;
`

export const SelectElement = styled(Select)`
  .react-select__control {
    border: 1.5px solid var(--light-gray);
    min-height: 0;
  }

  .react-select__control:hover,
  .react-select__control:focus {
    border-color: var(--book-cover-color);
  }

  .react-select__single-value,
  .react-select__option {
    font-family: var(--font-neutral);
  }

  .react-select__indicators {
    svg {
      fill: var(--book-cover-color);
      transform: rotate(180deg);
    }
  }

  .react-select__indicator-separator {
    background: var(--book-cover-color);
  }
`
