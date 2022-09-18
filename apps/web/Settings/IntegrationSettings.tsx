import React, { useCallback } from "react";
import {
    Stack,
    RadioGroup,
    HStack,
    Radio,
    FormHelperText,
    Checkbox,
    Textarea,
    Text
} from "@chakra-ui/react";
import {
    FiActivity,
    FiInfo,
    FiClipboard,
    FiShoppingBag,
    FiUser,
} from "react-icons/fi";
import { TextInput, Button } from "ui";

export const IntegrationSettings = ({ user }) => {

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

    }, []);

    return (
        <Stack alignItems="flex-start" width="100%" gap={2}>
            <Text>Coming Soon</Text>
        </Stack>
    )
}