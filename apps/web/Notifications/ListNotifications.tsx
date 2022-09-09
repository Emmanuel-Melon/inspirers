import { Text, Stack, Heading } from "@chakra-ui/react";
import { Button } from "ui"
import { Notification } from "@prisma/client";
import { NotificationCard } from "./NotificationCard";

type ListNotificationsProps = {
    notifications: Notification[];
}

export const ListNotifications = ({ notifications }: ListNotificationsProps) => {
    const clickHandler = () => { }
    const explore = () => { }
    return (
        <Stack width={"100%"}>
            {
                notifications?.length === 0 ? (
                    <>
                        <Heading size="sm">You don't have any notifiations.</Heading>
                        <Text>Start interacting with the app to receive notifications.</Text>
                        <Button width="120px" onClick={explore}>Explore</Button>
                    </>
                ) : notifications?.map((notification: Notification) => (
                    <NotificationCard onClick={clickHandler} notification={notification} key={notification.id} />
                ))
            }
        </Stack>
    )
}