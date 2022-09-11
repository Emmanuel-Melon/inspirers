import React, { ReactChild, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import { Navbar, Spinner } from "ui";
import Head from "next/head";
import Link from "next/link";
import {
  FiHome,
  FiSettings,
  FiUser,
  FiBell,
  FiCheckCircle,
  FiRotateCw,
  FiTrendingUp,
  FiMap,
  FiMonitor,
} from "react-icons/fi";
import { VStack } from "@chakra-ui/react";
import { Button, UnAuthorized } from "ui";

type LayoutProps = {
  children: ReactChild | ReactChild[];
};


// preserve layout when navigating
// pre-fetch
// nesting layout
export default function Layout({ children }: LayoutProps) {
  const [labels, _setLabels] = useState<boolean>(true);
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
        <Flex height="100vh" py="4">
          <Flex
            bg="brand.highlight1"
            px={labels ? "2" : "4"}
            color="brand.primaryText"
            borderRadius="1rem"
            alignItems="center"
            overflowY="scroll"
            m="2"
            py="8"
            
          >
            <VStack gap={6} justifyContent="space-evenly">
              <Link href="/">
                <Flex
                  direction="column"
                  alignItems="center"
                  _hover={{
                    color: "brand.accent",
                  }}
                >
                  <Flex
                    bg="brand.hovered"
                    color="brand.primaryText"
                    borderRadius="1rem"
                    alignItems="center"
                    p="2"
                    justifyContent="center"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    cursor="pointer"
                    _hover={{
                      bg: "brand.hovered",
                      color: "brand.primaryText"
                    }}
                  >
                    <FiHome size="1rem" />
                  </Flex>

                  {labels ? <Text>Home</Text> : null}
                </Flex>
              </Link>
              <Link href="/journeys">
                <Flex
                  direction="column"
                  alignItems="center"
                  _hover={{
                    color: "brand.accent",
                  }}
                >
                  <Flex
                    bg="brand.white"
                    color="brand.primaryText"
                    borderRadius="1rem"
                    alignItems="center"
                    p="2"
                    justifyContent="center"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    cursor="pointer"
                    _hover={{
                      color: "brand.accent",
                    }}
                  >
                    <FiMap size="1rem" />
                  </Flex>

                  {labels ? <Link href="/journeys">Journeys</Link> : null}
                </Flex>
              </Link>

              <Link href="/reflections">
                <Flex
                  direction="column"
                  alignItems="center"
                  _hover={{
                    color: "brand.accent",
                  }}
                >
                  <Flex
                    bg="brand.white"
                    color="brand.primaryText"
                    borderRadius="1rem"
                    alignItems="center"
                    p="2"
                    justifyContent="center"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    cursor="pointer"
                    _hover={{
                      color: "brand.accent",
                    }}
                  >
                    <FiMonitor size="1rem" />
                  </Flex>

                  {labels ? <Link href="/reflections">Reflections</Link> : null}
                </Flex>
              </Link>

              <Link href="/routines">
                <Flex
                  direction="column"
                  alignItems="center"
                  _hover={{
                    color: "brand.accent",
                  }}
                >
                  <Flex
                    bg="brand.white"
                    color="brand.primaryText"
                    borderRadius="1rem"
                    alignItems="center"
                    p="2"
                    justifyContent="center"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    cursor="pointer"
                    _hover={{
                      color: "brand.accent",
                    }}
                  >
                    <FiRotateCw size="1rem" />
                  </Flex>

                  {labels ? <Link href="/routines">Routines</Link> : null}
                </Flex>
              </Link>

              <Link href="/notifications">
                <Flex
                  direction="column"
                  alignItems="center"
                  _hover={{
                    color: "brand.accent",
                  }}
                >
                  <Flex
                    bg="brand.white"
                    color="brand.primaryText"
                    borderRadius="1rem"
                    alignItems="center"
                    p="2"
                    justifyContent="center"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    cursor="pointer"
                  >
                    <FiBell size="1rem" />
                  </Flex>
                  {labels ? (
                    <Link href="/notifications">Notifications</Link>
                  ) : null}
                </Flex>
              </Link>

              <Link href="/tasks">
                <Flex
                  direction="column"
                  alignItems="center"
                  _hover={{
                    color: "brand.accent",
                  }}
                >
                  <Flex
                    bg="brand.white"
                    color="brand.primaryText"
                    borderRadius="1rem"
                    alignItems="center"
                    p="2"
                    justifyContent="center"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    cursor="pointer"
                  >
                    <FiCheckCircle size="1rem" />
                  </Flex>
                  {labels ? <Link href="/tasks">Tasks</Link> : null}
                </Flex>
              </Link>

            </VStack>
          </Flex>
          <Flex
            width="90%"
            direction="column"
            alignItems="stretch"
            height="100%"
          >
            <Navbar />
            <Flex
              as="section"
              px="8"
              direction="column"
              height="100%"
              alignItems="stretch"
            >
              {children}
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  }

  return <UnAuthorized onClick={signIn} />;
}
