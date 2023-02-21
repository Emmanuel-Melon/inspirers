import React, { useState, useCallback, useContext } from "react";
import {
    Avatar,
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
    Tag,
    TagLabel,
    TagLeftIcon
} from "@chakra-ui/react";
import Image from "next/image";
import { JourneyConsumer, JourneyContext } from "providers/JourneyProvider";

import { Input, IconButton, Button, Card } from "ui";
import {
    FiInfo,
    FiClipboard,
    FiShoppingBag,
    FiUser,
    FiClock,
    FiRotateCw,
    FiFacebook,
    FiCode,
    FiBriefcase,
    FiFolder,
    FiCreditCard,
    FiTwitter,
    FiLinkedin,
    FiEdit3,
    FiUserPlus,
    FiMoreHorizontal,
    FiMessageSquare
} from "react-icons/fi";

export const CurrentJourney = () => {
    const context = useContext(JourneyContext);
    console.log(context);
    return (
        <Flex gap={4} width="100%">
            <Stack flex={2} gap={2}>
                <Flex justifyContent="space-between" alignItems="center">
                    <Stack>
                        <Heading size="md">{context?.title}</Heading>
                        <Text>
                            When you do it with other people, you learn, you laugh, and you make unforgettable memories to last a lifetime.
                        </Text>
                    </Stack>
                    <IconButton aria-label={""} size="sm" onClick={() => {}}>
                        <FiMoreHorizontal />
                    </IconButton>
                </Flex>
                <Card>
                    <Flex justifyContent="space-between">
                        <Flex gap={2} alignItems="center">
                            <Box>
                                <FiClock />
                            </Box>
                            <Text>125 Hours</Text>
                        </Flex>
                        <Flex gap={2} alignItems="center">
                            <Box>
                                <FiRotateCw />
                            </Box>
                            <Text>5 Routines</Text>
                        </Flex>
                        <Flex gap={2} alignItems="center">
                            <Box>
                                <FiClipboard />
                            </Box>
                            <Text>125 Tasks</Text>
                        </Flex>
                    </Flex>
                </Card>
            </Stack>
        </Flex>
    )
}