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
  useDisclosure,
  Drawer,
  DrawerContent,
  FlexProps,
  BoxProps,
} from "@chakra-ui/react";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { Avatar, Card, IconButton, Navbar, Spinner } from "ui";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

import { RiRocket2Line, RiMenu2Line, RiMenu3Line } from "react-icons/ri";

type SidebarItemProps = {
  name: string;
  icon?: IconType;
  url?: string;
  active?: boolean;
};

// collapse sidebar
const SidebarItem: FC<SidebarItemProps> = ({
  active,
  collapsed,
  icon,
  name,
  url,
}) => {
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
            {collapsed ? name : null}
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </NextLink>
  );
};

type SidebarProps = {
  links: Array<SidebarItemProps>;
  collapsed?: boolean;
  collapseSidebar?: any;
};

export const Sidebar: FC<SidebarProps> = ({
  collapsed,
  collapseSidebar,
  links,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      p={2}
      
      alignItems={collapsed ? "center" : "flex-start"}
      position="sticky"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      width={collapsed ? "200px" : "fit-content"}
      
    >
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <p>menu</p>
        </DrawerContent>
      </Drawer>
      <Stack alignItems="flex-start">
        <Flex gap={2} alignItems="center" justifyContent="center" p="2">
          <IconButton aria-label={"collapse sidebar"} onClick={collapseSidebar}>
            <RiMenu3Line />
          </IconButton>
        </Flex>
        {links.map((link) => (
          <SidebarItem key={link.name} {...link} collapsed={collapsed} />
        ))}
      </Stack>
    </Box>
  );
};

const SidebarContent = () => {
  return <p>Content Here</p>;
};

interface MobileProps extends FlexProps {
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
        onClick={onOpen}
        aria-label="open menu"
        icon={<RiMenu3Line />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
