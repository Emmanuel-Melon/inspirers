import React, { useContext, useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {
  Avatar,
  Flex,
  Heading,
  Text,
  VStack,
  Checkbox,
  Tag,
  TagLeftIcon,
  TagLabel,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Progress,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";
import { Button, Card, IconButton, Input } from "ui";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import {
  FiX,
  FiArrowRight,
  FiTarget,
  FiTrendingUp,
  FiThumbsUp,
  FiCheckCircle,
  FiClock,
  FiFlag,
  FiBookOpen,
  FiMoreHorizontal,
  FiStar,
  FiPlus,
  FiArrowLeft
} from "react-icons/fi";
import { JourneyBluePrint } from "../components/JourneyBluePrint";
import { client } from "../../../utils/client";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { RecommendedAccounts } from "./RecommendedAccounts";
import { useFetch } from "hooks/useSwr";


export const JourneyGoalsGuide = ({ guide }) => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Flex height="100%">
      <Flex direction="column" gap={4}>
        {context.blueprint === "template" ? (
          <>
            <Heading size="md" color="brand.primary">
              Browse templates
            </Heading>
            <VStack
              alignItems="flex-start"
              p="4"
              borderRadius="1rem"
              bg="brand.highlight2"
              color="brand.primaryText"
            >
              <Text>Accounting</Text>
              <Text>Software Engineering</Text>
              <Text>Cooking</Text>
              <Text>Poetry</Text>
              <Text
                color="brand.primaryText"
                bg="brand.highlight2"
                fontWeight="700"
                borderRadius="1rem"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                fontSize="12px"
                px="2"
                py="1px"
                width="fit-content"
              >
                Show More
              </Text>
            </VStack>
          </>
        ) : (
          <Card>
                      <Stack
            gap={4}
            color="brand.primaryText"
            borderRadius="1rem"
          >
            <Flex alignItems="center" gap={2} color="brand.secondaryText">
              <FiTarget />
              <Text>Specific: Well defined, clear, and unambiguous.</Text>
            </Flex>
            <Flex alignItems="center" gap={2} color="brand.secondaryText">
              <FiTrendingUp />
              <Text>Measurable:  With specific criteria.</Text>
            </Flex>
            <Flex alignItems="center" gap={2} color="brand.secondaryText">
              <FiThumbsUp />
              <Text>Attainable: Attainable and not impossible to achieve.</Text>
            </Flex>
            <Flex alignItems="center" gap={2} color="brand.secondaryText">
              <FiCheckCircle />
              <Text>Realistic: Within reach, realistic, and relevant to your life purpose.</Text>
            </Flex>
            <Flex alignItems="center" gap={2} color="brand.secondaryText">
              <FiClock />
              <Text>Timely: With a clearly defined timeline, including a starting date and a
                target date.</Text>
            </Flex>
          </Stack>
          </Card>
        )}
      </Flex>
    </Flex>
  );
};

// add this somewhere when looking for companions: Inspire others to reach their goals and invite them to join your tribe.
const SmartGoalSuggestion = ({ saveGoal, goal }) => {
  return (
    <Flex
      gap={2}
      bg="brand.white"
      py="2"
      px="4"
      borderRadius="1.5rem"
      alignItems="center"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      _hover={{
        bg: "brand.highlight2",
      }}
      cursor="pointer"
      onClick={() => saveGoal({ title: goal.title, userId: goal.userId })}
    >
      <Box
        bg="brand.highlight3"
        p="2"
        color="brand.accent"
        borderRadius="50%"
      >
        <FiFlag />
      </Box>
      <Text>{goal.title}</Text>
    </Flex>
  )
}

// Link Backpacks/Routines to Goals
const JourneyGoal = ({ goal }) => {
  return (
    <LinkBox>
      <Card>
        <Flex justifyContent="space-between">
          <LinkOverlay href={`goals/${goal.id}`}>
            <Flex gap={4} alignItems="center">
              <Box
                bg="brand.highlight3"
                p="2"
                color="brand.accent"
                borderRadius="50%"
              >
                <FiFlag />
              </Box>
              <Stack>
                <Heading size="xs">{goal.title}</Heading>
              </Stack>
            </Flex>
          </LinkOverlay>
          <Flex gap={2}>
            {
              false ? <IconButton size="sm">
                <FiMoreHorizontal />
              </IconButton> : null
            }
            {
              false ? <Button size="sm" bg="brand.white" icon={<FiBookOpen />}>Reflect</Button> : null
            }
          </Flex>
        </Flex>
      </Card>
    </LinkBox>
  )
}

const currentGoals = [
  {
    id: 1,
    title: "Build 5 front end applications",
    eta: "1 month",
    userId: "cl8bry9660006rlbt2n2ki24f"
  },
  {
    id: 4,
    title: "Learn how to play 15 guitar solos",
    eta: "1 month",
    userId: "cl8bry9660006rlbt2n2ki24f"
  }
]

export const JourneyGoals = () => {
  const context = useContext(JourneyOnboardingContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const router = useRouter();
  const [addedGoals, setAddedGoals] = useState(currentGoals);
  const [parent] = useAutoAnimate(/* optional config */);
  const { data: goals } = useFetch(`journeys/${context.journey.id}/goals`);
  const [isFocused, setFocused] = useState(false);

  const [goal, setGoalInfo] = useState({
    title: "",
    userId: "cl8bry9660006rlbt2n2ki24f"
  });

  const handleNext = () => {
    router.push(`/journeys/${context.journey.id}`);
  };

  // disable next button if no goals are added
  // disable auto suggestions if max goal count is reached
  // maintain fixed height for the goal container
  // separate the suggestions from the added goals
  // maybve a divider between the two
  // or a container witgha  different bg color
  const saveGoal = (goal) => {
    client.post(`journeys/${context.journey.id}/goals`, {
      ...goal,
    })
      .then(() => {
        setGoalInfo({ ...goal, title: "" });
      });
  }
  return (
    <Stack gap={2} color="brand.primaryText">
      <Flex gap={4} alignItems="center">
        <IconButton size="sm" onClick={context.moveBackwards} label="go back to previous step">
          <FiArrowLeft />
        </IconButton>
        <Heading color="brand.primaryText" size="md">
          {context.currentStep.title}
        </Heading>
      </Flex>
      <Stack
        bg="brand.highlight1"
        p="4"
        borderRadius="1rem"
      >
        <Flex alignItems="flex-end" gap={2} >
          <FormControl>
            <FormLabel>S.M.A.R.T Goal</FormLabel>
            <Input
              onChange={(e) => {
                setGoalInfo({ ...goal, title: e.target.value });
              }}
              placeholder="Write 1000 words this month."
              type="text"
              value={goal.title}
              name="title"
            />
          </FormControl>
          <Button
            onClick={() => saveGoal(goal)}
            size="md"
            icon={<FiPlus />}
          >Add</Button>
        </Flex>
        {
          !isFocused ? <Stack gap={4}>
            <Flex alignItems="center" gap={4}>
              <Box
                bg="brand.highlight1"
                p="2"
                color="brand.secondary"
                borderRadius="50%"
              >
                <FiStar size="1rem" />
              </Box>
              <Text color="brand.secondaryText">Check out these inspiring SMART goals from our community of change makers.</Text>
            </Flex>
            <Flex gap={2} flexWrap="wrap">
              {
                addedGoals.map(goal => <SmartGoalSuggestion
                  goal={goal}
                  saveGoal={saveGoal}
                />)
              }
            </Flex>
          </Stack> : null
        }
      </Stack>

      <Stack ref={parent}>
        <Text>As soon as I do the following, my journey will be finished.</Text>
        {
          goals && goals.length === 0 ? (
            <Stack>
              <Flex alignItems="center" gap={4}>
                <Box
                  bg="brand.highlight1"
                  p="2"
                  color="brand.secondary"
                  borderRadius="50%"
                >
                  <FiStar size="1rem" />
                </Box>
                <Text>Autogenerate goals using our awesome AI tool!</Text>
              </Flex>
            </Stack>
          ) : null
        }
        {goals && goals?.map((goal) => {
          return (
            <JourneyGoal goal={goal} key={goal.id} />
          )
        })}
      </Stack>


      <Flex width="200">
        {context.blueprint === "template" ? (
          <>
            <Text fontWeight="700">Template</Text>
            <JourneyBluePrint
              bluePrint={{
                id: "cl5o8pq8t0070fgbt5eqar9bs",
                userId: "cl5imusb0005800bt26o62b2m",
                type: "template",
                templateId: null,
                title: "Poet",
                description: "ain't nothing to it but to do it",
                field: null,
                expertise: null,
                price: null,
                creator: null,
                createdAt: null,
                updateAt: null,
                image:
                  "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg",
              }}
            />
          </>
        ) : null}

        {isError ? (
          <Text color="brand.danger">Something went wrong</Text>
        ) : null}
      </Flex>
      <Text>Show companions and other suggestions</Text>
      <Text>Show the different building blocks!</Text>
      <Flex gap={4} justifyContent="flex-end">
        {
          false ?         <Button
          onClick={handleNext}
          bg="brand.white"
          color="brand.primaryText"
          icon={<FiX />}
          disabled={
            context.currentStep.id === 1 || context.currentStep.id === 5
          }
        >
          Skip
        </Button> : null
        }
        <Button
          onClick={handleNext}
          icon={<FiArrowRight />}
          isLoading={isLoading}
        >
          Embark on a journey
        </Button>
      </Flex>
    </Stack>
  );
};
