import React, { useState } from "react";
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
  Heading,
  Avatar,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
  Box,
  useTab,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { JourneyGreeting } from "core/Journeys/components/JourneyGreeting";
import { Activities } from "core/Journeys/components/Acitivities";
import { RoutinesOverview, TimeTracker } from "core/Routines/RoutinesOverview";
import { GoalsOverview, JourneyTimeline } from "core/Journeys/JourneyOverview";
import { EmptyState, Button, Card, IconButton } from "ui";
import { useFetch } from "hooks/useSwr";
import { useSession, signIn, signOut } from "next-auth/react";
import { ActiveCompanions, UserStatus } from "core/User";
import {
  HiOutlineMap,
  HiOutlineTemplate,
  HiOutlineArrowRight,
  HiOutlineUserGroup,
  HiOutlineInformationCircle,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import Image from "next/image";
import {
  JourneyConsumer,
  JourneyProvider,
  JourneyContext,
} from "providers/JourneyProvider";
import { JourneyOnboardingSteps } from "core/Journeys/Onboarding/JourneyOnboardingSteps";
import { RiHandbagLine, RiUserStarLine } from "react-icons/ri";
import { User } from "@prisma/client";



const JourneyOverview = ({ journey }) => {
  return (
    <Stack height="100%">
          <Card
    >
      <Stack>
      <Heading>{journey?.title}</Heading>
      <Text>{journey?.description}</Text>
      <Text>{journey?.description}</Text>
      </Stack>
    </Card>
    </Stack>
  );
};

const JourneyEmpty = () => {
  const [accepted, setAccepted] = useState(false);
  return (
    <Card>
      {accepted ? (
        <Stack gap={2} width="100%">
          <Stack>
            <JourneyOnboardingSteps />
          </Stack>
        </Stack>
      ) : (
        <Stack gap={2}>
          <Box
            bg="brand.accent"
            width="fit-content"
            p="2"
            borderRadius="1rem"
            color="brand.white"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
          >
            <HiOutlineMap size="1.5rem" />
          </Box>
          <Heading color="brand.primaryText">Welcome to Inspirers 👋🏿</Heading>
          <Text color="brand.secondaryText">
            We're excited to help you embark on your journey to success. With
            Inspirers, you'll learn from the success stories of others and be
            able to recreate and relive their experiences.
          </Text>
          <Heading size="sm" color="brand.accent">
            Embark on a journey
          </Heading>
          <Flex gap={2}>
            <Card>
              <Stack>
                <Box color="brand.accent">
                  <RiHandbagLine />
                </Box>
                <Text color="brand.secondaryText">
                  Gather all the resources you'll need to complete your journey
                </Text>
              </Stack>
            </Card>
            <Card>
              <Stack>
                <Box color="brand.accent">
                  <HiOutlineTemplate />
                </Box>
                <Text color="brand.secondaryText">
                  Create routines to help you achieve your goals
                </Text>
              </Stack>
            </Card>
            <Card>
              <Stack>
                <Box color="brand.accent">
                  <HiOutlineUserGroup />
                </Box>
                <Text color="brand.secondaryText">
                  Find companions to help you along the way
                </Text>
              </Stack>
            </Card>
          </Flex>
          <Text>
            Share your journey with the community and show others the way to
            kickstart their own epic adventures too!
          </Text>
          <Flex justifyContent="flex-end" gap={2}>
            <Button
              icon={<HiOutlineInformationCircle />}
              onClick={() => setAccepted(true)}
              bg="brand.white"
            >
              Learn More
            </Button>
            <Button
              icon={<HiOutlineArrowRight />}
              onClick={() => setAccepted(true)}
            >
              Begin Your Journey
            </Button>
          </Flex>
        </Stack>
      )}
    </Card>
  );
};

const JourneyCreationProgress = () => {
  return (
    <Card>
      <Stack gap={2} width="100%">
        <Stack>
          <Heading size="md">Let's Get Started!</Heading>
          <Text color="brand.secondaryText">
            Take the first step and start your journey now
          </Text>
          <Progress
            value={2}
            hasStripe
            size="md"
            colorScheme="purple"
            borderRadius="1rem"
            bg="brand.highlight3"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
          />
        </Stack>
        <Stack gap={2}>
          <Flex justifyContent="space-between">
            <Flex gap={4} alignItems="center" color="brand.accent">
              <Box>
                <HiOutlineMap />
              </Box>
              <Stack>
                <Text size="sm">Start Journey</Text>
              </Stack>
            </Flex>
            <Box color="brand.success">
              <HiOutlineCheckCircle size="1.5rem" />
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Flex gap={4} alignItems="center">
              <Box>
                <RiHandbagLine />
              </Box>
              <Stack color="brand.secondaryText">
                <Text size="sm">Pack Resources</Text>
              </Stack>
            </Flex>
            <Box color="brand.secondaryText">
              <HiOutlineCheckCircle size="1.5rem" />
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Flex gap={4} alignItems="center">
              <Box>
                <HiOutlineTemplate />
              </Box>
              <Stack color="brand.secondaryText">
                <Text size="sm">Create Routines</Text>
              </Stack>
            </Flex>
            <Box color="brand.secondaryText">
              <HiOutlineCheckCircle size="1.5rem" />
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Flex gap={4} alignItems="center">
              <Box>
                <HiOutlineUserGroup />
              </Box>
              <Stack color="brand.secondaryText">
                <Text size="sm">Find Companions</Text>
              </Stack>
            </Flex>
            <Box color="brand.secondaryText">
              <HiOutlineCheckCircle size="1.5rem" />
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </Card>
  );
};

// if there is a journey but progress hasn't been completed, continue where they left off

export const ONBOARDING_NEXT_REDIRECT = {
  redirect: {
    permanent: false,
    destination: "/getting-started",
  },
} as const;

export const shouldShowOnboarding = (
  user: Pick<User, "createdAt" | "completedOnboarding">
) => {
  return !user.completedOnboarding;
};

export default function Index() {
  const { data: session } = useSession();
  const {
    data: journey,
    isLoading,
    isError,
  } = useFetch(`/journeys/${session?.user?.id}/current`);

  if (isLoading) {
    return <p>Loading journey</p>;
  }

  if (isError) {
    console.log(isError)
    return <p>Failed to load journey</p>;
  }

  return (
    <>
      <JourneyProvider value={{ ...journey }}>
        <Flex
          gap={2}
          direction={{ base: "row", md: "column" }}
          width="100%"
          py="2"
        >
          <Stack>
            <JourneyGreeting />
          </Stack>
          {journey?.userId === session?.user?.id ? (
            <Tabs defaultIndex={0} isLazy variant="unstyled">
              <TabList
                gap={4}
                bg="brand.highlight3"
                p="4"
                borderRadius="1rem"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                marginBottom={4}
              >
                <Tab >Day 0</Tab>
                <Tab>Journey Overview</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p="none">
                  <Stack gap={2}>
                    <Flex gap={2}>
                    <Stack flex="2">
                      {journey ? <JourneyOverview journey={journey} /> : null}
                      </Stack>
                      <Stack flex="1">
                      {journey ? <GoalsOverview /> : null}
                      </Stack>
                    </Flex>
                    <Flex gap={2}>
                      <Stack flex="2">
                        <RoutinesOverview />
                        <Activities />
                      </Stack>
                      <Stack flex="1">
                        {false ? (
                          <>
                            <TimeTracker />
                            <ActiveCompanions />
                            <UserStatus />
                          </>
                        ) : (
                          <JourneyCreationProgress />
                        )}
                      </Stack>
                    </Flex>
                  </Stack>
                </TabPanel>
                <TabPanel p="none">
                  <JourneyTimeline />
                </TabPanel>
              </TabPanels>
            </Tabs>
          ) : (
            <Flex gap={2}>
              <Stack flex="2">
                <JourneyEmpty />
              </Stack>
              <Stack flex="1">
                <JourneyCreationProgress />
              </Stack>
            </Flex>
          )}
        </Flex>
      </JourneyProvider>
    </>
  );
}
