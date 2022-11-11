import React, { useContext } from "react";
import { Divider, Flex, Text, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { BluePrintSelector } from "./BluePrintSelector";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import { Button, Card } from "ui";
import { FiInfo, FiX, FiArrowRight } from "react-icons/fi";

export const FirstStep = () => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Flex width="100%" gap={8} color="brand.primaryText">
      <Stack width="100%" gap={4} alignItems="flex-start">
        <Heading color="brand.primaryText">
          {context.currentStep.title}
        </Heading>
        <Text color="brand.secondaryText">
          Inspirers works in a way that lets you create your goal, add tasks and their reminders, connect with people with similar journeys, add the resources (books, videos, or courses) in your backpack that you carry on your journey, and lastly, you can track and analyze your performance periodically.
        </Text>
        <Flex direction="column" borderRadius="1rem" gap={4}>
          <BluePrintSelector
            currentStep={context.currentStep}
            onBluePrintChange={context.onBluePrintChange}
          />
          <Flex gap={4} justifyContent="flex-end">
            <Button
              onClick={() => context.moveForward(context.currentStep.id + 1)}
              icon={<FiArrowRight />}
            >
              Continue
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};

// use as inspiration for designing the guide: https://dribbble.com/shots/5765098-Nabis-OnBoarding-Flow
// center everything like this? https://dribbble.com/shots/15825034-Onboarding
// this would work for the user onboarding
// maybe routines and backpacks too
export const FirstStepGuide = ({ guide, blueprint }) => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Stack>
      <Card bg="brand.highlight1">
        <Stack>
          <Stack>
            <Image
              height="120"
              width="120"
              alt="start journey"
              src={
                "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg"
              }
            />
            <Text color="brand.secondaryText">{guide?.mimi?.greeting}</Text>
          </Stack>
          <Stack gap={2}>
            <Stack>
              <Heading size="sm" color="brand.secondary">
                Using a template
              </Heading>
              <Text>
                Immerse yourself in the world of resources and transformation built by
                the community.
              </Text>
            </Stack>
            <Divider />
            <Stack>
              <Heading size="sm" color="brand.secondary">
                Blank journey
              </Heading>
              <Text>
                Create your own systems to continue to build momentum and stay focused
                on the things that matter most.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
