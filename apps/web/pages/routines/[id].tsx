import { useState } from "react";
import {
  Image,
  Img,
  Stack,
  Text,
  Link,
  Flex,
  Heading,
  Box,
  IconButton,
  Tag,
  TagLeftIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import { useDelete, useFetch } from "../../hooks/useSwr";
import { Button, Card, CustomCheckbox, Modal } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { format, formatDistance, parseISO } from "date-fns";
import {
  FiArrowLeft,
  FiUsers,
  FiShare2,
  FiPlus,
  FiCalendar,
  FiMoreHorizontal,
} from "react-icons/fi";
import { RoutineStats } from "../../core/Routines/RoutineStats";
import { RoutineObjectives } from "core/Routines/RoutineObjectives";
import { RoutineResources } from "core/Routines/RoutineResources";
import { RoutineTasks } from "core/Routines/RoutineTasks";
import { ManageRoutine } from "core/Routines/ManageRoutine";
import { RoutineAutomations } from "core/Routines/RoutineAutomations";
import { LayoutController } from "ui";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { client } from "utils/client";

const CalendarCard = ({ event }) => {
  const date = new Date(event);
  return (
    <Stack border="solid 0.10rem #eee" p="4">
      <Heading size="md" color="brand.accent">
        {format(date, "eeeeee")}
      </Heading>
      <Text color="brand.secondaryText">{format(date, "MM/dd/yy")}</Text>
    </Stack>
  );
};

export default function Routine() {
  const router = useRouter();
  const { data: session } = useSession();
  const { data: routine, isLoading, isError } = useFetch(`${router.asPath}`);
  console.log(routine);

  if (isError) {
    return <p>Unable to show routine</p>;
  }

  if (isLoading) {
    return <p>Loading routine</p>;
  }

  const deleteRoutine = () => {
    client.delete(router.asPath)
    .then((res: { data: any }) => res.data)
    .then(() => router.push("/routines"))
  }
  return (
    <>
      <Stack color="brand.primaryText" gap={4} width="100%">
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Flex gap={2} alignItems="center">
            <Stack>
              <Flex gap={2} alignItems="center">
                <Box
                  color="brand.accent"
                  bg="brand.white"
                  p="2"
                  borderRadius="0.5rem"
                >
                  <FiArrowLeft />
                </Box>
                <Heading size="lg">
                  {routine?.title}{" "}
                  <Box as="span" color="brand.accent">
                    (Level 1)
                  </Box>
                </Heading>
              </Flex>
              <Tag
                size="md"
                bg="brand.highlight1"
                color="brand.secondary"
                fontWeight="700"
              >
                <TagLeftIcon boxSize="12px" as={FiCalendar} />
                {moment(new Date()).format("MMM Do YY")}
              </Tag>
              <Text color="brand.secondaryText">{routine?.description}</Text>
            </Stack>
          </Flex>
          <Flex gap={4}>
            <Button size="sm" bg="brand.white" icon={<FiShare2 />}>
              Share
            </Button>
            <Button size="sm" icon={<FiShare2 />}>
              Adopt
            </Button>
          </Flex>
        </Flex>
        <Flex gap={8}>
          <Stack gap={2} width="100%" flex="1">
            <Card>
              <Flex gap={2} alignItems="center">
                <Avatar
                  name={session?.user?.name}
                  src={session?.user?.image || ""}
                />
                <Stack>
                  <NextLink href={`/user/${session?.user?.id}`}>
                    <Heading size="md" color="brand.primaryText">
                      {session?.user?.name}
                    </Heading>
                  </NextLink>
                </Stack>
              </Flex>
            </Card>
            <Card>
              <Heading size="sm" color="brand.secondary">
                Goal
              </Heading>
              <Text color="brand.secondaryText">
                This routine will help me achieve: X
              </Text>
            </Card>
            <Heading size="sm" color="brand.secondary">
              About
            </Heading>
            <Text color="brand.secondaryText">
              Updated{" "}
              {formatDistance(parseISO(routine?.updatedAt), new Date(), {
                addSuffix: true,
              })}
            </Text>
            <RoutineStats routine={routine} />
            <Stack>
              <Stack>
                <Flex justifyContent="space-between">
                  <Flex gap={2} alignItems="center">
                    <FiUsers />
                    <Heading size="sm">Companions (1)</Heading>
                  </Flex>
                  <Text>View All</Text>
                </Flex>
                <Flex gap={2}>
                  <Avatar
                    name="Oshigaki Kisame"
                    src="https://bit.ly/broken-link"
                    size="sm"
                  />
                </Flex>
              </Stack>
            </Stack>
          </Stack>
          <Stack gap={4} width="100%" flex="2">
            <Card>
              <Text>Overview</Text>
            </Card>
            <Tabs p="0">
              <TabList p="0">
                <Tab>Quests</Tab>
                <Tab>Resources</Tab>
                <Tab>Automations</Tab>
                <Tab>Settings</Tab>
                <Tab>Calendar</Tab>
              </TabList>

              <TabPanels p="0">
                <TabPanel p="0">
                  <RoutineObjectives />
                </TabPanel>
                <TabPanel>
                  <RoutineResources />
                </TabPanel>
                <TabPanel>
                  <RoutineAutomations />
                </TabPanel>
                <TabPanel>
                  <Stack>
                    <Text>Settings</Text>
                    <Text>Privacy</Text>
                    <Text>Reminders</Text>
                    <Heading>Cloning</Heading>
                    <Text>Clone Quests only</Text>
                    <Text>Clone Quests only</Text>
                    <Text>Clone Quests only</Text>
                    <Text>Clone Quests only</Text>
                    <Button>Deactivate Routine</Button>
                    <Button onClick={deleteRoutine}>Delete Routine</Button>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Card>
                  <Text>Clone Quests only</Text>
                  </Card>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
