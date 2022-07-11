import { Box, Heading, VStack } from "@chakra-ui/react";
import { useCallback } from "react";
import { TextInput } from "ui/Input";
import { Button } from "ui";

export const AuthForm = () => {
    const handleInputchange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;

        },
        []
    );

    return (
        <Box p="8">
            <Heading as="h3" size="sm" color="brand.primary" m="0">Join Inspirers</Heading>
            <VStack bg="#fff" width="400px" gap={2} p="8">
                <TextInput
                    handleInputchange={handleInputchange}
                    placeholder="Username or Email Address"
                    type="text"
                    value={""}
                />
                <TextInput
                    handleInputchange={handleInputchange}
                    placeholder="Password"
                    type="password"
                    value={""}
                />

                <Button>Sign Up</Button>
            </VStack>
        </Box>
    )
}