import React, { ReactChild, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import {
  Box,
  Flex,
  Stack,
  useColorModeValue,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { Navbar, Spinner } from "ui";
import Head from "next/head";
import { Sidebar, UnAuthorized } from "ui";
import {
  HiOutlineHome,
  HiOutlineTemplate,
} from "react-icons/hi";

import { RiHandbagLine, RiApps2Line, RiBellLine } from "react-icons/ri";
type LayoutProps = {
  children: ReactChild | ReactChild[];
};

// preserve layout when navigating
// pre-fetch
// nesting layout

const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
    icon: <HiOutlineHome size="1rem" />,
  },
  {
    id: 4,
    name: "Routines",
    url: "/routines",
    icon: <HiOutlineTemplate size="1rem" />,
  },,
  {
    id: 8,
    name: "Backpack",
    url: "/backpacks",
    icon: <RiHandbagLine size="1rem" />,
  },
  {
    id: 9,
    name: "Apps",
    url: "/apps",
    icon: <RiApps2Line size="1rem" />,
  },
];

export default function Layout({ children }: LayoutProps) {
  const { data: session, status } = useSession();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const collapseSidebar = () => {
    setCollapsed((currentState) => !currentState);
  };

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
        <Flex as="main" minH="100vh" height="calc(100vh - 100px)">
          <Sidebar
            links={links}
            collapseSidebar={collapseSidebar}
            collapsed={collapsed}
          />
          <Box p="4" as="section" flexGrow="1" overflowY="scroll">{children}</Box>
        </Flex>
      </>
    );
  }

  return <UnAuthorized onClick={signIn} />;
}
