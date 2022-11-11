import { Text, Stack, Heading } from "@chakra-ui/react";
import { Button, EmptyState } from "ui"
import { Notification } from "@prisma/client";
import { NotificationCard } from "./NotificationCard";
import { FiBell } from "react-icons/fi";

type ListNotificationsProps = {
    notifications: Notification[];
}

export const ListNotifications = ({ notifications }: ListNotificationsProps) => {
    const clickHandler = () => { }
    const explore = () => { }
    return (
        <Stack>
            {
                notifications?.length === 0 ? (
                    <EmptyState 
                        heading="You don't have any notifiations"
                        description="Start interacting with the app to receive notifications."
                        icon={<FiBell />}
                    />
                ) : notifications?.map((notification: Notification) => (
                    <NotificationCard onClick={clickHandler} notification={notification} key={notification.id} />
                ))
            }
        </Stack>
    )
}
