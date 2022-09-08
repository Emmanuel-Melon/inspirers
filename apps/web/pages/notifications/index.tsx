import {
  Avatar,
  Image,
  Img,
  Stack,
  Text,
  Link,
  Flex,
  Heading,
  Box,
  IconButton
} from "@chakra-ui/react";
import { FiMoreHorizontal, FiBell } from "react-icons/fi";
import { Button, Card, Spinner } from "ui";
import { useFetch } from "../../hooks/useSwr";
import { Notification } from "@prisma/client";
import moment from "moment";
import { FiCheckCircle } from "react-icons/fi";

export default function Notifications() {
  const { data: notifications, isLoading, isError } = useFetch(`/notifications/job.requesteeId`);
  return (
    <Stack gap={4} align="flex-start" color="brand.primaryText" width="100%">
      <Flex gap={2} alignItems="center" justifyContent="space-between"  width="100%">
        <Heading size="md">Notifications</Heading>
        <Button icon={<FiCheckCircle />}  size="md">Mark all as read</Button>
      </Flex>
      <Stack width={"100%"}>
        {
          isLoading ? <Spinner /> : (notifications?.data?.map((notification: Notification) => (
            <Card key={notification.id}>
              <Flex justifyContent="space-between">
                <Flex gap={4} alignItems="center">
                  <Avatar src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189711/neno/avatars/icons8-walter-white.svg" />
                  <Text>
                    <Box as="span" fontWeight="700" marginRight="2">
                      {notification.receiverId}
                    </Box>
                    {notification.receiverId}
                  </Text>
                </Flex>
                <Stack alignItems="flex-end">
                  <IconButton aria-label={""} bg="brand.white">
                    <FiMoreHorizontal />
                  </IconButton>
                  <Text>{moment(notification.createdAt).fromNow()}</Text>
                </Stack>
              </Flex>
            </Card>
          )))
        }
      </Stack>
    </Stack>
  );
}
