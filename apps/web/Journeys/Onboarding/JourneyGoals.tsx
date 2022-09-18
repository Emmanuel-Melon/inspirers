import React, { useContext, useState } from "react";
import {
  Avatar,
  Flex,
  Heading,
  Text,
  VStack,
  Checkbox,
  Tag,
} from "@chakra-ui/react";
import { TextInput } from "ui/Input";
import { Button } from "ui";
import { JourneyOnboardingContext } from "../../providers/JourneyOnboardingProvider";
import {
  FiX,
  FiArrowRight,
  FiTarget,
  FiTrendingUp,
  FiThumbsUp,
  FiCheckCircle,
  FiClock,
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
        <Flex
          alignItems="center"
          bg="brand.white"
          borderRadius="0rem 1rem 1rem 0rem"
          borderLeft="solid 0.25rem"
          borderColor="brand.accent"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <Image
            height="150"
            width="150"
            alt="start journey"
            src={
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg"
            }
          />
          <Text color="brand.secondaryText">Let's talk about your goals.</Text>
        </Flex>
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

export const ThirdStep = ({ onChange }) => {
  const context = useContext(JourneyOnboardingContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const router = useRouter();

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
    <Flex
      gap={4}
      borderRadius="1rem"
      direction="column"
      width="100%"
      color="brand.primaryText"
    >
      <Flex direction="column" gap={4} borderRadius="1rem">
        <Heading size="md" color="brand.secondary">
          Set your goals
        </Heading>
        
      </Flex>

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
    </Flex>
  );
};
