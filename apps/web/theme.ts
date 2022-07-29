import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

// #590696 1st

// #009DAE 2nd
const theme = extendTheme({
  colors: {
    brand: {
      primary: "#493323",
      primaryHover: "rgba(73, 51, 35, 0.8)",
      white: "#fff",
      secondary: "#8e4585",
      accent: "#009DAE",
      highlight: "rgba(17, 105, 121, 0.1)",
      highlight1: "rgba(142, 69, 133, 0.04)",
      highlight2: "rgba(0, 157, 174, 0.035)",
      grey: "#f0f0f0",
      danger: "#df4759",
      success: "#5cb85c",
      primaryText: "#696969",
      hovered: "#F3EDED"
    }
  }
});

export default theme;
