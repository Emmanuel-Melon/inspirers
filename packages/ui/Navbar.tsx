import React, { useContext } from "react";
import {
    Flex,
} from "@chakra-ui/react";
import Link from "next/link";


export const Navbar = () => {

    return (
        <header style={{ padding: "1rem", color: "#fff" }}>
            <nav>
                <Flex gap={6} >
                    <Link href="/">Home</Link>
                    <Link href="/tasks">Tasks</Link>
                    <Link href="/profile">Profile</Link>
                </Flex>
            </nav>
        </header>
    );
}
