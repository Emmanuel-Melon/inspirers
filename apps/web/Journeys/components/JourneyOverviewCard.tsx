import { FC, useCallback, useState } from "react";
import { Flex, Heading, Text, Box, Avatar, Stack } from "@chakra-ui/react";
import { Button, Card, Modal } from "ui";
import {
  FiEye,
  FiShare2,
  FiPackage,
  FiCreditCard,
  FiSettings,
  FiTruck,
  FiEdit,
} from "react-icons/fi";
import { UserObject } from "types/User";
import { useRouter } from "next/router";
import { JourneyOnboardingSteps } from "../Onboarding/JourneyOnboardingSteps";
import { client } from "utils/client";
import { EditJourney } from "../EditJourney";

type JourneyOverviewCard = UserObject & {
  // rest of the props
};

const Companion = ({ companion }) => {
  return <Avatar src={companion.avatar} />;
};

export const JourneyOverviewCard: FC<JourneyOverviewCard> = ({
  journey,
  user,
}) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setShow(true);
  }, []);
  const closeModal = useCallback(() => {
    setShow(false);
  }, []);


  function inviteFriends() { }
  function getStarted() {
    router.push("/journeys/new");
  }

  const deleteJourney = () => {
    client
      .delete(`/journeys/${journey?.id}`)
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        alert("failed to delete");
      });
  };
  return (
    <>
      <Stack>
        {
          true ? <Flex justifyContent="space-between">
            <Box>
              <Flex gap={2} alignItems="center">
                <Avatar src={user?.image} />
                <Heading color="brand.primaryText" size="lg" as="h1">
                  Hello, {journey?.user?.name || "Inspirer!"}{" "}
                </Heading>
              </Flex>
              <Text my="4">
                It's time for you to take the leap. What is your ultimate goal?
              </Text>
            </Box>
            <Flex gap={4}>
              {journey?.userId === user?.id ? (
                <Button
                  onClick={openModal}
                  icon={<FiEdit />}
                >
                  Edit Journey
                </Button>
              ) : (
                <Button onClick={getStarted} icon={<FiTruck />}>
                  Get Started
                </Button>
              )}
            </Flex>
          </Flex> : null
        }
        <Card>
          <Flex
            justifyContent="space-between"
            color="brand.primaryText"
          >
            <Flex alignItems="center" gap={8}>
              <Flex alignItems="center" gap={4}>
                <Text fontWeight={"700"}>Companions</Text>
              </Flex>
              <Button
                onClick={inviteFriends}
                variant="outline"
                bg="#fff"
                icon={<FiShare2 />}
              >
                Invite Friends
              </Button>
            </Flex>
            <Flex gap={8} alignItems="center">
              <Flex alignItems="center" gap={1}>
                <FiEye color="#116979" />
                <Text>Public</Text>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <FiPackage color="#116979" />
                <Text>Integrations</Text>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <FiCreditCard color="#116979" />
                <Text>Plan</Text>
              </Flex>
              <Flex alignItems="center" gap={1}>
                <FiSettings color="#116979" />
                <Text>Settings</Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Stack>
      <Modal show={show} close={closeModal}>
        <EditJourney />
      </Modal>
    </>
  );
};
