import React, { useCallback, useState } from "react";
import {
    Stack,
    RadioGroup,
    HStack,
    Radio,
    Checkbox,
    Textarea,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Divider,
    Text,
    Heading
} from "@chakra-ui/react";
import {
    FiActivity,
    FiInfo,
    FiClipboard,
    FiShoppingBag,
    FiUser,
} from "react-icons/fi";
import { Input, Button } from "ui";
import Head from "next/head";

export const AccountSettings = ({ user }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [state, updateState] = useState({
        name: "",
        username: "",
        bio: "",
        email: ""
    })

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateState((currentState) => {
            return {
                ...currentState,
                [name]: value,
            };
        });
    }, []);

    return (
        <Stack alignItems="flex-start" width="100%" gap={2}>
            <Heading size="sm">Security</Heading>
            <Stack
            alignItems="flex-start"
            width="100%"
            gap={2}
            bg="brand.white"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            borderRadius="1rem"
            p="4"
        >
            <FormControl>
                <Flex alignItems="center">
                    <FormLabel width="30%" color="brand.secondaryText">Old Password</FormLabel>
                    <Input
                        onChange={onChange}
                        placeholder=""
                        type="password"
                        value={state.name}
                        name="name"
                    />
                </Flex>
            </FormControl>
            <FormControl>
                <Flex alignItems="center">
                    <FormLabel width="30%" color="brand.secondaryText">New Password</FormLabel>
                    <Input
                        onChange={onChange}
                        placeholder=""
                        type="password"
                        value={state.name}
                        name="name"
                    />
                </Flex>
            </FormControl>
            <Flex justifyContent="flex-end" width="100%">
            <Button onClick={() => { }} size="sm">Update Password</Button>
            </Flex>
            </Stack>
            <Divider />
            <Heading size="sm">Danger Zone</Heading>
            <Button onClick={() => { }} bg="brand.white" size="sm">Delete Account</Button>
        </Stack>
    )
}