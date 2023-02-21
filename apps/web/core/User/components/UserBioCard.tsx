import { Box, Avatar, Flex, Text, Heading, Stack } from "@chakra-ui/react";
import { Button, Card } from "ui";
import { FiAward } from "react-icons/fi";

export const UserBioCard = ({ user }) => {
  return (
    <Stack>
      <Text>{user?.bio}</Text>
    </Stack>
  );
};
