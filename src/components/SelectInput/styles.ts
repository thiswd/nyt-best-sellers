import styled from "styled-components"

export const SelectInputContainer = styled.div`
  width: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const SelectLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: auto;
  text-transform: uppercase;
  font-family: var(--font-neutral);
  font-size: 1rem;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  .react-select__control {
    border: 1px solid var(--light-gray);
    min-height: 0;
  }
`

export const CategorySelect = styled.select`
  font-size: 1rem;
  font-family: var(--font-neutral);
  padding: 0.75rem;
`
