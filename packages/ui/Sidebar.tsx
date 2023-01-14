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
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Avatar, Card, Navbar, Spinner } from "ui";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { IconType } from 'react-icons';


import { RiRocket2Line } from "react-icons/ri";


type SidebarLinkProps = {
    name: string;
    icon?: IconType;
}

const SidebarLink: FC<SidebarLinkProps> = ({ link }) => {
    return (
        <NextLink href={link.url} passHref>
            <LinkBox
            p="2"
            borderRadius="lg"
            _hover={{
                bg: "brand.highlight1",
                width: "100%",
                p: "2",
                color: "brand.secondary",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            }}>
            <LinkOverlay color="brand.secondaryText">
                <Flex gap={4} alignItems="center">
                    <Flex
                        color={link.active ? "brand.white" : "brand.secondaryText"}
                        borderRadius="50%"
                        alignItems="center"
                        bg={link.active ? "brand.accent" : "brand.white"}
                        p="2"
                        justifyContent="center"
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        cursor="pointer"
                        _hover={{
                            bg: "brand.accent",
                        }}
                    >
                        {link.icon}

                    </Flex>
                    {link.name}
                </Flex>
            </LinkOverlay>
        </LinkBox>
        </NextLink>
    )
}

export const Sidebar = ({ links }) => {
    return (
        <Stack
            p={8}
            height="100vh"
            justifyContent="space-between"
            width="250px"
            alignItems="flex-start"
            bg="brand.white"
            borderRight="solid 0.10rem"
            borderColor="#eee"
        >
            <Stack gap={2}>
                <Flex gap={2} alignItems="center" p="2">
                    <Flex
                        color="brand.secondaryText"
                        borderRadius="50%"
                        alignItems="center"
                        bg="brand.white"
                        p="2"
                        justifyContent="center"
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        cursor="pointer"
                        _hover={{
                            bg: "brand.accent",
                        }}
                        style={{
                            transform: "rotate(25deg)"
                        }}
                    >
                        <RiRocket2Line size="1.5rem" />

                    </Flex>
                    <Heading size="md">Inspirers</Heading>
                </Flex>
                <Stack alignItems="flex-start">
                    {
                        links.map(link => <SidebarLink key={link.id} link={link} />)
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}