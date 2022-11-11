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
} from "@chakra-ui/react";
import { useFetch } from "../../hooks/useSwr";
import { ListRoutines } from "../../core/Routines/ListRoutines";
import { AddRoutine } from "../../core/Routines/AddRoutine";



import { Card, Modal, IconButton, LayoutController } from "ui";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";
import { JourneyContext } from "providers/JourneyProvider";
import {
  FiList,
  FiSettings,
  FiCalendar,
  FiGrid,
} from "react-icons/fi";
import { useSession } from "next-auth/react";

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

// try this layout for Routines: https://britetodo.com/?ref=roastortoast
export default function Routines(props) {
  const { data: routines, isLoading, isError } = useFetch(`/routines/${props.user?.id}/list`);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [view, setView] = useState("list");

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const changeView = (view: string): void => {
    setView(view);
  };

  const context = useContext(JourneyContext);
  const {data: session} = useSession();

  console.log(session);


  return (
    <>
      <Stack color="brand.primaryText" gap={4} >
        <Flex justifyContent="space-between" alignItems="center" gap={8}>
          <Stack flex="2">
            <Heading size="md">Routines</Heading>
            <Text>The key to managing your time is performing the right habits everyday. These habits will improve your life and help you optimize it to reach your goals.</Text>
          </Stack>
          <Flex>
            <Button onClick={openModal}>New Routine</Button>
          </Flex>
        </Flex>
        <LayoutController layouts={layouts} changeView={changeView} />
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
                  <IconButton label={""} onClick={function (): void { }} color="brand.secondary">
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
      <Modal show={isModalOpen} close={closeModal}>
        <AddRoutine cancel={closeModal} />
      </Modal>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res, query } = context;
  const session = await unstable_getServerSession(req, res, authOptions);

  console.log(session);
  return {
    props: {
      user: {}
    },
  };
}
