import React, { useCallback } from "react";
import {
    Stack,
    RadioGroup,
    HStack,
    Radio,
    FormHelperText,
    Checkbox,
    Textarea,
    Text,
    FormControl,
    Switch,
    FormLabel
} from "@chakra-ui/react";
import {
    FiActivity,
    FiInfo,
    FiClipboard,
    FiShoppingBag,
    FiUser,
} from "react-icons/fi";
import { TextInput, Button } from "ui";

export const NotificationSettings = ({ user }) => {

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

    }, []);

    return (
        <Stack alignItems="flex-start" width="100%" gap={2}>
            <FormControl display='flex' alignItems='center' justifyContent="space-between">
                <FormLabel htmlFor='email-alerts' mb='0' color="brand.secondaryText">
                    Enable email alerts?
                </FormLabel>
                <Switch id='email-alerts' color="brand.primary" />
            </FormControl>
            <FormControl display='flex' alignItems='center' justifyContent="space-between">
                <FormLabel htmlFor='email-alerts' mb='0' color="brand.secondaryText">
                    Mentions
                </FormLabel>
                <Switch id='email-alerts' color="brand.primary" />
            </FormControl>
            <FormControl display='flex' alignItems='center' justifyContent="space-between">
                <FormLabel htmlFor='email-alerts' mb='0' color="brand.secondaryText">
                    Messages
                </FormLabel>
                <Switch id='email-alerts' color="brand.primary" />
            </FormControl>
            <FormControl display='flex' alignItems='center' justifyContent="space-between">
                <FormLabel htmlFor='email-alerts' mb='0' color="brand.secondaryText">
                    Requests
                </FormLabel>
                <Switch id='email-alerts' color="brand.primary" />
            </FormControl>
            <Button onClick={() => { }} size="md">Update</Button>
        </Stack>
    )
}