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
    IconButton,
} from "@chakra-ui/react";

import { TextInput, Button, Card } from "ui";
import {
    FiMoreHorizontal,
    FiInfo,
    FiClipboard,
    FiShoppingBag,
    FiUser,
} from "react-icons/fi";

export const CurrentJourney = () => {
    return (
        <Card>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm">Journey Title</Heading>
                <IconButton aria-label={""} size="sm">
                    <FiMoreHorizontal />
                </IconButton>
            </Flex>
        </Card>
    )
}