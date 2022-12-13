import { createGlobalStyle } from "styled-components";
import "@fontsource/ubuntu";
import mainTheme from "./mainTheme";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
}

body {
  font-family: ubuntu, sans-serif;
}

button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
    
  
}

ul {
  list-style: none;
  list-style-position: outside;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

a {
  text-decoration: none;
  color: ${mainTheme.colors.link}
}

:focus-visible {
  outline: none;
}

.w-100 {
  width: 100%;
} 

`;

export default GlobalStyle;
