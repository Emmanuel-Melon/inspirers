import { Box, Flex, Heading, Stack, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { RiLightbulbFill } from "react-icons/ri";
import { Card, gradientUnderline } from "ui";
import { SectionWrapper } from "./SectionWrapper";

export const ReflectionsSection = () => {
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
            <RiLightbulbFill size="2rem" />
          </Box>
          <Heading
            width="fit-content"
            as="h3"
            size="lg"
            _after={gradientUnderline()}
          >
            Reflect on your journey
          </Heading>
        </Flex>
        <Heading size="lg">Become a better version of yourself by reflecting on your day, week and month</Heading>
        <Text>
        We analyze your journey and encourage you to reflect on your actions by asking you a few thoughtful questions.
        </Text>
        <Flex gap={4} flexDir={["column", "column", "row", "row"]}>
          <Card>
            <Stack gap={2}>
              <Heading
                width="fit-content"
                size="md"
                _after={gradientUnderline({
                  bg: "brand.primary",
                })}
              >
                What went well?
              </Heading>
              <Text>
                Whether you are just starting or have years of experience,
                you'll find free resources to help you become better.
              </Text>
            </Stack>
          </Card>
          <Card>
            <Stack gap={2}>
              <Heading
                width="fit-content"
                size="md"
                _after={gradientUnderline({
                  bg: "brand.primary",
                })}
              >
                What didn't go well?
              </Heading>
              <Text>
                Whether you are just starting or have years of experience,
                you'll find free resources to help you become better.
              </Text>
            </Stack>
          </Card>
          <Card>
            <Stack gap={2}>
              <Heading
                width="fit-content"
                size="md"
                _after={gradientUnderline({
                  bg: "brand.primary",
                })}
              >
                what can I do better?
              </Heading>
              <Text>
                Whether you are just starting or have years of experience,
                you'll find free resources to help you become better.
              </Text>
            </Stack>
          </Card>
        </Flex>
      </Stack>
    </SectionWrapper>
  );
};
