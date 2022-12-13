import { DefaultTheme } from "styled-components";

const primary = "#d21fd6";
const secondary = "#e01830";

const mainTheme: DefaultTheme = {
  colors: {
    header: `linear-gradient(0deg,${primary},${secondary})`,
    primary: "#262426",
    secondary: "#f8f8f8",
    error: "#ae2c2c",
    errorBackground: "rgb(247 233 233)",
    correct: "#57944d",
    correctBackground: "rgb(238 244 237)",
    link: "#d21fd6",
  },

  fontFamily: "Ubuntu",

  fontWeights: {
    regular: 400,
    bold: 700,
  },

  fontSize: {
    title: "6rem",
    secondaryTitle: "2.18rem",
    primary: "1.25rem",
  },

  borderRadius: {
    primary: "5px",
    card: "8px",
  },

  screenDesktop: "1280px",
};

export default mainTheme;
