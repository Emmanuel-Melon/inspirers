import React, { ReactChild, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Navbar } from "ui";
import Head from "next/head";
import Link from "next/link";
import {
  FiHome,
  FiSettings,
  FiUser,
  FiBell,
  FiCheckCircle,
  FiUsers,
  FiTrendingUp,
  FiMap,
} from "react-icons/fi";
import { VStack } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactChild | ReactChild[];
};

export default function Layout({ children }: LayoutProps) {
  const [labels, _setLabels] = useState<boolean>(false);
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
      <Flex height="100%" py="4">
        <Flex
          bg="linear-gradient(to right, #343434, #211717)"
          px={labels ? "2" : "4"}
          color="brand.primaryText"
          borderRadius="1rem"
          alignItems="center"
          justifyContent="center"
          overflowY="scroll"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
          m="4"
          py="8"
          height="fit-content"
        >
          <VStack gap={6}>
            <Link href="/">
              <Flex
                direction="column"
                alignItems="center"
                _hover={{
                  color: "brand.accent",
                }}
              >
                <Flex
                  bg="brand.white"
                  color="brand.primary"
                  borderRadius="1rem"
                  alignItems="center"
                  p="2"
                  justifyContent="center"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  cursor="pointer"
                >
                  <FiHome size="1.2rem" />
                </Flex>

                {labels ? <Text>Home</Text> : null}
              </Flex>
            </Link>

            <Link href="/user/username">
              <Flex
                direction="column"
                alignItems="center"
                _hover={{
                  color: "brand.accent",
                }}
              >
                <Flex
                  bg="brand.primary"
                  color="brand.white"
                  borderRadius="1rem"
                  alignItems="center"
                  p="2"
                  justifyContent="center"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  cursor="pointer"
                >
                  <FiUser size="1.2rem" />
                </Flex>

                {labels ? <Text>Profile</Text> : null}
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
                  bg="brand.primary"
                  color="brand.white"
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
                  <FiMap size="1.2rem" />
                </Flex>

                {labels ? <Link href="/journeys">Journeys</Link> : null}
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
                  bg="brand.primary"
                  color="brand.white"
                  borderRadius="1rem"
                  alignItems="center"
                  p="2"
                  justifyContent="center"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  cursor="pointer"
                >
                  <FiBell size="1.2rem" />
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
                  bg="brand.primary"
                  color="brand.white"
                  borderRadius="1rem"
                  alignItems="center"
                  p="2"
                  justifyContent="center"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  cursor="pointer"
                >
                  <FiCheckCircle size="1.2rem" />
                </Flex>
                {labels ? <Link href="/tasks">Tasks</Link> : null}
              </Flex>
            </Link>

            <Link href="/discover">
              <Flex
                direction="column"
                alignItems="center"
                _hover={{
                  color: "brand.accent",
                }}
              >
                <Flex
                  bg="brand.primary"
                  color="brand.white"
                  borderRadius="1rem"
                  alignItems="center"
                  p="2"
                  justifyContent="center"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  cursor="pointer"
                >
                  <FiTrendingUp size="1.2rem" />
                </Flex>
                {labels ? <Link href="/discover">Discover</Link> : null}
              </Flex>
            </Link>

            <Link href="/settings">
              <Flex
                direction="column"
                alignItems="center"
                _hover={{
                  color: "brand.accent",
                }}
              >
                <Flex
                  bg="brand.primary"
                  color="brand.white"
                  borderRadius="1rem"
                  alignItems="center"
                  p="2"
                  justifyContent="center"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  cursor="pointer"
                >
                  <FiSettings size="1.2rem" />
                </Flex>
                {labels ? <Link href="/settings">Settings</Link> : null}
              </Flex>
            </Link>
          </VStack>
        </Flex>
        <Flex width="90%" direction="column" alignItems="stretch" height="100%">
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
