import { Flex, Heading, VStack, Text, Box } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { TextInput } from "ui/Input";
import { Button } from "ui";
import { UserObject } from "types/User";
import { client } from "../utils/client";
import { useSWRConfig } from 'swr';
import { useRouter } from "next/router";

type AuthFormProps = {
    mode: 'login' | 'signup';
    toggleMode: any;
}

export const AuthForm = ({ mode, toggleMode }: AuthFormProps) => {
    const router = useRouter();
    const [user, setUser] = useState<UserObject>({
        login: "",
        password: ""
    });

    const handleInputchange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setUser((currentState) => {
                return {
                    ...currentState,
                    [name]: value
                }
            });
        },
        []
    );

    const handleClick = (e) => {
        e.preventDefault();
        if (mode === "login") {
            client.post("/users/login", {
                email: user.login || null,
                password: user.password
            });
        } else {
            client.post("users", {
                ...user,
                email: user.login || null,
                password: user.password
            });
        }
    }

    return (
        <Flex p="8" direction="column" gap={4} justifyContent="center" alignItems="center">
            <Heading as="h3" size="md" color="brand.primary">Inspirers</Heading>
            <Text>Inspire others</Text>
            <VStack
                bg="#fff"
                width="400px"
                gap={2}
                p="8"
                boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                borderRadius="1rem"
            >
                <TextInput
                    handleInputchange={handleInputchange}
                    placeholder="Username or Email Address"
                    type="text"
                    value={user.login}
                    name="login"
                />
                <TextInput
                    handleInputchange={handleInputchange}
                    placeholder="Password"
                    type="password"
                    value={user.password}
                    name="password"
                />

                <Button onClick={handleClick}>{mode}</Button>
            </VStack>


            {
                mode === "login" ? (
                    <Box>
                        <Heading as="h3" size="sm" color="brand.primary">Don't have an account?</Heading>
                        <Button onClick={toggleMode} bg="brand.secondary">Become an Inspirer</Button>
                    </Box>
                ) : (
                    <Box>
                        <Heading as="h3" size="sm" color="brand.primary">Have an account?</Heading>
                        <Button onClick={toggleMode} bg="brand.secondary">Login</Button>
                    </Box>
                )
            }
        </Flex>
    )
}