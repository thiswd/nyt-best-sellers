import styled from "styled-components"

export const BookListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.25rem;
`

export const StyledBookList = styled.ul`
  min-width: 0;
  height: var(--book-height);
  border-radius: 0.25rem;
  display: flex;
  margin: 0 auto;
  gap: 5px;
  padding: 0 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  cursor: pointer;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 0.25rem;
  scroll-padding-right: 0.25rem;
`
