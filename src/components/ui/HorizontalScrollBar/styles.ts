import styled from "styled-components"

export const ScrollBarContainer = styled.div`
  width: 100%;

  ::-webkit-scrollbar {
    height: 0.75rem;
    background: rgba(153, 27, 27, 0.9);
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(254, 240, 138, 0.8);
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--other);
  }
`
