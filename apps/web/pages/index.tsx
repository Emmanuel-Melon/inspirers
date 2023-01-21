import { Stack, Text, Flex, Heading } from "@chakra-ui/react";
import { AsyncDropdown, Button } from "ui";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  function getStarted() {
    router.push("/journeys/new/getting_started");
  }
  return (
    <>
      <Flex
        justifyContent="space-between"
        gap={8}
        direction={{ base: "row", md: "column" }}
      >
        <Stack flex="2">
          <Heading size="md">Journeys</Heading>
          <Text>
            Explore the wide variety of Journeys available on Inspirers, and
            discover the stories of experts who have already achieved the goals
            you're working towards. Choose a Journey that resonates with you,
            and get the inspiration and guidance you need to succeed. Or create
            your own Journey and share it with the Inspirers community! With
            Inspirers, the possibilities are endless.
          </Text>
        </Stack>
        <Flex>
          <Button onClick={getStarted}>New Journey</Button>
        </Flex>
        <Flex gap={4}>
          <Stack>
            <Heading size="md">Current Goal</Heading>
          </Stack>
          <Stack>
            <Heading size="md">Current Routine</Heading>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
