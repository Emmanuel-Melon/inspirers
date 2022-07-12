import { Flex, Heading, VStack, Text, Box } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { TextInput } from "ui/Input";
import { Button } from "ui";
import { UserObject } from "types/User";
import { client } from "../utils/client";
import { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { getProviders, signIn, useSession } from "next-auth/react";

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
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    const handleClick = async (e) => {
        e.preventDefault();
        if (mode === "login") {
            setIsLoading(true);

            signIn("email", { email: user.login })
            /**
             * const account = await client.post("/users/login", {
                email: user.login || null,
                password: user.password
            });
             */
            setIsLoading(false);

            router.push("/");
        } else {
            signIn("email", { email: user.login, redirect: false, password: user.password })
            /**
             * client.post("users", {
                ...user,
                email: user.login || null,
                password: user.password
            });
             */
        }
    }

    return (
        <Flex 
            direction="column" 
            gap={4} 
            justifyContent="center" 
            alignItems="center"
            p="8"
            bg="#fff"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            borderRadius="1rem"
            height="450px"
        >
            <Flex as="form" direction="column" gap={4}>
            <Heading as="h3" size="md" 
            color="brand.primary">Inspirers</Heading>
            <Text>Achieve your goals and inspire others, join now!</Text>
            <VStack
                width="100%"
                gap={2}

            >
                <TextInput
                    handleInputchange={handleInputchange}
                    placeholder="Username/ Email Address"
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

                <Text>Trouble signing in?</Text>

                <Button 
                    onClick={handleClick} 
                    width="350px"
                    isLoading={isLoading}
                >
                    {mode}
                </Button>

                <Text>Have an account? <Box as="span" fontWeight="700">Register Now</Box></Text>
            </VStack>
            </Flex>
        </Flex>
    )
}

// box-shadow: ;