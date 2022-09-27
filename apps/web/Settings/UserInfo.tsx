import React, { useState, useCallback } from "react";
import {
    Avatar,
    Image,
    Img,
    Text,
    Link,
    Flex,
    Heading,
    Box,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    useMultiStyleConfig,
    useTab,
    FormControl,
    FormLabel,
    Stack,
    RadioGroup,
    HStack,
    Radio,
    FormHelperText,
    Checkbox,
    Textarea,
} from "@chakra-ui/react";
import {
    FiActivity,
    FiInfo,
    FiClipboard,
    FiShoppingBag,
    FiUser,
} from "react-icons/fi";
import { Input, Button } from "ui";
import { client } from "../utils/client";

export const UserInfo = ({ user }) => {
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

    const updateUserInfo = () => {
        setIsLoading(true);
        client
            .put(`/users/${user?.id}`, {
                name: state.name,
                username: state.username,
                bio: state.bio,
                email: state.email
            })
            .then((response) => {
                setIsLoading(false);
            })
    }

    return (
        <Stack
            alignItems="flex-start"
            width="100%"
            gap={2}
        >
            <Text>Manage your personal info</Text>
            <FormControl >
                <Flex alignItems="center">
                    <FormLabel width="30%" color="brand.secondaryText">Display Name</FormLabel>
                    <Input
                        onChange={onChange}
                        placeholder={user?.name}
                        type="text"
                        value={state.name}
                        name="name"
                    />
                </Flex>
            </FormControl>
            <FormControl>
                <Flex>
                    <FormLabel width="30%" color="brand.secondaryText">Username</FormLabel>
                    <Input
                        onChange={onChange}
                        placeholder={user?.username}
                        type="text"
                        value={state.username}
                        name="username"
                    />
                </Flex>
            </FormControl>
            <FormControl>
                <Flex>
                    <FormLabel width="30%" color="brand.secondaryText">E-mail</FormLabel>
                    <Input
                        onChange={onChange}
                        placeholder={user?.email}
                        type="text"
                        value={state.email}
                        name="email"
                    />
                </Flex>
            </FormControl>
            <FormControl>
            </FormControl>
            <FormControl>
                <Flex>
                    <FormLabel width="30%" color="brand.secondaryText">Bio</FormLabel>
                    <Textarea
                        variant="filled"
                        bg="brand.white"
                        p="4"
                        borderRadius="1rem"
                        placeholder={user?.bio}
                        value={state.bio}
                        name="bio"
                    />
                </Flex>
            </FormControl>
            <Flex gap={4}>
                <Button onClick={updateUserInfo} size="md" isLoading={isLoading}>Save Changes</Button>
                <Button size="md" bg="brand.white">Cancel</Button>
            </Flex>
        </Stack>
    )
}