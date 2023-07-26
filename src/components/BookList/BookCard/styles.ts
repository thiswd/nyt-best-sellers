import styled from "styled-components"

export const BookCardContainer = styled.li`
  height: 100%;
  flex: 1;
  overflow: hidden;
  border-radius: 2px;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border: 2px solid #ead8c3;
  background: #991b1b;
  color: #ead8c3;

  &:hover {
    flex: 4;
    background: white;
    border: 2px solid #991b1b;
    color: black;

    .animate-title {
      transform: rotate(0);
      white-space: normal;
      transition:
        flex 0.4s,
        font-size 0.4s,
        transform 0.3s 0.4s white-space 0.3s 0.4s;
      margin: 0.5rem 1rem 0;
      justify-content: start;
    }

    .animate-ranking-label {
    }

    .animate-image {
      height: 180px;
      margin-bottom: 1rem;

      & > img {
        opacity: 1;
        transition: opacity 0.5s 0.3s ease-in-out;
      }
    }

    .animate-description {
      height: auto;
      opacity: 1;
      transition: opacity 0.5s 0.3s ease-in-out;
    }

    .animate-contributor {
      height: auto;
      opacity: 1;
      transition: opacity 0.5s 0.3s ease-in-out;
      margin-bottom: 0.75rem;
      margin-top: -0.25rem;
    }

    .animate-author {
      opacity: 0;
    }
  }
`

export const BookCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const BookTitle = styled.h2`
  text-transform: uppercase;
  width: 100%;
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
  font-size: 1.2rem;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 0;

  & > img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }
`

export const RankingLabel = styled.h4`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ead8c3;
  color: #991b1b;
  padding: 1rem 0;
  font-size: 2.25rem;
  font-family: "Alegreya", serif;
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
  padding: 0 1rem;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 0.8rem;
`

export const BookDescriptionContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
`

export const BookDescription = styled.p`
  height: 0;
  opacity: 0;
  padding: 0.5rem 0;
  border-top: 1px solid #a1a1aa;
  font-family: "Alegreya", serif;
`
