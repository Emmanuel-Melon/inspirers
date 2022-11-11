import { Avatar, Text, Box, Stack, Flex, Heading, AvatarBadge, IconButton, VStack } from "@chakra-ui/react"
import moment from "moment"
import { FiMoreHorizontal, FiMessageSquare, FiUser } from "react-icons/fi"
import { Button, Card } from "ui"
import { Notification } from "@prisma/client";
import {
    Connection,
    ConnectionRequest,
    ConnectionRequestStatus,
    ConnectionStatus,
    UserConnections
} from "@prisma/client";
import { client } from "../../utils/client";
import { request } from "http";
import { Component } from "react";

type NotificationCardProps = {
    onClick: any;
    notification: Notification;
}

export const ConnectionRequestTemplate = ({ onClick, notification }) => {
    return (
        <>
            <Flex gap={4} alignItems="center" color="brand.primaryText">
                <Avatar size="lg" src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1658952150/inspirers/images/d1739063-8fa1-4c03-ba65-bee616e96350.png"/>
                <VStack alignItems="flex-start">
                    <Heading size="xs" color="brand.secondary">
                        {notification.title}
                    </Heading>
                    <Text><Box as="span" fontWeight="700">Cheben Gabriel</Box> Wants to connect with you.</Text>
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
            <Text><Box as="span" fontWeight="700">Ladu Lumori</Box> has mentioned you in a comment.</Text>
        </>
    )
}

export const ConnectionAcceptedTemplate = ({ onClick }) => {
    return (
        <>
            <VStack alignItems="flex-start">
                <Text><Box as="span" fontWeight="700">Emmanuel Daniel</Box> has accepted your connection request.</Text>
                <Flex gap={2}>
                    <Button
                        size="sm"
                        onClick={onClick}
                        icon={<FiMessageSquare />}
                    >
                        Say Hello!
                    </Button>
                    <Button
                        size="sm"
                        bg="brand.highlight2"
                        onClick={onClick}
                        icon={<FiUser />}
                    >
                        View Profile
                    </Button>
                </Flex>
            </VStack>
        </>
    )
}