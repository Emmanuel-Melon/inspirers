import React, { ReactChild, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Flex, Heading, Text, Stack, Container } from "@chakra-ui/react";
import { Navbar, Spinner } from "ui";
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
  FiLock,
} from "react-icons/fi";
import { VStack } from "@chakra-ui/react";
import { Button, UnAuthorized } from "ui";

const Layout = ({ children }) => (
  <Container maxW="85%" padding={0} bg="#D1FE">
    <Flex h="100vh" py={20}>{children}</Flex>
  </Container>
);
export default Layout;
