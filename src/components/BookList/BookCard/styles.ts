import styled from "styled-components"

export const BookCardContainer = styled.li`
  height: 100%;
  flex: 1;
  overflow: hidden;
  border-radius: 2px;
  transition: all 0.5s;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  &:hover {
    flex: 4;

    div > h3 {
      transform: rotate(0);
      white-space: normal;
      transition:
        flex 0.5s,
        transform 0.3s 0.4s;
    }
  }
`

export const BookCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h3 {
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
    transition:
      transform 0.3s,
      flex 0.3s 0.5s;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;
    white-space: nowrap;
    text-align: center;
  }
`

export const RankingLabel = styled.h4`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: #b6c1c7;
  padding: 1rem 0;
`

export const BookAuthor = styled.p`
  text-align: center;
  padding: 0 0.4rem;
`
