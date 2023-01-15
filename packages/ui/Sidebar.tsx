import { FC, ReactChild, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { Avatar, Card, Navbar, Spinner } from "ui";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

import { RiRocket2Line, RiMenu2Line, RiArrowLeftLine } from "react-icons/ri";

type SidebarLinkProps = {
  name: string;
  icon?: IconType;
  url?: string;
  active?: boolean;
};

const SidebarLink: FC<SidebarLinkProps> = ({ active, icon, name, url }) => {
  return (
    <NextLink href={url} passHref>
      <LinkBox
        p="2"
        borderRadius="lg"
        _hover={{
          bg: "brand.highlight1",
          width: "100%",
          p: "2",
          color: "brand.secondary",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
        }}
      >
        <LinkOverlay color="brand.secondaryText">
          <Flex gap={4} alignItems="center">
            <Flex
              color={active ? "brand.white" : "brand.secondaryText"}
              borderRadius="50%"
              alignItems="center"
              bg={active ? "brand.accent" : "brand.white"}
              p="2"
              justifyContent="center"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              cursor="pointer"
              _hover={{
                bg: "brand.accent",
              }}
            >
              {icon}
            </Flex>
            {name}
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </NextLink>
  );
};

type SidebarProps = {
  links: Array<SidebarLinkProps>;
  collapsible?: boolean;
};

export const Sidebar: FC<SidebarProps> = ({ collapsible, links }) => {
  return (
    <Stack
      p={4}
      minH="100vh"
      alignItems="flex-start"
      position="sticky"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    >
      <Stack alignItems="flex-start">
        <Flex gap={2} alignItems="center" justifyContent="flex-end">
          <IconButton aria-label={"collapse sidebar"}>
            <RiArrowLeftLine />
          </IconButton>
        </Flex>
        {links.map((link) => (
          <SidebarLink key={link.name} {...link} />
        ))}
      </Stack>
    </Stack>
  );
};

interface MobileProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<RiMenu2Line />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
