import type { AppProps } from "next/app";
import {
    ChakraProvider,
    theme as chakraTheme,
} from "@chakra-ui/react";
import theme from "../theme";
import "../styles/global.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../layout/layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

    const getLayout = Component.getLayout || ((page) => page);
   

    return getLayout(
        <SessionProvider session={pageProps.session}>
            <ChakraProvider theme={theme} resetCSS>
                {
                    Component.authPage ? <Component /> : (
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    )
                }

            </ChakraProvider>
        </SessionProvider>
    )
}

export default MyApp;
