import { Box, Flex, Heading, Stack, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { RiLightbulbLine } from "react-icons/ri";
import { Card, gradientUnderline } from "ui";
import { SectionWrapper } from "./SectionWrapper";

export const RoutinesSection = () => {
  return (
    <SectionWrapper>
      <Stack flex="2" gap={8}>
        <Flex gap={4} alignItems="center">
          <Box
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            p="2"
            borderRadius="1rem"
            bg="brand.white"
            width="fit-content"
          >
            <RiLightbulbLine size="2rem" />
          </Box>
          <Heading
            width="fit-content"
            as="h3"
            size="lg"
            _after={gradientUnderline()}
          >
            Strategize your day
          </Heading>
        </Flex>
        <Heading size="lg">
          A personalized flow of action will help you achieve your goal quickly
          and effectively.{" "}
        </Heading>
        <Heading size="sm">
        Set up reminders, automated tasks and manage your schedule like a pro.
        </Heading>
        <Flex gap={4} flexDir={["column", "column", "row", "row"]}>
          <Card>
            <Stack gap={4}>
              <Stack gap={2}>
                <Heading size="md" color="brand.secondary">
                  Sync Everything
                </Heading>
                <Text>
                  Sync your tasks and resources
                </Text>
              </Stack>
            </Stack>
          </Card>
          <Card>
            <Stack gap={4}>
              <Stack gap={2}>
                <Heading size="md" color="brand.secondary">
                  Powerful Automations
                </Heading>
                <Text>
                Allow the app to automatically perform time-consuming tasks and create magical shortcuts for you!
                </Text>
              </Stack>
            </Stack>
          </Card>
          <Card>
            <Stack gap={4}>
              <Stack gap={2}>
                <Heading size="md" color="brand.secondary">
                  Practice
                </Heading>
                <Text>
                  Pace yourself and achieve your goals without burning out.
                </Text>
              </Stack>
            </Stack>
          </Card>
          
        </Flex>
        <Flex flex="2" alignItems="center">
          <Stack flex="1">
            <Image
              width="250"
              height="250"
              src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1668705687/inspirers/avatars/AvatarBoy.svg"
              alt="Banner"
            />
          </Stack>
          <Stack gap={4}>
                <Stack gap={2}>
                  <Heading size="md" color="brand.secondary">
                    For Solo Adventurers
                  </Heading>
                  <Text>
                    Pace yourself and achieve your goals without burning out.
                  </Text>
                </Stack>
                <Divider />
                <Stack gap={2}>
                  <Heading size="md" color="brand.secondary">
                    Team Players
                  </Heading>
                  <Text>
                    Create a routine with your friends and hold each other to
                  </Text>
                </Stack>
              </Stack>
        </Flex>
      </Stack>
    </SectionWrapper>
  );
};
