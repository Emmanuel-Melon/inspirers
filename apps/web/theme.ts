// we add container here
import {
  extendTheme,
  type ThemeConfig,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme: ThemeConfig = extendTheme({
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        bg: mode(
          "rgba(245, 246, 248, 1)",
          "rgba(245, 246, 248, 1)"
        )(props),
        color: mode("#333", "#333")(props),
      },
    }),
  },
  colors: {
    brand: {
      header: "rgba(237, 227, 247)",
      primary: "rgb(211 255 96)",
      primaryHover: "rgba(73, 51, 35, 0.8)",
      white: "#fff",
      secondary: "#6C56F1",
      accent: "#6C56F1",
      highlight: "rgba(248, 255, 220, 0.45)",
      highlight1: "rgba(169, 113, 26, 0.04)",
      highlight2: "rgba(0, 157, 174, 0.035)",
      highlight3: "rgba(57, 19, 119, 0.035)",
      grey: "rgba(245, 246, 248, 1)",
      danger: "#df4759",
      success: "#5cb85c",
      primaryText: "#151F0E", // for dark mode: #8b949e
      secondaryText: "#625555",
      hovered:
        "linear-gradient(267.15deg, #D1FEB5 -14.36%, #F7F8C5 25.12%, #F7E4EF 89.33%)",
      gradient:
        "linear-gradient(267.15deg, #D3FF60 -14.36%, #F7F8C5 25.12%, #F7E4EF 89.33%)",
      hovered2:
        "linear-gradient(267.15deg, rgba(169, 113, 26, 0.04) -14.36%, rgba(248, 189, 250, 0.3) 25.12%, rgba(0, 157, 174, 0.035) 89.33%)",
    },
    dark: {
      header: "rgb(29, 10, 60)",
    },
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
