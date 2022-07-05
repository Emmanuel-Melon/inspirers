import type { AppProps } from "next/app";
import {
    ChakraProvider,
    extendTheme,
    ColorModeProvider,
    theme as chakraTheme,
} from "@chakra-ui/react";
import theme from "./theme";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
