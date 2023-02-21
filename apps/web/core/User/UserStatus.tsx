import { useContext } from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  Heading,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import { Button, Card, IconButton } from "ui";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { FiHeadphones, FiBook, FiPlay, FiPause } from "react-icons/fi";
import { HiOutlinePlusCircle } from "react-icons/hi";

export const UserStatus = () => {
  return (
    <Stack>
      <Stack my="4">
        <Flex gap={2} alignItems="center">
          <Heading size="md">Activity</Heading>
        </Flex>
        <Flex gap={2} alignItems="center" color="brand.secondaryText">
          <Box
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            bg="brand.white"
            color="brand.accent"
            p="2"
            borderRadius="50%"
          >
            <FiBook />
          </Box>
          <Text>
            <NextLink href="https://github.com/emmanuel-melon">
              Advanced Node.js Patterns
            </NextLink>{" "}
            -{" "}
            <Box as="span" color="brand.accent">
              Medium
            </Box>
          </Text>
        </Flex>
        <Flex gap={2} alignItems="center" color="brand.secondaryText">
          <Box
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            bg="brand.white"
            color="brand.accent"
            p="2"
            borderRadius="50%"
          >
            <FiHeadphones />
          </Box>
          <Text>
            <NextLink href="https://github.com/emmanuel-melon">
              Electro Chill
            </NextLink>{" "}
            -{" "}
            <Box as="span" color="brand.accent">
              Spotify
            </Box>
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};
