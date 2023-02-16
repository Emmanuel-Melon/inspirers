import React, { useContext, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
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
  LinkOverlay,
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
  FiArrowLeft,
} from "react-icons/fi";
import { JourneyBluePrint } from "../components/JourneyBluePrint";
import { client } from "../../../utils/client";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { RecommendedAccounts } from "./RecommendedAccounts";
import { useFetch } from "hooks/useSwr";
import { HiOutlineTemplate } from "react-icons/hi";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export const BackpackStepGuide = ({ guide }) => {
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
            <Stack gap={4} color="brand.primaryText" borderRadius="1rem">
              <Flex alignItems="center" gap={2} color="brand.secondaryText">
                <FiTarget />
                <Text>Specific: Well defined, clear, and unambiguous.</Text>
              </Flex>
              <Flex alignItems="center" gap={2} color="brand.secondaryText">
                <FiTrendingUp />
                <Text>Measurable: With specific criteria.</Text>
              </Flex>
              <Flex alignItems="center" gap={2} color="brand.secondaryText">
                <FiThumbsUp />
                <Text>
                  Attainable: Attainable and not impossible to achieve.
                </Text>
              </Flex>
              <Flex alignItems="center" gap={2} color="brand.secondaryText">
                <FiCheckCircle />
                <Text>
                  Realistic: Within reach, realistic, and relevant to your life
                  purpose.
                </Text>
              </Flex>
              <Flex alignItems="center" gap={2} color="brand.secondaryText">
                <FiClock />
                <Text>
                  Timely: With a clearly defined timeline, including a starting
                  date and a target date.
                </Text>
              </Flex>
            </Stack>
          </Card>
        )}
      </Flex>
    </Flex>
  );
};

export const CompanionsStep = () => {
  const context = useContext(JourneyOnboardingContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleNext = () => {
    // context.updateJourney({ createdFirstJourney: true });
    context.moveForward(context.currentStep.id + 1);
    if(context.currentStep.id === 6) {
      context.updateJourney({ createdFirstJourney: true });
    }
  };

  console.log(context);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => {
    client
    .put(`journeys/${journeyId}`, {
      ...data,
     // userId: session?.user?.id
    })
    .then(() => {
      // setGoalInfo({ ...goal, title: "" });
      context.moveForward(3);
    });
  }

  // update the user object and mark the createdFirstJourney field as true

  return (
    <Stack color="brand.primaryText">
      <Flex gap={4} alignItems="center">
        <IconButton
          size="sm"
          onClick={context.moveBackwards}
          label="go back to previous step"
        >
          <FiArrowLeft />
        </IconButton>
        <Heading color="brand.primaryText" size="md">
          {context.currentStep.title}
        </Heading>
      </Flex>

      <Heading size="sm">My Companions</Heading>
      <Text>
      Inspire others to reach their goals and invite them to join your tribe.
      </Text>
      <Flex gap={4} justifyContent="flex-end">
      <Button
            onClick={handleNext}
            bg="brand.white"
            color="brand.primaryText"
            icon={<FiX />}
          >
            Skip
          </Button>
        <Button
          onClick={handleNext}
          icon={<FiArrowRight />}
          isLoading={isLoading}
        >
          Next
        </Button>
      </Flex>
    </Stack>
  );
};
