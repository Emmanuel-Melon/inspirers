import React, { ReactChild, useState } from "react";
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
    IconButton
} from "@chakra-ui/react";
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Avatar, Card, Navbar, Spinner } from "ui";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";

import {
    FiHome,
    FiSettings,
    FiUser,
    FiLogOut,
    FiHelpCircle
} from "react-icons/fi";

import { RiApps2Line, RiHandbagLine, RiNotification3Line, RiRocket2Line } from "react-icons/ri";

import { HiOutlineBell, HiOutlineHome, HiOutlineTemplate, HiOutlineClipboardCheck, HiOutlineCollection } from "react-icons/hi";

const SidebarLink = ({ link }) => {
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

export const Sidebar = ({ session }) => {
    const links = [
        {
            id: 1,
            name: "Home",
            url: "/",
            icon: <HiOutlineHome size="1rem" />
        },
        {
            id: 4,
            name: "Routines",
            url: "/routines",
            icon: <HiOutlineTemplate size="1rem" />
        },
        {
            id: 5,
            name: "Tasks",
            url: "/tasks",
            icon: <HiOutlineClipboardCheck size="1rem" />
        },
        {
            id: 6,
            name: "Notifications",
            url: "/notifications",
            icon: <RiNotification3Line size="1rem" />
        },
        {
            id: 8,
            name: "Backpack",
            url: "/backpacks",
            icon: <RiHandbagLine size="1rem" />
        },
        {
            id: 9,
            name: "Apps",
            url: "/apps",
            icon: <RiApps2Line size="1rem" />
        }
    ];

    const bottomLinks = [
        {
            id: 7,
            name: "Help",
            url: "/support",
            icon: <FiHelpCircle size="1rem" />
        }
    ]

    const router = useRouter();
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

            <Stack gap={2}>
                <Stack gap={2}>
                    {
                        bottomLinks.map(link => <SidebarLink key={link.id} link={link} />)
                    }
                </Stack>
                <Flex borderRadius="1rem" gap={4} alignItems="center">
                    <Menu >
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<FiUser />}
                            variant='outline'
                            width="fit-content"
                            bg="brand.white"
                            size="sm"
                            borderRadius="50%"
                            p="2"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        />
                        <MenuList>
                            <MenuItem
                                icon={<FiUser />}
                                onClick={() => router.push(`/user/${session?.user?.id}`)}
                                _hover={{
                                    bg: "brand.highlight3",
                                }}
                                _active={{
                                    bg: "brand.highlight3",
                                }}
                            >
                                Profile
                            </MenuItem>
                            <MenuItem
                                icon={<FiSettings />}
                                onClick={() => router.push(`/settings`)}
                                _hover={{
                                    bg: "brand.highlight3",
                                }}
                            >
                                Settings
                            </MenuItem>
                            <MenuItem
                                icon={<FiLogOut />}
                                onClick={() => signOut()}
                                _hover={{
                                    bg: "brand.highlight3",
                                }}
                            >
                                Logout
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Stack>
                        <Text size="xs">@junubiman</Text>
                    </Stack>
                </Flex>
            </Stack>
        </Stack>
    )
}