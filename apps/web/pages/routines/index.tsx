import { useContext, useState } from "react";
import {
  Stack,
  Text,
  Flex,
  Heading,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Tag,
} from "@chakra-ui/react";
import { useFetch } from "hooks/useSwr";
import { ListRoutines } from "core/Routines/ListRoutines";
import { ActiveRoutine } from "core/Routines/ActiveRoutine";
import { AddRoutineModal } from "core/Routines/AddRoutineModal";
import { client } from "utils/client";
import { HiOutlineHome, HiOutlineTemplate } from "react-icons/hi";
import NextLink from "next/link";

import { Avatar, Button, Card, Modal, IconButton, LayoutController } from "ui";
import { JourneyContext } from "providers/JourneyProvider";
import {
  FiList,
  FiSettings,
  FiCalendar,
  FiGrid,
  FiStar,
  FiZap,
} from "react-icons/fi";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { Timeline } from "core/Routines/TimelineView";

// infer SSR Props!
const layouts = [
  {
    id: 1,
    title: "List",
    icon: <FiList />,
    active: true,
  },
  {
    id: 1,
    title: "Grid",
    icon: <FiGrid />,
    active: false,
  },
  {
    id: 1,
    title: "Timeline",
    icon: <FiCalendar />,
    active: false,
  },
];

export default function RoutinesPage(props) {
  const { data: session } = useSession();
  const context = useContext(JourneyContext);
  const {
    data: routines,
    isLoading,
    isError,
  } = useFetch(`/routines/${session?.user?.id}/list`);
  const [view, setView] = useState("list");


  const changeView = (view: string): void => {
    setView(view);
  };

  return (
    <>
      <Stack color="brand.primaryText" gap={4}>
        <Flex justifyContent="space-between" alignItems="center" gap={8}>
          <Stack flex="2">
            <Heading size="md">Routines</Heading>
          </Stack>
          <AddRoutineModal />
        </Flex>
        <Flex justifyContent="space-between" gap={4}>
          <Stack flex="1">
            <Card bg="brand.primary">
              <Stack>
                <Box
                  p="2"
                  bg="brand.white"
                  width="fit-content"
                  borderRadius="0.5rem"
                >
                  <HiOutlineTemplate size="1.5rem" />
                </Box>
                <NextLink href={`/user/${session?.user?.id}`}>
                <Heading size="md" color="brand.primaryText">
                  Hi, {session?.user?.name}
                </Heading>
                </NextLink>
                <Text color="brand.secondaryText">
                  The key to managing your time is performing the right habits
                  everyday. These habits will improve your life and help you
                  optimize it to reach your goals.
                </Text>
              </Stack>
            </Card>
            <Flex gap={4}>
              <Card bg="brand.white">
                <Stat>
                  <StatLabel color="brand.secondaryText">
                    Daily Streak
                  </StatLabel>
                  <StatNumber color="brand.accent">3 days</StatNumber>
                  <StatHelpText>Feb 01 - Feb 28</StatHelpText>
                </Stat>
              </Card>
            </Flex>
            <Flex gap={4}>
              <Card bg="brand.white">
                <Stat>
                  <StatLabel color="brand.secondaryText">
                    Objectives Completed
                  </StatLabel>
                  <StatNumber color="brand.accent">1</StatNumber>
                  <StatHelpText>Feb 01 - Feb 28</StatHelpText>
                </Stat>
              </Card>
              <Card bg="brand.white">
                <Stat>
                  <StatLabel color="brand.secondaryText">Hours spent</StatLabel>
                  <StatNumber color="brand.accent">2 hours</StatNumber>
                  <StatHelpText color="brand.secondaryText">
                    Feb 01 - Feb 28
                  </StatHelpText>
                </Stat>
              </Card>
            </Flex>
          </Stack>
          <Stack flex="2">
            <Card>
              <Stack>
                <Text>My Schedule</Text>
                <Text>Show active hours</Text>
                <Text>Show bar or something</Text>
              </Stack>
            </Card>
            <LayoutController layouts={layouts} changeView={changeView} />
            <ListRoutines
              routines={routines}
              isLoading={isLoading}
              isError={isError}
            />
          </Stack>
          <Stack flex="1">
            <Flex justifyContent="space-between">
              <Flex gap={2} alignItems="center">
                <FiZap />
                <Heading size="sm">Automations</Heading>
              </Flex>
              <NextLink href="routines/automations">View All</NextLink>
            </Flex>
            <Card bg="brand.white">
              <Stack>
                <Flex gap={2} alignItems="center" color="brand.accent">
                  <FiZap />
                  <Heading size="sm">Zen Mode</Heading>
                </Flex>
                <Text>Closes all tabs.</Text>
                <Tag
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                  color="brand.secondaryText"
                >
                  When Routine Starts
                </Tag>
              </Stack>
            </Card>
            <Card bg="brand.white">
              <Stack>
                <Flex gap={2} alignItems="center" color="brand.accent">
                  <FiZap />
                  <Heading size="sm">Lofi</Heading>
                </Flex>
                <Text>Closes all tabs.</Text>
                <Tag
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                  color="brand.secondaryText"
                >
                  When Routine Starts
                </Tag>
              </Stack>
            </Card>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
