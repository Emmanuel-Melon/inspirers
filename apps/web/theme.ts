import {
  extendTheme,
  type ThemeConfig,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme: ThemeConfig = extendTheme({
  config,
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        bg: mode("linear-gradient( 174.2deg,  #F8F8F7 7.1%, #fbfdfb 67.4% )", "#160D25")(props),
        color: mode("#3F300C", "#EBE0F9")(props),
      },
    }),
  },
  colors: {
    brand: {
      primary: "#D1FEB5",
      primaryHover: "rgba(73, 51, 35, 0.8)",
      white: "#fff",
      secondary: "#A9711A",
      accent: "#afbfbf",
      highlight: "rgba(248, 255, 220, 0.75)",
      highlight1: "rgba(169, 113, 26, 0.04)",
      highlight2: "rgba(0, 157, 174, 0.035)",
      highlight3: "rgba(57, 19, 119, 0.4)",
      grey: "rgba(245, 246, 248, 1)",
      danger: "#df4759",
      success: "#5cb85c",
      primaryText: "#151F0E", // for dark mode: #8b949e
      secondaryText: "#625555",
      hovered:
        "linear-gradient(267.15deg, #D1FEB5 -14.36%, #F7F8C5 25.12%, #F7E4EF 89.33%)",
      gradient:
        "linear-gradient(267.77deg, #DBF8C9 -2.57%, rgba(252, 254, 181, 0.651129) 86.26%, rgba(176, 235, 139, 0) 150.75%)",
      hovered2:
        "linear-gradient(267.15deg, rgba(169, 113, 26, 0.04) -14.36%, rgba(248, 189, 250, 0.3) 25.12%, rgba(0, 157, 174, 0.035) 89.33%)",
    },
    dark: {
      header: "rgb(29, 10, 60)",
    },
  },
  sizes: {
    // this is global // applies to all components
    sm: "1rm",
    md: "2rem",
    lg: "4rem",
    xl: "8rem"
  },

  fonts: {
    logo: `"Montserrat", ${chakraTheme?.fonts?.logo}`,

    heading: `Montserrat, ${chakraTheme?.fonts?.heading}`,
    body: `Sen, ${chakraTheme?.fonts?.body}`,
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
