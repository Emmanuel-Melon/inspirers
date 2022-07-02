import React, { useContext } from "react";
import {
    Avatar,
    Flex,
    Menu,
    MenuButton,
    Button,
    MenuItem,
    MenuList,
    forwardRef,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";


export const Navbar = () => {

    return (
        <header style={{ width: "100%" }}>
            <nav>
                <Flex gap={6}>
                    <Link href="/">Home</Link>
                    <Link href="/tasks">Tasks</Link>
                    <Link href="/profile">Profile</Link>
                </Flex>
            </nav>
        </header>
    );
}
