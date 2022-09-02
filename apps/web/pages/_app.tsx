import type { AppProps } from "next/app";
import { ChakraProvider, theme as chakraTheme } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/global.css";
import { SessionProvider } from "next-auth/react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Layout from "../layout/layout";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { JourneyContext, JourneyConsumer, JourneyProvider } from "providers/JourneyProvider";

const notify = () => toast("Here is your toast.");

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getLayout = Component?.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider
      session={session}
      refetchOnWindowFocus={true}
      refetchInterval={5 * 60}
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
    </SessionProvider>
  );
}

export default MyApp;
