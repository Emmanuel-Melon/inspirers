import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#D1FEB5",
      primaryHover: "rgba(73, 51, 35, 0.8)",
      white: "#fff",
      secondary: "#A9711A",
      accent: "#009DAE",
      highlight: "rgba(209, 254, 181, 0.4)",
      highlight1: "rgba(169, 113, 26, 0.04)",
      highlight2: "rgba(0, 157, 174, 0.035)",
      grey: "#f0f0f0",
      danger: "#df4759",
      success: "#5cb85c",
      primaryText: "#240808",
      hovered: "linear-gradient(267.15deg, #D1FEB5 -14.36%, #F7F8C5 25.12%, #F7E4EF 89.33%)",
      gradient: "linear-gradient(267.77deg, #DBF8C9 -2.57%, rgba(252, 254, 181, 0.651129) 86.26%, rgba(176, 235, 139, 0) 150.75%)"
    },
  },
});

export default theme;
