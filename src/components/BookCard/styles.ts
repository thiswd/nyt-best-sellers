import styled, { css } from "styled-components"

interface BookCardContainerProps {
  rank: number
}

export const BookCardContainer = styled.li<BookCardContainerProps>`
  ${({ rank }) => {
    switch (rank) {
      case 1:
        return css`
          --highlight: var(--gold);
        `
      case 2:
        return css`
          --highlight: var(--silver);
        `
      case 3:
        return css`
          --highlight: var(--bronze);
        `
      default:
        return css`
          --highlight: var(--other);
        `
    }
  }};

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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background: var(--book-cover-color);
  color: var(--other);

  &:hover {
    flex: 4;
    color: black;
    background-color: white;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    .animate-ranking-container {
      justify-content: space-between;
      align-items: end;
      transition:
        justify-content 0.3s 0.6s,
        align-items 0.3s 0.6s;
    }

    .animate-ranking-label {
      width: auto;
      font-size: 1.25rem;
      padding: 0;
      color: black;
      transition: all 0.3s 0.6s;
    }

    .animate-ordinal-suffix {
      opacity: 1;
      display: inline;
      color: black;
      transition:
        opacity 0.5s 0.3s ease-in-out,
        color 0.3s 0.6s;
    }

    .animate-weeks-on-list {
      opacity: 1;
      width: auto;
      height: auto;
      transition: opacity 0.5s 0.3s ease-in-out;
    }

    .animate-title {
      transform: rotate(0);
      white-space: normal;
      font-size: 1.15rem;
      transition:
        flex 0.5s,
        transform 0.3s 0.4s;
      margin: 0;
      justify-content: start;
    }

    .animate-image {
      height: 230px;
      padding: 1rem 0;
      transition: height 0.5s;

      & > img {
        opacity: 1;
        transition: opacity 0.5s 0.3s ease-in-out;
      }
    }

    .animate-info-container {
      justify-content: start;
      align-items: start;
      padding-top: 0.5rem;
      background-color: var(--highlight);
      transition: background-color 0.5s;
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
      height: 0;
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
  font-size: 1.3rem;
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
