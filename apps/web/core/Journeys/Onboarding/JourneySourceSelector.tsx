import React, { useContext } from "react";
import { Box, Divider, Flex, Text, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { BluePrintSelector } from "./BluePrintSelector";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import { Button, Card } from "ui";
import { FiArrowRight } from "react-icons/fi";
import { useForm } from "react-hook-form";

export const JourneySourceSelector = () => {
  const context = useContext(JourneyOnboardingContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      blueprint: "Blank",
    },
    reValidateMode: "onChange",
  });
  return (
    <form>
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
      </form>
  );
};


export const JourneySourceSelectorGuide = ({ guide, blueprint }) => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Stack>
      <Card bg="brand.white">
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
            <Stack gap={2}>
              <Heading size="sm" color="brand.primaryText">
                Using a template
              </Heading>
              <Text>
                Immerse yourself in the world of resources and transformation built by
                the community.
              </Text>
            </Stack>
            <Divider />
            <Stack gap={2}>
              <Heading size="sm" color="brand.primaryText">
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
