import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#D1FEB5",
      primaryHover: "rgba(73, 51, 35, 0.8)",
      white: "#fff",
      secondary: "#A9711A",
      accent: "rgba(248, 189, 250, 1)",
      highlight: "rgba(209, 254, 181, 0.25)",
      highlight1: "rgba(169, 113, 26, 0.04)",
      highlight2: "rgba(0, 157, 174, 0.035)",
      highlight3: "rgba(248, 189, 250, 0.3)",
      grey: "#f0f0f0",
      danger: "#df4759",
      success: "#5cb85c",
      primaryText: "#240808",
      secondaryText: "#625555",
      hovered: "linear-gradient(267.15deg, #D1FEB5 -14.36%, #F7F8C5 25.12%, #F7E4EF 89.33%)",
      gradient: "linear-gradient(267.77deg, #DBF8C9 -2.57%, rgba(252, 254, 181, 0.651129) 86.26%, rgba(176, 235, 139, 0) 150.75%)",
      hovered2: "linear-gradient(267.15deg, rgba(169, 113, 26, 0.04) -14.36%, rgba(248, 189, 250, 0.3) 25.12%, rgba(0, 157, 174, 0.035) 89.33%)",
    },
  },
  sizes: {
    
  }
});

export default theme;
