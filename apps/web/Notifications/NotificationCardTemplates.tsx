import { Avatar, Text, Box, Stack, Flex, Heading, AvatarBadge, IconButton, VStack } from "@chakra-ui/react"
import moment from "moment"
import { FiMoreHorizontal } from "react-icons/fi"
import { Button, Card } from "ui"
import { Notification } from "@prisma/client";
import {
    Connection,
    ConnectionRequest,
    ConnectionRequestStatus,
    ConnectionStatus,
    UserConnections
} from "@prisma/client";
import { client } from "../utils/client";
import { request } from "http";
import { Component } from "react";

type NotificationCardProps = {
    onClick: any;
    notification: Notification;
}

export const ConnectionRequestTemplate = ({ onClick, notification }) => {
    return (
        <>
                <Flex gap={4} alignItems="center">
                    <Avatar src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189711/neno/avatars/icons8-walter-white.svg">
                        <AvatarBadge boxSize='1.25em' bg='green.500' />
                    </Avatar>
                    <VStack alignItems="flex-start">
                        <Text>
                            {notification.title}

                        </Text>
                        <Text>{notification.message}</Text>
                        <Flex gap={2}>
                            <Button
                                size="sm"
                                onClick={onClick}
                            >
                                Accept
                            </Button>
                            <Button
                                size="sm"
                                bg="brand.highlight1"
                                onClick={onClick}
                            >
                                Decline
                            </Button>
                        </Flex>
                    </VStack>
                </Flex>
        </>
    )
}

export const EventCard = () => {
    return (
        <>
            <p>Hello</p>
        </>
    )
}

export const MentionTemplate = () => {
    return (
        <>
            <p>Hello</p>
        </>
    )
}

export const ConnectionAcceptedTemplate = () => {
    return (
        <>
            <p>Hello</p>
        </>
    )
}