import {
  Avatar,
  Flex,
  Text,
  Heading,
  VStack,
  Box,
  Tag,
} from "@chakra-ui/react";
import { Button } from "ui";
import { FiFacebook, FiTwitter, FiLinkedin, FiEdit3 } from "react-icons/fi";
import { useFetch } from "hooks/useSwr";

export const UserProfileCard = ({ user }) => {
  console.log(user);

  return (
    <>
      <Flex
        bg="brand.white"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        borderRadius="1rem"
        p="8"
        direction="column"
        color="brand.primaryText"
        width="100%"
      >
        <Flex gap={4} justifyContent="space-between" direction="column">
          <Flex gap={2} justifyContent="space-between" alignItems="center">
            <Flex gap={2} alignItems="center">
              <Avatar
                src={
                  user?.image ||
                  "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"
                }
              />
              <VStack alignItems="flex-start">
                <Heading color="brand.primary" size="sm">
                  {user.name}
                </Heading>
                <Text color="brand.accent" size="sm">@{user?.username}</Text>
              </VStack>
            </Flex>
            {
              true ? <Button
              onClick={() => { }}
              icon={<FiEdit3 />}
              size="sm"
            >
              Edit Profile
            </Button> : <Button
              onClick={() => { }}
              icon={<FiEdit3 />}
              size="sm"
            >
              Connect
            </Button>
            }
          </Flex>

          <VStack alignItems="flex-start" width="100%" gap={4}>
            <Flex gap={4}>
              <Text>
                <Box as="span" color="brand.secondary" fontWeight="700">
                  0
                </Box>{" "}
                Connections
              </Text>
            </Flex>
            <Flex gap={2} flexWrap="wrap">
              <Tag bg="brand.highlight">Interest</Tag>
              <Tag bg="brand.highlight1">Interest</Tag>
              <Tag bg="brand.highlight">Interest</Tag>
            </Flex>
            <VStack alignItems="flex-start">
              <Heading size="sm">Socials</Heading>
              <Flex gap={4} flexWrap="wrap" py="2">
                <FiFacebook size="1.5rem" />
                <FiTwitter size="1.5rem" />
                <FiLinkedin size="1.5rem" />
              </Flex>
            </VStack>
          </VStack>
          <Text>{user?.bio}</Text>
        </Flex>
      </Flex>
    </>
  )
};
