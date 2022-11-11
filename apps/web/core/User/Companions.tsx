import React, { useState, useCallback } from "react";
import {
  Image,
  Img,
  Text,
  Link,
  Flex,
  Heading,
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useMultiStyleConfig,
  useTab,
  FormControl,
  FormLabel,
  Stack,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
  Checkbox,
  Textarea
} from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/react";
import { Avatar, Card, Button, IconButton, Navbar, Spinner } from "ui";
import { useFetch } from "../../hooks/useSwr";
import { FiMessageSquare, FiMoreHorizontal } from "react-icons/fi";

const users = [
  {
    id: 1,
    name: "Jane Cooper",
    email: "jane@inspirers.co",
    username: "jane",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: 2,
    name: "Jane Cooper",
    email: "jane@inspirers.co",
    username: "jane",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: 3,
    name: "Jane Cooper",
    email: "jane@inspirers.co",
    username: "jane",
    avatar: "https://bit.ly/dan-abramov",
  }
]


export const Companion = ({ companion }) => {
  return (
    <Flex justifyContent="space-between">
      <Flex gap={2} alignItems="center">
        <Avatar src={companion.avatar} />
        <Stack>
          <Heading size="sm">{companion.name}</Heading>
          <Text color="brand.secondary">@{companion.username}</Text>
        </Stack>
      </Flex>
      <Flex gap={2}>
        <Button
          icon={<FiMessageSquare />}
          size="sm"
          onClick={() => console.log("message")}
          bg="white"
        >
          Message
        </Button>
        <IconButton>
          <FiMoreHorizontal />
        </IconButton>
      </Flex>
    </Flex >
  )
}


export const UserCompanions = () => {
  const { data: session, status } = useSession();
  const { data: companions, isLoading, isError } = useFetch(`/connections/${session?.user?.id}`);

  if (status === "loading") {
    return (
      <Flex minHeight="100vh" align="center" justify="center">
        <Spinner />
      </Flex>
    );
  }
  return (
    <Stack gap={2}>
      {
        users.map((companion) => <Companion companion={companion} key={companion.id} />)
      }
    </Stack>
  )
}