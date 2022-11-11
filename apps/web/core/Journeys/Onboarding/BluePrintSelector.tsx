import React, { FC } from "react";
import {
  Flex,
  Heading,
  Text,
  RadioGroup,
  Stack,
  useRadioGroup,
  Box
} from "@chakra-ui/react";
import { RadioCard } from "ui/RadioCard";
import { useState } from "react";
import { FiCopy, FiMap } from "react-icons/fi";



type SelectorCardProps = {
  description?: string;
  value?: string;
};

const SelectorCard: FC<SelectorCardProps> = ({ description, value }) => {
  return (
    <Flex gap={4} alignItems="center">
      <Box
        bg="brand.highlight1"
        p="4"
        borderRadius="1rem"
        color="brand.secondaryText"
      >
        {value === "Blank" ? <FiMap /> : <FiCopy />}
      </Box>
      <Stack>
        <Text fontWeight="700">
          {value} {
            value === "Blank" ? <Box
              as="span"
              bg="brand.grey"
              color="brand.secondaryText"
              py="1"
              px="2"
              borderRadius="0.5rem"
              fontSize="0.8rem"
            >
              Recommended
            </Box> : null
          }
        </Text>
        <Text textAlign="center">{description}</Text>
      </Stack>
    </Flex>
  );
};

export type BluePrintSelectorProps = {
  onBluePrintChange: (value: string) => void; // rename to onBluePrintChange? 
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
        We'll streamline your setup experience accordingly.
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
                  
                  checked={{
                    borderColor: "brand.primary",
                    borderRadius: "1rem",
                  }}
                  hover={{
                    borderColor: "brand.secondary",
                    borderRadius: "1rem",
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
