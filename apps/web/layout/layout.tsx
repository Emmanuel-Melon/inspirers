// this is a different projests
import React, { ReactChild } from "react";
import { useSession, signIn } from "next-auth/react";
import { Box, Flex, Stack, useColorModeValue, Grid, GridItem, Heading } from "@chakra-ui/react";
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
  const bgColor = useColorModeValue("black", "white");
  const textColor = useColorModeValue("white", "black");

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
          <Grid as="main" templateColumns='repeat(6, 1fr)'>
            <GridItem rowSpan={2} colSpan={1}>
              <Sidebar session={session} />
            </GridItem>
            <GridItem rowSpan={2} colSpan={5}>
              <Box as="section" p="4">
                {children}
              </Box>
            </GridItem>
          </Grid>
        </body>
      </>
    );
  }

  return <UnAuthorized onClick={signIn}/>;
}
