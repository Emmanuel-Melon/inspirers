import {
    Flex,
} from "@chakra-ui/react";
import Link from "next/link";


export const Navbar = () => {

    return (
        <header>
            <nav>
                <Flex gap={6} bg="transparent" marginBottom="8">
                    <Link href="/">Home</Link>
                    <Link href="/tasks">Tasks</Link>
                    <Link href="/profile">Profile</Link>
                </Flex>
            </nav>
        </header>
    );
}
