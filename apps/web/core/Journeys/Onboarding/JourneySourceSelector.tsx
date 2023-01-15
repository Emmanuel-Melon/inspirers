import React, { FC, useContext, useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Text,
  Heading,
  Stack,
  RadioGroup,
  useRadioGroup,
} from "@chakra-ui/react";
import Image from "next/image";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import { Button, Card } from "ui";
import { FiArrowRight } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { RadioCard } from "ui";
import { FiCopy, FiMap } from "react-icons/fi";

type SelectorCardProps = {
  description?: string;
  value?: string;
};

const SelectorCard: FC<SelectorCardProps> = ({ description, value }) => {
  return (
    <Stack bg="brand.white" p="4" borderRadius="1rem">
      <Box
        bg="brand.highlight1"
        p="4"
        borderRadius="1rem"
        color="brand.secondaryText"
        width="fit-content"
      >
        {value === "Blank" ? <FiMap /> : <FiCopy />}
      </Box>
      <Stack>
        <Text fontWeight="700">
          {value}{" "}
          {value === "Blank" ? (
            <Box
              as="span"
              bg="brand.grey"
              color="brand.secondaryText"
              py="1"
              px="2"
              borderRadius="0.5rem"
              fontSize="0.8rem"
            >
              Recommended
            </Box>
          ) : null}
        </Text>
        <Text>{description}</Text>
      </Stack>
    </Stack>
  );
};

export type BluePrintSelectorProps = {
  onBluePrintChange: (value: string) => void;
  currentStep: number;
};

export const BluePrintSelector: FC<BluePrintSelectorProps> = ({
  onBluePrintChange,
  currentStep,
}) => {
  const [bluePrint, setBluePrint] = useState<string>("template");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "blueprint",
    defaultValue: bluePrint,
    onChange: (nextValue) => {
      onBluePrintChange(nextValue);
    },
  });

  const group = getRootProps();

  const options = [
    {
      id: 1,
      value: "Blank",
      description: "Customize your entire experience",
    },
    {
      id: 2,
      value: "Template",
      description: "Explore a wide variety of templates",
    },
  ];

  return (
    <Flex gap={4} direction="column">
      <Heading size="md" color="brand.primaryText">
        Start a new journey
      </Heading>
      <Text color="brand.secondaryText">
        We will streamline your setup experience accordingly.
      </Text>
      <Flex gap={2} color="brand.primaryText">
        <RadioGroup>
          <Stack direction="row" {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ ...value });
              return (
                <RadioCard
                  key={value.value}
                  {...radio}
                  border="solid 0.15rem"
                  borderColor="brand.white"
                  checked={{
                    border: "solid 0.15rem",
                    borderColor: "brand.accent",
                  }}
                  hover={{
                    border: "solid 0.15rem",
                    borderColor: "brand.secondary",
                  }}
                >
                  <SelectorCard {...radio} />
                </RadioCard>
              );
            })}
          </Stack>
        </RadioGroup>
      </Flex>
    </Flex>
  );
};

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

  const onSubmit = data => context.moveForward(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex width="100%" gap={8} color="brand.primaryText">
        <Stack width="100%" gap={4} alignItems="flex-start">
          <Heading color="brand.primaryText">
            {context.currentStep.title}
          </Heading>
          <Text color="brand.secondaryText">
            Inspirers works in a way that lets you create your goal, add tasks
            and their reminders, connect with people with similar journeys, add
            the resources (books, videos, or courses) in your backpack that you
            carry on your journey, and lastly, you can track and analyze your
            performance periodically.
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
        <Stack gap={2}>
          <Stack gap={2}>
            <Heading size="sm" color="brand.primaryText">
              Using a template
            </Heading>
            <Text>
              Immerse yourself in the world of resources and transformation
              built by the community.
            </Text>
          </Stack>
          <Divider />
          <Stack gap={2}>
            <Heading size="sm" color="brand.primaryText">
              Blank journey
            </Heading>
            <Text>
              Create your own systems to continue to build momentum and stay
              focused on the things that matter most.
            </Text>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
