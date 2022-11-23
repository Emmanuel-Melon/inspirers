import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Stack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiMap } from "react-icons/fi";
import { RiCodeLine, RiMusic2Line, RiFootprintLine } from "react-icons/ri";
import { Card } from "ui";
import { gradientUnderline } from "ui";
import { SectionWrapper } from "./SectionWrapper";
import { JourneyTags } from "./JourneyTags";

export const JourneySection = () => {
  return (
    <SectionWrapper>
      <Stack gap={4}>
        <Stack flex="2" gap={4}>
          <Flex gap={4} alignItems="center">
            <Box
              boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              p="2"
              borderRadius="1rem"
              bg="brand.white"
              width="fit-content"
            >
              <RiFootprintLine size="2rem" />
            </Box>
            <Heading
              size="lg"
              width="fit-content"
              _after={gradientUnderline()}
            >
              Begin Your Journey
            </Heading>
          </Flex>
          <Heading size="xl">
            Choose the area of your improvement and start your journey.
          </Heading>
          <JourneyTags />
        </Stack>
        <Flex gap={4} flexDir={["column", "column", "row", "row"]}>
          <Image
            width="350"
            height="350"
            src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1668704300/inspirers/avatars/7309674.svg"
            alt="Banner"
          />
          <Card>
            <Stack gap={4}>
              <Stack gap={2}>
                <Heading size="md" width="fit-content" color="brand.secondary">
                  Be an Inspiration
                </Heading>
                <Text color="brand.secondaryText">
                  Have you learned remarkable lessons that you want to share
                  with the world?
                </Text>
              </Stack>
              <Divider />
              <Stack gap={2}>
                <Heading width="fit-content" size="md" color="brand.secondary">
                  Find Inspiration
                </Heading>
                <Text color="brand.secondaryText">
                  Are you struggling to figure out what to do? Do you have goals
                  but can’t get started?
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Flex>
      </Stack>
    </SectionWrapper>
  );
};
