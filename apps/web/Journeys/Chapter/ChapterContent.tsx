import { Flex, Heading, Text } from "@chakra-ui/react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { Button } from "ui";

export const ChapterContent = () => {
  return (
    <Flex gap={8} flex={1}>
      <Flex direction="column" gap={4} flex={2} justifyContent="space-between">
        <Flex direction="column" gap={4}>
          <Heading size="md">Introduction</Heading>
          <Text>
            The youth represent 50% of today's population and 100% of the
            future. I've used LinkedIn for several years but barely got noticed
            because such platforms are biased and only favor the experienced.
          </Text>
        </Flex>
        <Flex justifyContent="space-between" width="100%">
          <Button
            bg="brand.highlight"
            color="brand.success"
            size="sm"
            icon={<FiCheck />}
          >
            Mark as completed
          </Button>
          <Button size="sm" icon={<FiArrowRight />}>
            Continue
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
