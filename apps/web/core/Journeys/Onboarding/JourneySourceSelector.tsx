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
import { FiCopy, FiEdit3 } from "react-icons/fi";

type SelectorCardProps = {
  description?: string;
  value?: string;
};

const SelectorCard: FC<SelectorCardProps> = ({ description, value }) => {
  return (
    <Stack bg="brand.white" p="4" borderRadius="1rem">
      <Box
        bg="brand.accent"
        p="4"
        borderRadius="1rem"
        color="brand.white"
        width="fit-content"
      >
        {value === "Create from Scratch" ? <FiEdit3 /> : <FiCopy />}
      </Box>
      <Stack>
        <Text>
          {value}{" "}
          {value === "Template" ? (
            <Box
              as="span"
              bg="brand.highlight1"
              boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              color="brand.accent"
              py="1"
              px="2"
              borderRadius="0.5rem"
              fontSize="0.8rem"
            >
              Recommended
            </Box>
          ) : null}
        </Text>
        <Text color="brand.secondaryText">{description}</Text>
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
  const [bluePrint, setBluePrint] = useState<string>("blank");

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
      value: "Create from Scratch",
      description: "Perfect for the seasoned pros who know exactly what they want.",
    },
    {
      id: 2,
      value: "Template",
      description: "Discover pre-made journeys designed by experts in various fields",
    },
  ];

  return (
    <Flex gap={4} direction="column">
      <Text>
      Before we get started, let's choose the best way for you to begin. You can either start a journey from scratch or clone a journey from a real-life expert that fits your goals and aspirations. 
      </Text>

      <Text color="brand.secondaryText">Select your option below and let's go on this journey together!</Text>
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
            
                  checked={{
                    border: "solid 0.15rem",
                    bg: "brand.accent",
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
        <Stack width="100%" gap={2} alignItems="flex-start">
          <Heading  color="brand.accent" size="md" >
            {context.currentStep.title}
          </Heading>
          <Flex direction="column" borderRadius="1rem">
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
