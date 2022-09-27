import React, { ReactChild } from "react";
import { useSession, signIn } from "next-auth/react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { Navbar, Spinner } from "ui";
import Head from "next/head";
import { Sidebar, UnAuthorized } from "ui";

type LayoutProps = {
  children: ReactChild | ReactChild[];
};


// preserve layout when navigating
// pre-fetch
// nesting layout
export default function Layout({ children }: LayoutProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Flex minHeight="100vh" align="center" justify="center">
        <Spinner />
      </Flex>
    );
  }

  if (session) {
    return (
      <>
        <Head>
          <title>Inspirers</title>
          <meta
            name="description"
            content="Inspirers is an app for changemakers both individually and collectively. It allows you to start and track your journey to achieve your long-term goals. "
          />
          <link rel="icon" href="favicon.png" />
        </Head>
        <body>
          <Flex height="100%" as="main">
            <Sidebar session={session}/>
            <Stack width="100%">
              <Box
              as="section"
              px="8"
              height="100%"
              width="100%"
              py="4"
            >
              {children}
            </Box>
            </Stack>
          </Flex>
        </body>
      </>
    );
  }

  return <UnAuthorized onClick={signIn} />;
}
