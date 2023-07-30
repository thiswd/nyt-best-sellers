import styled from "styled-components"

export const RadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  margin: 1rem 0;
`

export const CategoryRadio = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 23px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
  }

  &:checked + label:before,
  &:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #a3a3a3;
    border-radius: 100%;
    background: white;
  }

  &:checked + label:after,
  &:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: var(--book-cover-color);
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    transition: all 0.3s ease;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`

export const CategoryLabel = styled.label`
  margin: 0.25rem;
  text-transform: uppercase;
  font-family: var(--font-neutral);
  font-weight: semibold;
  font-size: 1rem;
`
