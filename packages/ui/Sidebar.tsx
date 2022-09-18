import React, { ReactChild, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Flex, Heading, Text, Stack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { BeakerIcon } from '@heroicons/react/24/solid'
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
    FiClipboard
} from "react-icons/fi";

const SidebarLink = ({ link }) => {
    return (
        <LinkBox>
            <LinkOverlay href={link.url}>
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
                    {link.icon}
                </Flex>
            </LinkOverlay></LinkBox>
    )
}

export const Sidebar = ({ session }) => {
    const links = [
        {
            id: 1,
            name: "Home",
            url: "/",
            icon: <FiHome size="1rem" />
        },
        {
            id: 1,
            name: "Profile",
            url: `/user/${session?.user?.id}`,
            icon: <FiUser size="1rem" />
        },
        {
            id: 1,
            name: "Journeys",
            url: "/journeys",
            icon: <FiMap size="1rem" />
        },
        {
            id: 1,
            name: "Routines",
            url: "/routines",
            icon: <FiRotateCw size="1rem" />
        },
        {
            id: 1,
            name: "Tasks",
            url: "/tasks",
            icon: <FiClipboard size="1rem" />
        },
        {
            id: 1,
            name: "Notifications",
            url: "/notifications",
            icon: <FiBell size="1rem" />
        },
        {
            id: 1,
            name: "Settings",
            url: "/settings",
            icon: <FiSettings size="1rem" />
        }
    ]
    return (
        <Stack
            gap={4}
            p={4}
            bg="brand.highlight1"
            height="100%"
            m="4"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        >
            {
                links.map(link => <SidebarLink key={link.id} link={link} />)
            }
        </Stack>
    )
}