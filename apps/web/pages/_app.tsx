import type { AppProps } from "next/app";
import {
    ChakraProvider,
    theme as chakraTheme,
} from "@chakra-ui/react";
import theme from "../theme";
import "../styles/global.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(
        <ChakraProvider theme={theme} resetCSS>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp;
