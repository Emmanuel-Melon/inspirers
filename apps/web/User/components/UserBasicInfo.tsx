import { Avatar, Flex, Text, Heading, VStack } from "@chakra-ui/react";
import { Button } from "ui";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import moment from "moment";

export const UserBasicInfo = ({ user }) => {
  return (
    <Flex
      bg="brand.white"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      borderRadius="1rem"
      p="8"
      direction="column"
      color="brand.primaryText"
      gap={8}
      width="100%"
    >
      <VStack alignItems="flex-start">
        <Flex alignItems="center" gap={2}>
          <FiBriefcase />
          <Text color="brand.primaryText">
            Software Developer
          </Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <FiCalendar />
          <Text color="brand.primaryText">
            Joined {moment(user?.createdAt).fromNow()}
          </Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <FiMapPin />
          <Text color="brand.primaryText">
            Location South Sudan
          </Text>
        </Flex>
      </VStack>
    </Flex>
  )
};
