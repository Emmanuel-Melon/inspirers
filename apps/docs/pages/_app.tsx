import type { AppProps } from "next/app";
import { ChakraProvider, theme as chakraTheme } from "@chakra-ui/react";
// import theme from "../theme";
import Layout from "../layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  // const getLayout = Component?.getLayout || ((page) => page);
  return (
    <ChakraProvider resetCSS>
      <Layout>
      <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
