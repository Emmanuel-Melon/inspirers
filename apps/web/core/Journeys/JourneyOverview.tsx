import { useContext, useRef } from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  Heading,
  Progress,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Button, Card, EmptyState, IconButton } from "ui";
import { JourneyConsumer, JourneyContext } from "providers/JourneyProvider";
import { AddGoalModal } from "./AddGoalModal";
import { client } from "utils/client";
import { useFetch } from "hooks/useSwr";
import { Goal } from "@prisma/client";

import { FiTarget, FiTrash, FiMusic, FiMaximize2 } from "react-icons/fi";

const GoalCard = ({ goal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Card>
        <Flex gap={2} alignItems="center">
          <Box color="brand.accent" bg="brand.white" p="2">
            <FiTarget />
          </Box>
          <Flex
            gap={2}
            flexGrow="1"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex>
              <Heading size="sm">{goal.title}</Heading>
              <Progress
                value={89}
                hasStripe
                size="md"
                colorScheme="purple"
                borderRadius="1rem"
                bg="brand.highlight1"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              />
            </Flex>
            <IconButton ref={btnRef} colorScheme="teal" onClick={onOpen}>
              <FiMaximize2 />
            </IconButton>
          </Flex>
        </Flex>
      </Card>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        bg="brand.white"
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.white">
          <DrawerCloseButton />
          <DrawerHeader>{goal.title}</DrawerHeader>

          <DrawerBody bg="brand.highlight1">
            <Stack>
            <Heading size="sm">Goal Progress</Heading>
            <Progress
                value={89}
                hasStripe
                size="md"
                colorScheme="purple"
                borderRadius="1rem"
                bg="brand.highlight1"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              />
            </Stack>
          </DrawerBody>

          <DrawerFooter gap={2}>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const GoalsOverview = () => {
  const context = useContext(JourneyContext);
  const {
    data: goals,
    isError,
    isLoading,
  } = useFetch(`journeys/${context.id}/goals`);
  console.log(goals);

  if (isError) {
    return <p>Failed to load goals</p>;
  }

  if (goals?.length === 0) {
    return (
      <EmptyState
        heading="No Goals yet"
        description="Created this journey to document the process of developing the
        Inspirers' app."
        icon={<FiTarget size="1rem" />}
      >
        <Flex gap={2}>
          <AddGoalModal journey={context} />
        </Flex>
      </EmptyState>
    );
  }

  return (
    <Stack width="100%">
      <Flex gap={2} alignItems="center" justifyContent="space-between">
        <Heading size="md">Goals (3)</Heading>
        <AddGoalModal journey={context} CTA="Add another goal" />
      </Flex>
      <Flex gap={2}>
        {goals?.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </Flex>
    </Stack>
  );
};

export const JourneyTimeline = () => {
  const journey = useContext(JourneyContext);
  const deleteJourney = () => {
    client
      .delete(`/journeys/${journey.id}`)
      .then((res) => {
        //console.log(res);
        //successToast("Routine created");
        //closeModal();
      })
      .catch((err) => {
        console.log(err);
        // errorToast(err.message);
      });
  };
  return (
    <Stack>
      <Heading>{journey.title}</Heading>
      <Text>{journey.description}</Text>
      <Button icon={<FiTrash />} bg="brand.danger" onClick={deleteJourney}>
        Delete Journey
      </Button>
    </Stack>
  );
};
