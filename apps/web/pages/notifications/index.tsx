import {
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Button, Spinner } from "ui";
import { useFetch } from "../../hooks/useSwr";
import { FiCheckCircle } from "react-icons/fi";
import { ListNotifications } from "Notifications/ListNotifications";

export default function Notifications() {
  const { data: notifications, isLoading, isError } = useFetch(`/notifications/job.requesteeId`);
  const markAllAsRead = () => {}
  return (
    <Stack gap={4} align="flex-start" color="brand.primaryText" width="100%">
      <Flex gap={2} alignItems="center" justifyContent="space-between"  width="100%">
        <Heading size="md" color="brand.primary">Notifications</Heading>
        <Button 
          icon={<FiCheckCircle />}
          onClick={markAllAsRead}
          size="md"
        >
          Mark all as read
        </Button>
      </Flex>
      <Stack width={"100%"}>
        {
          isLoading ? <Spinner /> : <ListNotifications notifications={notifications.data}/>
        }
      </Stack>
    </Stack>
  );
}
