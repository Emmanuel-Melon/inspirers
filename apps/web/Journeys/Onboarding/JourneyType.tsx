import React, { useContext } from "react";
import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { BluePrintSelector } from "./BluePrintSelector";
import { JourneyOnboardingContext } from "../../providers/JourneyOnboardingProvider";
import { Button } from "ui";
import { FiInfo, FiX, FiArrowRight } from "react-icons/fi";

export const FirstStep = () => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Flex width="100%" gap={8} color="brand.primaryText">
      <VStack width="100%" gap={4} alignItems="flex-start">
        <Flex direction="column" borderRadius="1rem" gap={4}>
          <BluePrintSelector
            currentStep={context.currentStep}
            updateBluePrint={context.updateBluePrint}
          />
          <Flex gap={4}>
            <Button
              onClick={context.moveBackwards}
              bg="brand.white"
              color="brand.primaryText"
              icon={<FiX />}
              disabled={
                context.currentStep.id === 1 || context.currentStep.id === 5
              }
            >
              Go Back
            </Button>
            <Button
              onClick={() => context.moveForward(context.currentStep.id + 1)}
              icon={<FiArrowRight />}
            >
              Continue
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};

export const FirstStepGuide = ({ guide, blueprint }) => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Flex direction="column" width="100%" height="100%">
      <Flex direction="column" gap={4}>
        <Heading color="brand.primaryText">
          {context.currentStep.id} - {context.currentStep.title}
        </Heading>
        <Text color="brand.secondaryText">
          Plan your own personal and professional development. Easily track your
          progress towards long-term goals.
        </Text>
        <Flex
          alignItems="center"
        >
          <Image
            height="180"
            width="180"
            alt="start journey"
            src={
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg"
            }
          />
          <Text color="brand.secondaryText">{guide?.mimi?.greeting}</Text>
        </Flex>
        <Heading size="md" color="brand.secondary">
          What is a journey?
        </Heading>
        <Text>{context.currentStep.description}</Text>
        <Heading size="sm" color="brand.secondary">
          Using a template
        </Heading>
        <Text>
          Immerse yourself in the world of resources and transformation built by
          the community.
        </Text>
        <Heading size="sm" color="brand.secondary">
          Blank journey
        </Heading>
        <Text>
          Create your own systems to continue to build momentum and stay focused
          on the things that matter most.
        </Text>
      </Flex>
    </Flex>
  );
};
