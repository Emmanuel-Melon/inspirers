import React, { ReactChild } from "react";
import { Flex } from "@chakra-ui/react";
import { Navbar } from "ui";
import Head from "next/head";

type LayoutProps = {
  children: ReactChild | ReactChild[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Neno</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Flex
        width="100%"
        height="100%"
        minHeight="100vh"
        direction="column"
        margin={0}
        gap={6}
        padding={6}
        bg="#EEEDE7"
      >
        <Navbar />
        <Flex width="100%" height="100%" direction="column">
          {children}
        </Flex>
      </Flex>
    </>
  );
}
