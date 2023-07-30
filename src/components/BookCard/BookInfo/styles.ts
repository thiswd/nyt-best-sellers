import styled, { css } from "styled-components"

// For styles on hover check BookCard/styles.ts

export const BookInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`

export const BookTitle = styled.h2<{ fontSize: string }>`
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
  ${({ fontSize }) => css`
    font-size: ${fontSize};
  `};

  .block {
    display: block;
  }
`

export const BookAuthor = styled.p`
  text-align: center;
  padding: 0 0.4rem;
  font-family: var(--font-neutral);
  font-weight: 600;
  line-height: 1.2;
`

export const SourceContainer = styled.div`
  width: 100%;
  margin-bottom: 0;
`

export const BookPublisher = styled.p`
  height: 0;
  opacity: 0;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 0.8rem;
  line-height: 0;
  font-family: var(--font-header);
  line-height: 1.3;
`

export const BookContributor = styled(BookPublisher)`
  &::after {
    content: "";
    border-right: 0.08rem solid var(--book-cover-color);
    padding-right: 0.25rem;
    margin-right: 0.25rem;
  }
`

export const BookDescription = styled.p`
  height: 0;
  opacity: 0;
  padding: 0.5rem 0;
  font-family: var(--font-classic);
  line-height: 1.35;
`
