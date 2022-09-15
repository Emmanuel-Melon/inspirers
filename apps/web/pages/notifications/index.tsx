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
  const { data: notifications, isLoading, isError } = useFetch(`/notifications/cl7uzd9a10146nvbt246jxnc2`);
  const markAllAsRead = () => {}
  return (
    <Stack gap={4} align="center" color="brand.primaryText" width="100%" borderRadius="1rem">
      <Flex  gap={2} alignItems="center" justifyContent="space-between"  width="100%">
        <Heading size="md" color="brand.primaryText">Notifications</Heading>
        <Flex gap={4}>
        <Button 
          onClick={markAllAsRead}
          size="sm"
        >
          All
        </Button>
        <Button 
          onClick={markAllAsRead}
          size="sm"
          bg="brand.white"
        >
          Unread
        </Button>
        </Flex>
      </Flex>
      <Stack  width={"100%"}>
        {
          isLoading ? <Spinner /> : <ListNotifications notifications={notifications?.data}/>
        }
      </Stack>
    </Stack>
  );
}
