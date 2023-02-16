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
import { Button, Card, EmptyState, IconButton } from "ui";
import { useRouter } from "next/router";
import { ActiveRoutine } from "core/Routines/ActiveRoutine";
import NextLink from "next/link";
import { JourneyGreeting } from "core/Journeys/components/JourneyGreeting";
import { GoalsOverview } from "core/Journeys/JourneyOverview";
import { AddRoutineModal } from "./AddRoutineModal";
import { FiClock, FiBook, FiRotateCw } from "react-icons/fi";

import {
  HiOutlineBell,
  HiOutlineHome,
  HiOutlineClipboardCheck,
  HiOutlineCollection,
  HiOutlineFlag,
  HiOutlineTemplate
} from "react-icons/hi";

import { RoutineItem } from "./Routine";
import { Routine } from "@prisma/client";

type ListRoutinesProps = {
  isLoading: boolean;
  isError: boolean;
  routines: Routine[];
};

// dynamic
export const ListRoutines = ({
  isLoading,
  isError,
  routines,
}: ListRoutinesProps) => {
  if (isError) {
    return <Text>Failed to Load Routines</Text>;
  }
  if (isLoading) {
    return <Text>Loading Routines</Text>;
  }
  if (routines?.length === 0) {
    return (
      <EmptyState
        heading="Unleash Your Potential!"
        description="Do not let your day fly by without making the most of it! Create your
        first routine now."
        icon={<HiOutlineTemplate />}
      >
        <AddRoutineModal />
      </EmptyState>
    );
  }
  return (
    <Stack gap={2} width="100%">
      <Flex>
        <Heading size="md">My Routines</Heading>
      </Flex>
      {routines &&
        routines?.map((routine) => (
          <RoutineItem routine={routine} key={routine.id} />
        ))}
    </Stack>
  );
};

const upcoming = [
  {
    id: 1,
    title: "End of Day Ritual",
    starts: "22:00",
    duration: "1",
  },
];

const ScheduledRoutineOverview = ({ routine }) => {
  return (
    <Card>
      <Flex alignItems="center" gap={4}>
        <Box
          p="4"
          borderRadius="1rem"
          bg="brand.highlight2"
          color="brand.accent"
        >
          <FiRotateCw size="1rem" />
        </Box>
        <Stack>
          <Heading size="sm" color="brand.secondaryText">
            {routine.title}
          </Heading>
          <Flex gap={4}>
            <Box color="brand.accent" as="span">
              {routine.starts}
            </Box>
            <Tag bg="brand.highlight1" color="brand.primaryText">
              <TagLeftIcon as={FiClock} />
              <TagLabel>{routine.duration}</TagLabel>
            </Tag>
            <Tag bg="brand.highlight2" color="brand.primaryText">
              <TagLeftIcon as={HiOutlineClipboardCheck} />
              <TagLabel>2</TagLabel>
            </Tag>
          </Flex>
        </Stack>
      </Flex>
    </Card>
  );
};

export const UpcomingRoutines = () => {
  return (
    <Stack>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="sm">Up Next</Heading>
        <Text>View More</Text>
      </Flex>
      <Stack>
        {upcoming.map((routine) => (
          <ScheduledRoutineOverview routine={routine} key={routine.id} />
        ))}
      </Stack>
    </Stack>
  );
};
