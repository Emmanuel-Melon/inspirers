import {
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Button, Spinner } from "ui";
import { useFetch } from "../../hooks/useSwr";
import { FiCheckCircle } from "react-icons/fi";
import { ListNotifications } from "../../core/Notifications/ListNotifications";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Notifications() {
  const { data: session } = useSession();
  const { data: notifications, isLoading, isError } = useFetch(`/notifications/${session?.user?.id}`);
  const markAllAsRead = () => {}
  console.log(notifications);

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
          isLoading ? <Spinner /> : <ListNotifications notifications={notifications}/>
        }
      </Stack>
    </Stack>
  );
}

