import React, { useState, useCallback } from "react";
import useSWR, { Key, Fetcher, useSWRConfig } from "swr";
import {
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
    FormErrorMessage,
    FormHelperText,
    Stack,
    RadioGroup,
    HStack,
    Radio,
    Checkbox,
    Textarea,
    Divider
} from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/react";
import { Avatar, Card, Button, Input, IconButton, Navbar, Spinner } from "ui";
import { useFetch, usePost } from "../hooks/useSwr";
import { FiMessageSquare, FiMoreHorizontal, FiCopy } from "react-icons/fi";
import { backendUrl } from "config";


export const InviteFriend = () => {
    const { data: session, status } = useSession();
    const [email, setEmail] = useState<string>("");
    const fetcher = usePost("/users/invite", { email });
    // const { mutate } = useSWRConfig()
    const { mutate } = useSWRConfig()

    const sendInvite = () => {
        // mutate({ email });
        // mutate('/users/invite', fetcher());
    }
    const copyLink = async (text: string) => {
        if ("clipboard" in navigator) {
            await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand("copy", true, text);
        }
    }

    return (
        <Stack gap={2} p="4">
            <Flex gap={4} alignItems="center">
                <Box
                    p="2"
                    borderRadius="1rem"
                    bg="brand.highlight1"
                >
                    <FiMessageSquare />
                </Box>
                <Heading size="md">Invite your friends</Heading>
            </Flex>
            <Text>Hey Emmanuel! You can invite them using a personalized invite link</Text>
            <Card bg="brand.highlight2">
                <Flex gap={2} >
                    <Input
                        placeholder={`${backendUrl}/auth?ref=${session?.user?.id}`}
                        value={`${backendUrl}/auth?ref=${session?.user?.id}`}
                        onChange={() => { }}
                    />
                    <IconButton
                        onClick={() => copyLink(`${backendUrl}/signup?ref=${session?.user?.id}`)}
                        label="Copy Link"
                    >
                        <FiCopy />
                    </IconButton>
                </Flex>
            </Card>
            <Divider />
            <Text>OR</Text>
            <FormControl>
                <Input
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    type="text"
                    value={email}
                    name="email"
                />
            </FormControl>
            <Flex gap={4} justifyContent="flex-end">
                <Button onClick={sendInvite} bg="brand.white">
                    Cancel
                </Button>
                <Button onClick={sendInvite}>
                    Send Invitation
                </Button>
            </Flex>
        </Stack>
    )
}
