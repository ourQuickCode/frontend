import { createGlobalStyle } from "styled-components";

// ------------------------------ import variables
import { colors, fonts } from "./Variables";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: ${fonts.family};
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    ${"" /* padding: 0; */}
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body { 
    background: #FAFAFA;
    height: 100vh;
    margin: 0 auto;
    width: 100%;
  }
`;
