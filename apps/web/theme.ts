import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#493323",
      white: "#fff",
      secondary: "#116979",
      accent: "#E79C2A",
      highlight: "rgba(17, 105, 121, 0.1)",
      highlight1: "rgba(208, 98, 36, 0.1)",
      highlight2: "rgba(71, 13, 33, 0.10)",
      grey: "#f0f0f0",
      danger: "#df4759",
      primaryText: "#696969",
      hovered: "#F3EDED"
    },
  }
});

export default theme;
