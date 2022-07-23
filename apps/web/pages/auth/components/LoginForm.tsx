import { Flex, Heading, VStack, Text, Box } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { TextInput } from "ui/Input";
import { Button } from "ui";
import { UserObject } from "types/User";
import { client } from "../utils/client";
import { useSWRConfig } from 'swr';
import { useRouter } from "next/router";
import { getProviders, signIn, useSession } from "next-auth/react";
import { FiFacebook, FiGithub, FiMail } from "react-icons/fi";

type AuthFormProps = {
    mode: 'login' | 'signup';
    toggleMode: any;
    providers: any;
}

const GetIcon = (providerName: string) => {
    if(providerName === "Facebook") {
        return <FiFacebook />
    }
    if(providerName === "GitHub") {
        return <FiGithub />
    }
    if(providerName === "Google") {
        return <FiMail />
    }
}

export const AuthForm = ({ mode, toggleMode, providers }: AuthFormProps) => {
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
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
            /**
             * const account = await client.post("/users/login", {
                email: user.login || null,
                password: user.password
            });
             */
            setIsLoading(false);

            router.push("/");
        } else {
            console.log(user);
            signIn("email", { email: user.login, redirect: false, password: user.password });
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
            justifyContent="center"
            alignItems="center"
            bg="#fff"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
            borderRadius="1rem"
        >
            <Flex 
                as="form" 
                direction="column" 
                gap={4}
                p="8"
            >
                <Heading as="h1" size="lg" color="brand.primary" textAlign="center">Inspirers</Heading>
                <Text>Achieve your goals and inspire others, join now!</Text>
                <VStack
                    width="100%"
                    gap={2}
                    alignItems="flex-start"
                    color="brand.primaryText"
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
                </VStack>
            </Flex>
            <Flex 
                direction="column" 
                gap={4} 
                bg="brand.highlight2" 
                width="100%"
                borderRadius="0rem 0rem 1rem 1rem"
                p="8"
            >
                <Heading as="h3" size="sm" color="brand.primaryText">Or sign in with</Heading>
                <Flex gap={4} >
                    {
                        providers && Object.values(providers).map((provider) => {
                            return <div>
                                <Button
                                    bg="brand.white"
                                    color="brand.primary"
                                    icon={GetIcon(provider.name)}
                                    onClick={() => signIn(provider?.id)
                                        .then(res => {
                                            console.log(res);
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        })
                                }
                                >
                                    {provider.name}
                                </Button>
                            </div>

                        })
                    }
                </Flex>
                <Text>Have an account? <Box as="span" fontWeight="700" color="brand.primaryText">Register Now</Box></Text>
            </Flex>
        </Flex>
    )
}
