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

const events = [
  {
    id: 1,
    sender: "Emmanuel",
    body: "mentioned you",
    subject: "hello",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg",
  },
  {
    id: 2,
    sender: "Emmanuel",
    body: "mentioned you",
    subject: "hello",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg",
  },
  {
    id: 3,
    sender: "Emmanuel",
    body: "mentioned you",
    subject: "hello",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg",
  },
  {
    id: 4,
    sender: "Emmanuel",
    body: "mentioned you",
    subject: "hello",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg",
  },
];

export default function Notifications() {
  return (
    <Stack gap={4} align="flex-start" color="brand.primaryText">
      <Flex gap={2} alignItems="center">
        <FiBell />
        <Heading size="sm">Notifications</Heading>
      </Flex>
      <Stack width={"100%"}>
        {events.map((event) => (
          <Card>
            <Flex justifyContent="space-between">
              <Flex gap={4} alignItems="center">
                <Avatar src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189711/neno/avatars/icons8-walter-white.svg" />
                <Text>
                  <Box as="span" fontWeight="700" marginRight="2">
                    {event.sender}
                  </Box>
                  {event.body}
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
