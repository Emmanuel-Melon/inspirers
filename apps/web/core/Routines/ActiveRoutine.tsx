import {
  Box,
  Stack,
  Text,
  Flex,
  Heading,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { Card, AsyncDropdown, EmptyState, Button, IconButton } from "ui";
import { useFetch } from "hooks/useSwr";
import { format } from "date-fns";
import {
  FiChevronsRight,
  FiChevronsLeft,
  FiCalendar,
  FiPlay,
  FiPause,
  FiZap,
} from "react-icons/fi";
import { AddRoutineModal } from "./AddRoutineModal";

import {
  HiOutlineCollection,
  HiOutlineTicket,
  HiOutlineShoppingBag,
  HiOutlineChat,
  HiAdjustments,
  HiOutlineRefresh,
  HiUserGroup,
  HiClipboardList,
  HiPlay,
  HiOutlineTemplate,
} from "react-icons/hi";
import NextLink from "next/link";

const resources = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
  },
];

const QueuedResources = () => {
  return (
    <>
      <Stack width="100%">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading size="sm" color="brand.secondaryText">
            Resources
          </Heading>
          <Button icon={<HiOutlineRefresh />} bg="brand.white" size="sm">
            Shuffle
          </Button>
        </Flex>
        <Flex gap={2}>
          {resources?.map((resource) => (
            <Stack>
              <Text size="sm" color="brand.secondaryText">
                {" "}
                - Express.js docs
              </Text>
              <Text size="sm" color="brand.secondaryText">
                {" "}
                - Advanced Node.js Patterns
              </Text>
            </Stack>
          ))}
        </Flex>
      </Stack>
    </>
  );
};

export const ActiveRoutine = ({ routines }) => {
  const today = format(new Date(), "yyyy-MM-dd");
  const startsAt = format(new Date(), "HH:mm");

  const {
    data: routine,
    isLoading: isRoutineLoading,
    isError: isRoutineError,
  } = useFetch(
    `/routines/${today}/upcoming?startingDate=${today}&startsAt=${startsAt}`
  );

  if (routine === null || routine === undefined) {
    return (
      <Card>
        <Stack>
          <Card bg="brand.highlight3">
            <Text>You don't have any routines scheduled for now.</Text>
            <Text>your next Routine will start at: 3:30 PM</Text>
          </Card>
          <Flex>
            {routines?.map((routine) => (
              <Card>
                <Text>{routine?.title}</Text>
              </Card>
            ))}
          </Flex>
          <Flex gap={2}>
            <Button bg="brand.white" color="brand.accent">
              Explore
            </Button>
            <AddRoutineModal CTA="Create Your Routine" />
          </Flex>
        </Stack>
      </Card>
    );
  }

  if (isRoutineLoading) {
    return <p>Loading...</p>;
  }

  if (isRoutineError) {
    return <p>Error loading routine</p>;
  }

  const beginRoutine = () => {
    window.open("https://codingbeautydev.com");

    // send an API request to mark items as active
  };

  return (
    <>
      <Card bg="brand.white">
        <Stack gap={2}>
          <Stack>
            <Flex justifyContent="space-between">
              <Flex gap={2} alignItems="center" color="brand.accent">
                <FiCalendar />
                <NextLink href={`/routines/${routine?.id}`}>
                  <Heading size="md">{routine.title}</Heading>
                </NextLink>
              </Flex>
            </Flex>
            <Text color="brand.secondaryText">{routine.description}</Text>
          </Stack>
          <Flex gap={4} justifyContent="space-evenly">
            <Stack flex="1">
              <Flex justifyContent="space-between">
                <Flex gap={2} alignItems="center">
                  <HiOutlineCollection />
                  <Heading size="sm">Test 3 endpoints</Heading>
                </Flex>
              </Flex>
              <QueuedResources />
            </Stack>
          </Flex>
          <Stack flex="2">
            <Heading size="sm">Next</Heading>
            <Flex gap={4}>
              {routine?.items.map((item) => (
                <Card bg="brand.highlight2">
                  <Stack>
                    <Heading size="sm">{item.title}</Heading>
                    <Flex
                      color="brand.secondaryText"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Flex gap={2}>
                        {false ? (
                          <Button size="sm" icon={<HiOutlineChat />}>
                            Add Comment
                          </Button>
                        ) : null}
                      </Flex>
                    </Flex>
                  </Stack>
                </Card>
              ))}
            </Flex>
          </Stack>
          <Flex justifyContent="flex-end" gap={4}>
            <Tag color="brand.accent">
              <TagLeftIcon as={HiClipboardList} />
              <TagLabel>3 objectives</TagLabel>
            </Tag>
            <Tag color="brand.accent">
              <TagLeftIcon as={HiUserGroup} />
              <TagLabel>3 companions</TagLabel>
            </Tag>
            <Tag color="brand.accent">
              <TagLeftIcon as={FiZap} />
              <TagLabel>3 automations</TagLabel>
            </Tag>
            <Button icon={<HiPlay />} onClick={beginRoutine}>
              Begin
            </Button>
          </Flex>
        </Stack>
      </Card>
    </>
  );
};
