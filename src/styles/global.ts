import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    min-height: 100vh;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  p {
    hyphens: auto;
  }

  ol, ul {
    list-style: none;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

`
