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
import { TextInput, Button } from "ui";
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
            <Heading size="md">Security</Heading>
            <Stack alignItems="flex-end" width="100%" >
            <FormControl>
                <Flex alignItems="center">
                    <FormLabel width="30%" color="brand.secondaryText">Old Password</FormLabel>
                    <TextInput
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
                    <TextInput
                        onChange={onChange}
                        placeholder=""
                        type="password"
                        value={state.name}
                        name="name"
                    />
                </Flex>
            </FormControl>
            <Button onClick={() => { }} size="md">Update Password</Button>
            </Stack>
            <Divider />
            <Heading size="md">Danger Zone</Heading>
            <Button onClick={() => { }} bg="brand.danger" size="md">Delete Account</Button>
        </Stack>
    )
}