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
import { ActiveRoutine } from "core/Routines/ActiveRoutine";
import { FiHeadphones, FiBook, FiPlay, FiPause } from "react-icons/fi";
import { useFetch } from "hooks/useSwr";
import { JourneyConsumer, JourneyContext } from "providers/JourneyProvider";

export const TimeTracker = () => {
  return (
    <Card>
      <Flex justifyContent="space-between" alignItems="center" gap={4}>
        <Stack>
          <Text fontSize="x-large" color="brand.accent">
            Day 2
          </Text>
        </Stack>
        <Flex gap={2}>
          <Text fontSize="large" color="brand.secondaryText">
            02:24
          </Text>
          <Flex gap={2}>
            <Box
              boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              bg="brand.white"
              color="brand.accent"
              p="2"
              borderRadius="50%"
            >
              <FiPause />
            </Box>
            <Box
              boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              bg="brand.accent"
              color="brand.white"
              p="2"
              borderRadius="50%"
            >
              <FiPlay />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

// maybe a widget that pops
export const RoutinesOverview = () => {
  const context = useContext(JourneyContext);
  
  const {
    data: routines,
    isLoading,
    isError,
  } = useFetch(`/routines/${context?.userId}/list`);

  console.log(routines);
  
  return (
    <Flex gap={4}>
      <Stack flex="1">
        <ActiveRoutine routines={routines} />
        <Stack flex="1">
          {false ? (
            <Flex gap={2}>
              <Button icon={<FiPlay />} onClick={() => {}}>
                Begin Routine
              </Button>
              <Button color="brand.accent" icon={<FiPause />} bg="brand.white">
                Pause
              </Button>
            </Flex>
          ) : null}
        </Stack>
      </Stack>
    </Flex>
  );
};
