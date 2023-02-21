import { Flex, Stack, Heading, Avatar } from "@chakra-ui/react";
import { HiOutlineUsers } from "react-icons/hi";

export const ActiveCompanions = () => {
  return (
    <Stack>
      <Flex justifyContent="space-between">
        <Flex gap={2} alignItems="center">
          <Heading size="md">Active Companions</Heading>
        </Flex>
      </Flex>
      <Flex gap={2}>
        <Avatar
          name="Cheben Mimi"
          src="https://bit.ly/broken-link"
          size="sm"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="linear-gradient(90.44deg, #F4C85A -7.46%, #E3A6F2 54.28%, #FBBE95 119.85%)"
        />
        <Avatar
          name="Beta"
          src="https://bit.ly/broken-link"
          size="sm"
          borderWidth="2px"
          borderStyle="solid"
          borderColor="linear-gradient(90.44deg, #F4C85A -7.46%, #E3A6F2 54.28%, #FBBE95 119.85%)"
        />
      </Flex>
    </Stack>
  );
};
