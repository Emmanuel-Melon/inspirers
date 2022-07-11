import type { AppProps } from "next/app";
import useSWR, { SWRConfig, Key, Fetcher } from "swr";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../theme";
// import "../styles/global.css";


const customtheme = extendTheme(theme);

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <ChakraProvider theme={customtheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
