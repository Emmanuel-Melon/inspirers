import React, { useState, useCallback } from "react";
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
    Stack,
    RadioGroup,
    HStack,
    Radio,
    FormHelperText,
    Checkbox,
    Textarea
} from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/react";
import { Avatar, Card, Button, IconButton, Navbar, Spinner } from "ui";
import { useFetch } from "../hooks/useSwr";
import {
    FiMessageSquare,
    FiUserPlus,
    FiMoreVertical,
    FiClock,
    FiRotateCw,
    FiClipboard,
    FiMap,
    FiHeart,
    FiBookmark,
    FiFilter,
    FiChevronsDown,
    FiCalendar,
    FiBookOpen,
} from "react-icons/fi";

const activities = [
    {
        id: 5,
        name: "Task",
        email: "jane@inspirers.co",
        username: "jane",
        avatar: "https://bit.ly/dan-abramov",
        date: 'March 03 2017',
        text: 'Completed',
        icon: <FiClipboard />,
        subject: "Deploy Inspirers Website",
    },
    {
        id: 4,
        name: "Companions",
        email: "jane@inspirers.co",
        username: "jane",
        avatar: "https://bit.ly/dan-abramov",
        date: 'March 03 2017',
        text: 'Emmanuel & Ladu are now companions!',
        icon: <FiUserPlus />
    },
    {
        id: 1,
        name: "Task",
        email: "jane@inspirers.co",
        username: "jane",
        avatar: "https://bit.ly/dan-abramov",
        date: 'March 03 2017',
        text: 'Completed',
        icon: <FiClipboard />,
        subject: "Redesign user profile page.",
    },
    {
        id: 2,
        name: "Routine",
        email: "jane@inspirers.co",
        username: "jane",
        avatar: "https://bit.ly/dan-abramov",
        date: 'March 03 2017',
        text: 'Established a new routine!',
        icon: <FiRotateCw />,
        subject: "Daily Meditation",
    },
    {
        id: 3,
        name: "Journey",
        email: "jane@inspirers.co",
        username: "jane",
        avatar: "https://bit.ly/dan-abramov",
        date: 'March 03 2017',
        text: 'Started a new journey!',
        icon: <FiMap />,
        subject: "Launching Inspirers",
    }
]

const Activity = ({ activity }) => {
    return (
        <Stack color="brand.primaryText">
            <Flex justifyContent="space-between" alignItems="center">
                <Flex gap={4} alignItems="center">
                    <Box
                        bg="brand.highlight1"
                        width="fit-content"
                        p="4"
                        borderRadius="50%"
                        color="brand.secondary"
                    >
                        {activity.icon}
                    </Box>
                    <Stack>
                        <Heading size="xs">{activity.name}</Heading>
                        <Text color="brand.secondaryText">{activity.text} <Box as="span" fontWeight="700">{activity.subject}</Box></Text>
                        <Flex gap={4}>
                            <IconButton color="brand.secondaryText">
                                <FiHeart />
                            </IconButton>
                            <IconButton color="brand.secondaryText">
                                <FiMessageSquare />
                            </IconButton>
                            <IconButton color="brand.secondaryText">
                                <FiBookmark />
                            </IconButton>
                        </Flex>
                    </Stack>
                </Flex>
                <Flex gap={4}>
                    <Button size="sm" bg="brand.white" icon={<FiBookOpen />}>Reflect</Button>
                </Flex>
            </Flex>
        </Stack>
    )
}

export const UserActivity = () => {
    return (
        <Stack gap={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm">September 22</Heading>
                <Flex gap={4}>
                    <IconButton color="brand.secondaryText">
                        <FiFilter />
                    </IconButton>
                    <IconButton color="brand.secondaryText">
                        <FiChevronsDown />
                    </IconButton>
                    <Button size="sm" icon={<FiCalendar />}>Day</Button>
                </Flex>
            </Flex>
            <Stack gap={4}>
                {activities.map((activity) => <Activity activity={activity} key={activity.id} />)}
            </Stack>
        </Stack>
    )
}