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
} from "@chakra-ui/react";
import { Button, Card, IconButton, Input } from "ui";
import { JourneyOnboardingContext } from "../../providers/JourneyOnboardingProvider";
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
  FiMoreHorizontal
} from "react-icons/fi";
import { JourneyBluePrint } from "../components/JourneyBluePrint";
import { client } from "../../utils/client";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { RecommendedAccounts } from "./RecommendedAccounts";

export const ThirdStepGuide = ({ guide }) => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Flex height="100%">
      <Flex direction="column" gap={4}>
        <Heading color="brand.primaryText" size="md">
          {context.currentStep.id} - {context.currentStep.title}
        </Heading>
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
          <Flex
            direction="column"
            gap={4}
            color="brand.primaryText"
            borderRadius="1rem"
          >
                      <Image
            height="200"
            width="200"
            alt="start journey"
            src={
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg"
            }
          />
            <Flex alignItems="center" gap={2} color="brand.secondary">
              <FiTarget />
              <Heading size="sm">Specific</Heading>
            </Flex>
            <Text>Well defined, clear, and unambiguous.</Text>
            <Flex alignItems="center" gap={2} color="brand.secondary">
              <FiTrendingUp />
              <Heading size="sm">Measurable</Heading>
            </Flex>
            <Text>
              With specific criteria that measure your progress toward the
              accomplishment of the goal.
            </Text>
            <Flex alignItems="center" gap={2} color="brand.secondary">
              <FiThumbsUp />
              <Heading size="sm">Attainable</Heading>
            </Flex>
            <Text>Attainable and not impossible to achieve.</Text>
            <Flex alignItems="center" gap={2} color="brand.secondary">
              <FiCheckCircle />
              <Heading size="sm">Realistic</Heading>
            </Flex>
            <Text>
              Within reach, realistic, and relevant to your life purpose.
            </Text>
            <Flex alignItems="center" gap={2} color="brand.secondary">
              <FiClock />
              <Heading size="sm">Timely</Heading>
            </Flex>
            <Text>
              With a clearly defined timeline, including a starting date and a
              target date. The purpose is to create urgency.
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

const goals = [
  {
    id: 1,
    title: "Build 5 front end applications",
  },
  {
    id: 2,
    title: "Write 1000 words this month."
  }
];

// add this somewhere when looking for companions: Inspire others to reach their goals and invite them to join your tribe.
const SmartGoalSuggestion = ({ goal }) => {
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
    <Card>
      <Flex justifyContent="space-between">
        <Flex gap={4} alignItems="center">
          <Box
            bg="brand.highlight3"
            p="4"
            color="brand.accent"
            borderRadius="50%"
          >
            <FiFlag />
          </Box>
          <Stack>
            <Heading size="xs">{goal.title}</Heading>
            <Tag width="fit-content" bg="brand.highlight1">
              <TagLeftIcon as={FiClock} />
              <TagLabel>{goal.eta}</TagLabel>
            </Tag>
          </Stack>
        </Flex>
        <Flex gap={2}>
          <IconButton>
            <FiMoreHorizontal />
          </IconButton>
          {
            false ? <Button size="sm" bg="brand.white" icon={<FiBookOpen />}>Reflect</Button> : null
          }
        </Flex>
      </Flex>
    </Card>
  )
}

const currentGoals = [
  {
    id: 1,
    title: "Build 5 front end applications",
    eta: "1 month",
  },
  {
    id: 4,
    title: "Learn how to play 15 guitar solos",
    eta: "1 month",
  }
]

export const ThirdStep = ({ onChange }) => {
  const context = useContext(JourneyOnboardingContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const router = useRouter();
  const [addedGoals, setAddedGoals] = useState(currentGoals);
  const [parent] = useAutoAnimate(/* optional config */)

  const [journey, setJourneyInfo] = useState({
    title: "",
    career: "",
    interest: "",
    blueprint: "",
    description: "ain't nothing",
    background: "",
  });

  const handleNext = () => {
    router.push(`/journeys/${context.journey.id}`);
  };
  return (
    <Stack gap={4} color="brand.primaryText">
      <Flex direction="column" gap={4} borderRadius="1rem">
        <Stack>
          <Heading size="md">
            Launching Inspirers
          </Heading>
          <Text>As soon as I do the following, my journey will be finished.</Text>
          <Progress
            value={10}
            hasStripe
            size="sm"
            colorScheme="green"
            borderRadius="1rem"
          />
        </Stack>
      </Flex>
      <Stack>
        <FormControl>
          <FormLabel color="brand.secondaryText">S.M.A.R.T Goal</FormLabel>
          <Input
            onChange={() => { }}
            placeholder="Write 1000 words this month."
            type="password"
            value={""}
            name="password"
          />
        </FormControl>
      </Stack>
      <Stack ref={parent}>
        {addedGoals.map((goal) => {
          return (
            <JourneyGoal goal={goal} key={goal.id} />
          )
        })}
      </Stack>
      <Stack gap={4}>
        <Flex alignItems="center">
          <Image
            height="150"
            width="150"
            alt="start journey"
            src={
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg"
            }
          />
          <Text>Check out these inspiring SMART goals from our community of change makers.</Text>
        </Flex>
        <Flex gap={4} flexWrap="wrap">
          {
            goals.map(goal => <SmartGoalSuggestion goal={goal} />)
          }
        </Flex>
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
      <Flex gap={4}>
        <Button
          onClick={handleNext}
          bg="brand.white"
          color="brand.primaryText"
          icon={<FiX />}
          disabled={
            context.currentStep.id === 1 || context.currentStep.id === 5
          }
        >
          Skip
        </Button>
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
