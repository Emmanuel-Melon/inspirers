import { useState } from "react";
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
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import { useFetch } from "../../hooks/useSwr";
import { ListRoutines } from "../../Routines/ListRoutines";
import { AddRoutine } from "../../Routines/AddRoutine";



import { Card, Modal, IconButton, LayoutController } from "ui";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";
import {
  FiBarChart2,
  FiFilter,
  FiList,
  FiSettings,
  FiArrowDown,
  FiPlus,
  FiLayout,
  FiCalendar,
  FiLayers,
  FiGrid,
} from "react-icons/fi";

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
  }
];
export default function Routines(props) {
  const { data: routines, isLoading, isError } = useFetch(`/routines/${props.user?.id}/list`);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Stack color="brand.primaryText" gap={4} >
        <Flex justifyContent="space-between" alignItems="center" gap={8}>
          <Stack flex="2">
            <Heading size="md">Routines</Heading>
            <Text>The key to managing your time is performing the right habits everyday. These habits will improve your life and help you optimize it to reach your goals.</Text>
          </Stack>
        </Flex>
        <ListRoutines routines={routines?.data} isLoading={isLoading} isError={isError} />
        <Flex justifyContent="space-between" gap={4}>
          <Box flex="2">
            <ListRoutines routines={routines} isLoading={isLoading} isError={isError} />
          </Box>
          <Stack flex="1">
            <Card bg="brand.highlight1">
              <Stack gap={2}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Heading size="xs">Mid-Day Routine</Heading>
                  <IconButton label={""} onClick={function (): void {} } color="brand.secondary">
                    <FiSettings />
                  </IconButton>
                </Flex>
                <Flex gap={4}>
                  <Card>
                    <Stat>
                      <StatLabel color="brand.secondaryText">Activity</StatLabel>
                      <StatNumber color="brand.secondary">2 days</StatNumber>
                      <StatHelpText>Sep 20 - Present</StatHelpText>
                    </Stat>
                  </Card>
                </Flex>
                <Heading size="xs">Overview</Heading>
                <Flex gap={4}>
                  <Card>
                    <Stat>
                      <StatLabel color="brand.secondaryText">Articles</StatLabel>
                      <StatNumber color="brand.secondary">13</StatNumber>
                    </Stat>
                  </Card>
                  <Card>
                    <Stat>
                      <StatLabel color="brand.secondaryText">Videos</StatLabel>
                      <StatNumber color="brand.secondary">13</StatNumber>
                    </Stat>
                  </Card>
                  <Card>
                    <Stat>
                      <StatLabel color="brand.secondaryText">Challenges</StatLabel>
                      <StatNumber color="brand.secondary">13</StatNumber>
                    </Stat>
                  </Card>
                </Flex>
              </Stack>
            </Card>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res, query } = context;
  const session = await unstable_getServerSession(req, res, authOptions);
  const { createdAt, ...user } = session?.user;

  if (!session?.user?.id) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user
    },
  };
}
