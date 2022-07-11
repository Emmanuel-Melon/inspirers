import type { AppProps } from "next/app";
import {
    ChakraProvider,
    theme as chakraTheme,
} from "@chakra-ui/react";
import theme from "../theme";
import "../styles/global.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(
        <SessionProvider session={session}>
            <ChakraProvider theme={theme} resetCSS>
                <Component {...pageProps} />
            </ChakraProvider>
        </SessionProvider>
    )
}

export default MyApp;
