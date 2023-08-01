import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --gold: #ffbf00;
    --silver: #C0C0C0	;
    --bronze: #cc6633;
    --other: #fef08a;
    --light-gray: #a3a3a3;
    --mid-gray: #262626;

    --book-height: 550px;
    --book-cover-color: #991b1b;

    --font-header: "Lora", serif;
    --font-subtitle: "Cabin Condensed", sans-serif;
    --font-classic: "Alegreya", serif;
    --font-neutral: "Arial", sans-serif;

    --opacity-transition: "opacity 0.5s 0.3s ease-in-out";
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
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

  h1, h2 {
    font-family: var(--font-header);
  }

  h3, h4, h5, h6 {
    font-family: var(--font-subtitle);
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
