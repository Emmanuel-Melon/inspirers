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
  },
  borders: {
    border: {
      primary: "3px solid #333",
      accent: "3px solid #723d46",
      secondary: "1px solid #333",
      grey: "3px solid #F1EDE9",
      white: "3px solid #fff",
      top: "solid 50px #333",
      radius: {
        primary: "2% 6% 5% 4% / 1% 1% 2% 4%",
        secondary: "2% 6% 5% 4% / 1% 1% 2% 4%",
      },
    },
  },
});

export default theme;
