import React, { ReactChild } from "react";
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
  HiOutlineBell,
  HiOutlineHome,
  HiOutlineTemplate,
  HiOutlineClipboardCheck,
  HiOutlineCollection,
} from "react-icons/hi";


import { RiHandbagLine, RiApps2Line } from "react-icons/ri";
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
  },
  {
    id: 5,
    name: "Tasks",
    url: "/tasks",
    icon: <HiOutlineClipboardCheck size="1rem" />,
  },
  {
    id: 6,
    name: "Notifications",
    url: "/notifications",
    icon: <HiOutlineClipboardCheck size="1rem" />,
  },
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
        <Grid as="main" templateColumns="repeat(6, 1fr)">
            <GridItem rowSpan={2} colSpan={1}>
              <Sidebar links={links} />
            </GridItem>
            <GridItem rowSpan={2} colSpan={5} p="4">
              {children}
            </GridItem>
          </Grid>
      </>
    );
  }

  return <UnAuthorized onClick={signIn} />;
}
