import type { AppProps } from "next/app";
import useSWR, { SWRConfig } from 'swr';
import { ChakraProvider, theme as chakraTheme } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/global.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../layout/layout";
import { JourneyContext, JourneyConsumer, JourneyProvider } from "providers/JourneyProvider";
import { fetcher } from "../hooks/useSwr";
<<<<<<< Updated upstream
import "@fontsource/raleway";
=======
// import "@fontsource/montserrat";
>>>>>>> Stashed changes

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getLayout = Component?.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider
      session={session}
      refetchOnWindowFocus={true}
      refetchInterval={5 * 60}
    >
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, _init) => fetcher(resource)
        }}
      >
        <ChakraProvider theme={theme} resetCSS>
          {Component.authPage || Component.publicPage ? (
            <Component {...pageProps} />
          ) : (
            <JourneyProvider>
              <JourneyConsumer>
                {
                  value => (
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  )
                }
              </JourneyConsumer>
            </JourneyProvider>
          )}
        </ChakraProvider>
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
