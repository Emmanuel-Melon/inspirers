import {
  Flex,
  Heading,
  Text,
  RadioGroup,
  Stack,
  useRadioGroup,
} from "@chakra-ui/react";
import { RadioCard } from "ui/RadioCard";
import { useState } from "react";
import { FiCopy, FiPlus } from "react-icons/fi";

type BluePrintSelectorProps = {};

type SelectorCardProps = {
  description: string;
  value: string;
};

const SelectorCard = ({ description, value }: SelectorCardProps) => {
  return (
    <Flex borderRadius="1rem" justifyContent="center" alignItems="center">
      <Flex gap={4} direction="column" p="4" alignItems="center">
        <Flex gap={4} direction="column" alignItems="center">
          {value !== "blank" ? (
            <FiCopy size="2.5rem" />
          ) : (
            <FiPlus size="2.5rem" />
          )}
          <Text fontWeight="700" color="brand.secondary">
            {value}
          </Text>
          <Text textAlign="center">{description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const BluePrintSelector = ({
  updateBluePrint,
  currentStep,
}: BluePrintSelectorProps) => {
  const [bluePrint, setBluePrint] = useState<string>("template");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "blueprint",
    defaultValue: bluePrint,
    onChange: (nextValue) => {
      updateBluePrint(nextValue);
    },
  });

  const group = getRootProps();

  const options = [
    {
      id: 1,
      value: "blank",
      description: "Customize your entire experience",
    },
    {
      id: 2,
      value: "template",
      description: "Explore a wide variety of templates",
    },
  ];

  return (
    <Flex gap={4} direction="column">
      <Heading size="md" color="brand.primaryText">
        Start a new journey
      </Heading>
      <Text color="brand.primaryText">
        We'll streamline your setup experience accordingly.
      </Text>
      <Flex gap={4} color="brand.primaryText">
        <RadioGroup>
          <Stack direction="row" {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ ...value });
              return (
                <RadioCard
                  key={value.value}
                  {...radio}
                  checked={{
                    borderColor: "brand.highlight1",
                    borderRadius: "1rem",
                  }}
                  hover={{
                    borderColor: "brand.highlight",
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
