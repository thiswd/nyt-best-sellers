import styled, { css } from "styled-components"
import { media } from "../../styles/screenSizes"

interface BookCardContainerProps {
  rank: number
}

const [first, second, third] = [1, 2, 3]

const opacityTransition = "opacity 0.5s 0.3s ease-in-out;"

const calcColsWidth = (cols: number): string => {
  return `(100dvw / ${cols}) - (100dvw / ${
    (2 * cols + 1) * cols
  }) - (2 * 0.25rem)`
}

const calcOpenCols = (cols: number, openCols: number): string => {
  return `(100dvw / ${cols}) * ${openCols} - (2 * 0.5rem)`
}

export const BookCardContainer = styled.li<BookCardContainerProps>`
  ${({ rank }) => {
    switch (rank) {
      case first:
        return css`
          --highlight: var(--gold);
        `
      case second:
        return css`
          --highlight: var(--silver);
        `
      case third:
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
  scroll-snap-align: start;

  min-width: calc(${calcColsWidth(3)});

  ${media.xs`
    min-width: calc(${calcColsWidth(4)});
  `}

  ${media.sm`
    min-width: calc(${calcColsWidth(7)});
  `}

  ${media.md`
    min-width: calc(${calcColsWidth(8)});
  `}

  ${media.lg`
    min-width: calc(${calcColsWidth(10)});
  `}

  ${media.xl`
    min-width: calc(${calcColsWidth(12)});
  `}

  ${media.xxl`
    min-width: calc(${calcColsWidth(14)});
  `}

  &:hover {

    /* Animations */

    color: black;
    background-color: white;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    flex: 1 0 calc(${calcOpenCols(3, 3)});

    ${media.xs`
      flex: 1 0 calc(${calcOpenCols(5, 3)});
    `}

    ${media.sm`
      flex: 1 0 calc(${calcOpenCols(8, 4)});
    `}

    ${media.md`
      flex: 1 0 calc(${calcOpenCols(9, 3.5)});
    `}

    ${media.lg`
      flex: 1 0 calc(${calcOpenCols(10, 3)});
    `}

    ${media.xl`
      flex: 1 0 calc(${calcOpenCols(12, 3)});
    `}

    ${media.xl`
      flex: 1 0 calc(${calcOpenCols(14, 3)});
    `}

    .animate-ranking-container {
      justify-content: space-between;
      align-items: end;
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
        color 0.3s 0.6s,
        ${opacityTransition}
    }

    .animate-weeks-on-list {
      opacity: 1;
      width: auto;
      height: auto;
      transition: ${opacityTransition}
    }

    .animate-title {
      transform: rotate(0);
      white-space: normal;
      font-size: 1.15rem;
      color: #7f1d1d;
      margin: 0;
      justify-content: start;
      transition: transform 0.3s 0.4s;
      text-align: left;
    }

    .animate-br {
      display: none;
    }

    .animate-image {
      height: 230px;
      padding: 0.75rem 0;
      transition: height 0.5s;

      & > img {
        opacity: 1;
        transition: ${opacityTransition}
      }
    }

    .animate-info-container {
      justify-content: start;
      align-items: start;
      padding-top: 0.75rem;
      background-color: var(--highlight);
      transition: background-color 0.5s;
    }

    .animate-source-container {
      margin-bottom: 0.5rem;
    }

    .animate-contributor {
      height: auto;
      display: inline;
      opacity: 1;
      transition: ${opacityTransition}
      margin-bottom: 0.5rem;
      margin-top: -0.25rem;
    }

    .animate-description {
      height: auto;
      opacity: 1;
      transition: ${opacityTransition};
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
