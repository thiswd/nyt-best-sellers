import styled from "styled-components"

export const BookInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`

export const BookAuthor = styled.p`
  text-align: center;
  padding: 0 0.4rem;
  font-family: "Arial";
  font-weight: 600;
`

export const BookContributor = styled.h5`
  height: 0;
  opacity: 0;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 0.8rem;
`

export const BookDescription = styled.p`
  height: 0;
  opacity: 0;
  padding: 0.5rem 0;
  border-top: 1px solid #a1a1aa;
  font-family: "Alegreya", serif;
`
