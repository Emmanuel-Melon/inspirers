import React, { useState, useCallback } from "react";
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
    return (
        <Flex gap={4} width="100%">
            <Stack flex={1}>
                <Image
                    src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"
                    width="150px"
                    height="200px"
                    alt="Hello, World"
                />
            </Stack>
            <Stack flex={2} gap={2}>
                <Flex justifyContent="space-between" alignItems="center">
                    <Stack>
                        <Heading size="md">Launching Inspirers</Heading>
                        <Text>
                            When you do it with other people, you learn, you laugh, and you make unforgettable memories to last a lifetime.
                        </Text>
                    </Stack>
                    <IconButton aria-label={""} size="sm" onClick={() => {}}>
                        <FiMoreHorizontal />
                    </IconButton>
                </Flex>
                <Flex gap={4} flexWrap="wrap">
                    <Tag
                        bg="brand.highlight"
                        borderRadius='full'
                        size="lg"
                        _hover={{
                            bg: "brand.hovered"
                        }}
                        cursor="pointer"
                    >
                        <TagLeftIcon boxSize='12px' as={FiCreditCard} />
                        <TagLabel>Finance</TagLabel>
                    </Tag>
                    <Tag
                        bg="brand.highlight1"
                        borderRadius='full'
                        size="lg"
                        _hover={{
                            bg: "brand.hovered"
                        }}
                        cursor="pointer"
                    >
                        <TagLeftIcon boxSize='12px' as={FiCode} />
                        <TagLabel>EdTech</TagLabel>
                    </Tag>
                    <Tag
                        bg="brand.highlight2"
                        borderRadius='full'
                        size="lg"
                        _hover={{
                            bg: "brand.hovered"
                        }}
                        cursor="pointer"
                    >
                        <TagLeftIcon boxSize='12px' as={FiBriefcase} />
                        <TagLabel>Startups</TagLabel>
                    </Tag>
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