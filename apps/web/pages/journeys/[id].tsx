import { Flex, Text, Heading } from "@chakra-ui/react";
import { Insights } from "./components/Insights";
import { Timeline } from "./components/Timeline";
import { Milestones } from "./components/Milestones";
import { Activities } from "./components/Acitivites";

export default function Journey() {

  return (
    <Flex justifyContent="space-between" width="100%" gap={8}>
      <Flex >
        <Flex width="60%" direction="column" gap={4} marginRight={8}>
          <Insights insights={[]} />
          <Timeline />
        </Flex>
        <Flex width="40%" direction="column" gap={4}>
          <Milestones milestones={[]}/>
          <Activities activities={[]} />
        </Flex>
      </Flex>
    </Flex>
  );
}
