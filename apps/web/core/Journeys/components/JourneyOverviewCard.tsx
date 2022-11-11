import { FC, useCallback, useState } from "react";
import { Flex, Heading, Text, Box, Avatar, Stack, Tag, TagLeftIcon } from "@chakra-ui/react";
import { Button, Card, IconButton, Modal } from "ui";
import {
  FiUsers,
  FiShare2,
  FiPackage,
  FiCreditCard,
  FiSettings,
  FiTruck,
  FiEdit3,
  FiHeart,
  FiRepeat,
  FiRewind,
  FiZap,
  FiClock
} from "react-icons/fi";
import { Journey, User } from "@prisma/client";
import { useRouter } from "next/router";
import { JourneyOnboardingSteps } from "../Onboarding/JourneyOnboardingSteps";
import { client } from "utils/client";
import { EditJourney } from "../EditJourney";
import { InviteFriend } from "../../User/InviteFriendModal";

type JourneyOverviewCard = {
  // rest of the props
  journey?: Journey;
  user?: User;
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
              <Text my="4">
                It is time for you to take the leap. What is your ultimate goal?
              </Text>
              <Flex>
                <Tag>
                  <TagLeftIcon as={FiClock} />
                  1 day
                </Tag>
              </Flex>
              <Stack>
              </Stack>
            </Box>

            <Flex gap={4}>
              {journey?.userId === user?.id ? (
                <Flex gap={4}>
                  <Button
                    onClick={openModal}
                    icon={<FiZap />}
                  >
                    Remix
                  </Button>
                </Flex>
              ) : (
                <Flex gap={4}>
                  <Button onClick={getStarted} icon={<FiTruck />}>
                    Get Started
                  </Button>
                  <Button onClick={getStarted} icon={<FiTruck />}>
                    Get Started
                  </Button>
                </Flex>
              )}
            </Flex>
          </Flex> : null
        }
        <Flex
          justifyContent="space-between"
          color="brand.primaryText"
        >
          <Flex alignItems="center" gap={8}>
            <Flex alignItems="center" gap={4}>
              <Text fontWeight={"700"}>Companions</Text>
            </Flex>
            <Button
              onClick={openModal}
              variant="outline"
              bg="#fff"
              icon={<FiShare2 />}
            >
              Invite Friends
            </Button>
          </Flex>
          <Flex gap={8} alignItems="center">
            <Flex alignItems="center" gap={1}>
              <FiUsers color="#116979" />
              <Text>25 Companions</Text>
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
      </Stack>
      <Modal show={show} close={closeModal}>
        <InviteFriend />
      </Modal>
    </>
  );
};
