import { Avatar, Text, Box, Stack, Flex, Heading, AvatarBadge, IconButton, VStack } from "@chakra-ui/react"
import moment from "moment"
import { FiMoreHorizontal } from "react-icons/fi"
import { Button, Card } from "ui"
import { Notification } from "@prisma/client";

type NotificationCardProps = {
    onClick: any;
    notification: Notification;
}

const ConnectionRequestCard = () => {
    return (
        <>
            <p>Hello</p>
        </>
    )
}

const EventCard = () => {
    return (
        <>
            <p>Hello</p>
        </>
    )
}

const NotificationTemplates = {
    Event: EventCard
}

export const NotificationCard = ({ onClick, notification }: NotificationCardProps) => {
   console.log(notification);
    return (
        <Card onClick={onClick}>
            <Flex justifyContent="space-between">
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
                            <Button size="sm">Accept</Button>
                            <Button size="sm" bg="brand.highlight1">Reject</Button>
                        </Flex>
                    </VStack>
                </Flex>
                <Flex gap={4}>
                    <Stack alignItems="flex-end">
                        <IconButton aria-label={""} bg="brand.white">
                            <FiMoreHorizontal />
                        </IconButton>
                        <Text>{moment(notification.createdAt).fromNow()}</Text>
                    </Stack>
                </Flex>
            </Flex>
        </Card>
    )
}