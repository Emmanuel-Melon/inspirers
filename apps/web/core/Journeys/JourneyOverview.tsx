import { useContext } from "react";
import { Box, Stack, Text, Flex, Heading } from "@chakra-ui/react";
import { Button, Card, EmptyState } from "ui";
import { JourneyConsumer, JourneyContext } from "providers/JourneyProvider";
import { AddGoalModal } from "./AddGoalModal";
import { client } from "utils/client";

import { FiMusic, FiTrash } from "react-icons/fi";

const goals = [
  {
    id: 1,
    title: "Launch landing page and waitlist",
  },
  {
    id: 2,
    title: "Release a public Beta + referrals",
  },
  {
    id: 3,
    title: "Launch on Product Hunt",
  },
];

const GoalCard = ({ goal }) => {
  return (
    <Card>
      <Flex gap={2} alignItems="center">
        <Box color="brand.accent" bg="brand.white" p="2">
          <FiMusic />
        </Box>
        <Heading size="sm">{goal.title}</Heading>
      </Flex>
    </Card>
  );
};

export const GoalsOverview = () => {
  const l = true;

  if (l) {
    return (
      <EmptyState
        heading="No Goals yet"
        description="Created this journey to document the process of developing the
        Inspirers' app."
        icon={<FiMusic size="1rem" />}
      >
        <Flex gap={2}>
        <AddGoalModal />
        </Flex>
      </EmptyState>
    );
  }
  return (
    <Stack width="100%">
      <Flex gap={2} alignItems="center">
        <Heading size="md">Goals (3)</Heading>
      </Flex>
      <Flex gap={2}>
        {goals.map((goal) => (
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
  }
  return (
    <Stack>
      <Heading>{journey.title}</Heading>
      <Text>{journey.description}</Text>
      <Button icon={<FiTrash />} bg="brand.danger" onClick={deleteJourney}>Delete Journey</Button>
    </Stack>
  );
};
