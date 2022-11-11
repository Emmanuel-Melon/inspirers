import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

import {
    Avatar,
    Image,
    Img,
    Stack,
    Text,
    Link,
    Flex,
    Heading,
    Box,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    IconButton
} from "@chakra-ui/react";
import { Button, Card } from "ui";

import {
    FiHome,
    FiSettings,
    FiUser,
    FiBell,
    FiCheckCircle,
    FiRotateCw,
    FiTrendingUp,
    FiMap,
    FiMonitor,
    FiClipboard,
    FiShoppingBag,
    FiPaperclip,
    FiMusic,
    FiVideo,
    FiImage,
    FiMoreHorizontal,
    FiDownloadCloud
} from "react-icons/fi";


export const QuickAccess = () => {
    return (
<Stack>
            <Heading size="md">Quick Access</Heading>
            <Flex gap={4}>
                <Card>
                    <Text>Hello</Text>
                </Card>
                <Card>
                    <Text>Hello</Text>
                </Card>
                <Card>
                    <Text>Hello</Text>
                </Card>
            </Flex>
        </Stack>
    );
}
