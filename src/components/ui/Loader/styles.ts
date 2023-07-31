import styled from "styled-components"

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: -translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`
const baseWidth = "15px"
const openWidth = "40px"
const animation = "2s forwards ease-in-out infinite"

export const Box = styled.div`
  width: ${baseWidth};
  height: 80px;
  background-color: var(--book-cover-color);
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &.box-0 {
    animation: box0animation ${animation};
  }

  @keyframes box0animation {
    0% {
      width: ${baseWidth};
    }

    12.5% {
      width: ${openWidth};
    }

    25% {
      width: ${baseWidth};
    }

    37.5% {
      width: ${baseWidth};
    }

    50% {
      width: ${baseWidth};
    }

    62.5% {
      width: ${baseWidth};
    }

    75% {
      width: ${baseWidth};
    }

    100% {
      width: ${baseWidth};
    }
  }

  &.box-1 {
    animation: box1animation ${animation};
  }

  @keyframes box1animation {
    0% {
      width: ${baseWidth};
    }

    12.5% {
      width: ${baseWidth};
    }

    25% {
      width: ${openWidth};
    }

    37.5% {
      width: ${baseWidth};
    }

    50% {
      width: ${baseWidth};
    }

    62.5% {
      width: ${baseWidth};
    }

    75% {
      width: ${baseWidth};
    }

    100% {
      width: ${baseWidth};
    }
  }

  &.box-2 {
    animation: box2animation ${animation};
  }

  @keyframes box2animation {
    0% {
      width: ${baseWidth};
    }

    12.5% {
      width: ${baseWidth};
    }

    25% {
      width: ${baseWidth};
    }

    37.5% {
      width: ${openWidth};
    }

    50% {
      width: ${baseWidth};
    }

    62.5% {
      width: ${baseWidth};
    }

    75% {
      width: ${baseWidth};
    }

    100% {
      width: ${baseWidth};
    }
  }

  &.box-3 {
    animation: box3animation ${animation};
  }

  @keyframes box3animation {
    0% {
      width: ${baseWidth};
    }

    12.5% {
      width: ${baseWidth};
    }

    25% {
      width: ${baseWidth};
    }

    37.5% {
      width: ${baseWidth};
    }

    50% {
      width: ${openWidth};
    }

    62.5% {
      width: ${baseWidth};
    }

    75% {
      width: ${baseWidth};
    }

    100% {
      width: ${baseWidth};
    }
  }

  &.box-4 {
    animation: box4animation ${animation};
  }

  @keyframes box4animation {
    0% {
      width: ${baseWidth};
    }

    12.5% {
      width: ${baseWidth};
    }

    25% {
      width: ${baseWidth};
    }

    37.5% {
      width: ${baseWidth};
    }

    50% {
      width: ${baseWidth};
    }

    62.5% {
      width: ${openWidth};
    }

    75% {
      width: ${baseWidth};
    }

    100% {
      width: ${baseWidth};
    }
  }

  &.box-5 {
    animation: box5animation ${animation};
  }

  @keyframes box5animation {
    0% {
      width: ${baseWidth};
    }

    12.5% {
      width: ${baseWidth};
    }

    25% {
      width: ${baseWidth};
    }

    37.5% {
      width: ${baseWidth};
    }

    50% {
      width: ${baseWidth};
    }

    62.5% {
      width: ${baseWidth};
    }

    75% {
      width: ${openWidth};
    }

    100% {
      width: ${baseWidth};
    }
  }
`
