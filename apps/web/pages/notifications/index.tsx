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
} from "@chakra-ui/react";
import { FiMoreHorizontal, FiBell } from "react-icons/fi";
import { Button } from "ui";
import { Card } from "ui";
import { useFetch } from "../../hooks/useSwr";

export default function Notifications() {
  const { data: notifications, isLoading, isError } = useFetch(`/notificaions/job.requesteeId`);
  console.log(notifications);
  return (
    <Stack gap={4} align="flex-start" color="brand.primaryText">
      <Flex gap={2} alignItems="center">
        <FiBell />
        <Heading size="sm">Notifications</Heading>
      </Flex>
      <Stack width={"100%"}>
        {notifications?.map((event) => (
          <Card>
            <Flex justifyContent="space-between">
              <Flex gap={4} alignItems="center">
                <Avatar src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189711/neno/avatars/icons8-walter-white.svg" />
                <Text>
                  <Box as="span" fontWeight="700" marginRight="2">
                    {event.receiverId}
                  </Box>
                  {event.receiverId}
                </Text>
              </Flex>
              <Stack alignItems="flex-end">
                <Text>3h</Text>
                <FiMoreHorizontal />
              </Stack>
            </Flex>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
