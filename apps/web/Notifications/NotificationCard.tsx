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
import {
    ConnectionAcceptedTemplate,
    ConnectionRequestTemplate,
    EventCard,
    MentionTemplate
} from "./NotificationCardTemplates";

type NotificationCardProps = {
    onClick: any;
    notification: Notification;
}

export const NotificationCard = ({ onClick, notification }: NotificationCardProps) => {
    const respondToConnectionRequest = (requestId: string, status: string) => {
        client.put(`/connections/${requestId}/`, {
            status
        })
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <Card onClick={onClick}>
            <Flex justifyContent="space-between">
                {notification.trigger === "ConnectionRequest" ? <ConnectionRequestTemplate notification={notification} /> : null}
                {notification.trigger === "AcceptedConnection" ? <ConnectionAcceptedTemplate notification={notification} /> : null}
                {notification.trigger === "Mention" ? <MentionTemplate notification={notification} /> : null}
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