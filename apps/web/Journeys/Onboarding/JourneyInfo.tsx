import React, { useContext, useCallback, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Select,
  VStack,
  useRadioGroup,
  HStack,
  useCheckboxGroup,
  Stack
} from "@chakra-ui/react";
import { Input } from "ui/Input";
import Image from "next/image";
import { Button, IconButton } from "ui";
import { JourneyOnboardingContext } from "../../providers/JourneyOnboardingProvider";
import { client } from "../../utils/client";
import { ListBluePrints } from "../components/ListBluePrints";
import {
  FiX,
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiClipboard,
  FiHeart,
  FiArrowLeft
} from "react-icons/fi";
import { Card, RadioCard } from "ui";
import toast, { Toaster } from "react-hot-toast";
import { CustomCheckbox } from "ui";

export const SecondStepGuide = ({ guide }) => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Stack gap={4}>
      {context.blueprint === "template" ? (
        <>
          <Heading size="md" color="brand.primaryText">
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
          <Stack
            gap={2}
            color="brand.primaryText"
            borderRadius="1rem"
            p="4"
          >
            <Text>Explore the different journey types</Text>
            <Stack>
              <Flex alignItems="center" gap={2} color="brand.secondary">
                <FiBookOpen />
                <Heading size="sm">Academic</Heading>
              </Flex>
              <Text color="brand.secondaryText">
                Study, prepar for exams and organize your academic life.
              </Text>
            </Stack>
            <Stack>
              <Flex alignItems="center" gap={2} color="brand.secondary">
                <FiBriefcase />
                <Heading size="sm">Business</Heading>
              </Flex>
              <Text color="brand.secondaryText">Plan your business and manage your work.</Text>
            </Stack>
            <Stack>
              <Flex alignItems="center" gap={2} color="brand.secondary">
                <FiClipboard />
                <Heading size="sm">Career</Heading>
              </Flex>
              <Text color="brand.secondaryText">Career guidance and development.</Text>
            </Stack>
            <Stack>
              <Flex alignItems="center" gap={2} color="brand.secondary">
                <FiHeart />
                <Heading size="sm">Personal</Heading>
              </Flex>
              <Text color="brand.secondaryText">Improve your personal life.</Text>
            </Stack>
          </Stack>
        </Card>
      )}
    </Stack>
  );
};

type JourneyQuestionsProps = {
  options: any;
  defaultValue: any;
  name: any;
};

const JourneyQuestions = ({
  options,
  defaultValue,
  name,
}: JourneyQuestionsProps) => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ["2"],
  });

  return (
    <VStack alignItems="flex-start">
      {options.map((value) => {
        return (
          <CustomCheckbox
            key={value}
            size="lg"
            colorScheme="orange"
            _hover={{
              color: "brand.secondary",
            }}
            text={value}
            value={value}
          />
        );
      })}
    </VStack>
  );
};

const JourneyTypeSelector = ({ defaultValue, options, updateJourneyType }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "journey",
    defaultValue,
    onChange: (nextValue) => updateJourneyType(nextValue),
  });

  const group = getRootProps();
  return (
    <>
      <Text color="brand.secondaryText">Type of journey</Text>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard
              key={value}
              {...radio}
              bg="brand.white"
              checked={{
                bg: "brand.primaryText",
                color: "brand.white",
              }}
              hover={{
                borderColor: "brand.highlight2",
              }}
              border="groove 0.10rem"
              borderColor="brand.primaryText"
              name="journeyType"
            >
              {value}
            </RadioCard>
          );
        })}
      </HStack>
    </>
  );
};

export const SecondStep = ({ user }) => {
  const context = useContext(JourneyOnboardingContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const errorToast = (message: string) => toast.error(message);
  const successToast = (message: string) => toast.success(message);

  const [journey, setJourneyInfo] = useState({
    title: "",
    blueprint: context.blueprint,
    field: "",
    journeyType: "academic",
  });

  const handleNext = () => {
    if (context.journey.title === "") {
      setLoading(true);
      client
        .post("/journeys", {
          blueprint: context.blueprint,
          title: journey.title,
          userId: user.id,
          journeyType: journey.journeyType,
          active: true,
        })
        .then((res) => {
          setLoading(false);
          successToast("Created journey");
          context.updateJourney(res.data.data);
          context.moveForward(context.currentStep.id + 1, res.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
          errorToast("something went wrong, try again later");
        });
    } else {
      context.moveForward(context.currentStep.id + 1, {});
    }
  };

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJourneyInfo((currentState) => {
      return {
        ...currentState,
        [name]: value,
      };
    });
  }, []);

  const options = ["academic", "business", "career", "personal"];

  const updateJourneyType = (value) => {
    setJourneyInfo((currentState) => {
      return {
        ...currentState,
        journeyType: value,
      };
    });
  };

  return (
    <VStack width="100%" alignItems="flex-start">
      <Flex alignItems="center" gap={4}>
        <IconButton size="sm" onClick={context.moveBackwards} label="Go to previous step">
          <FiArrowLeft />
        </IconButton>
        <Heading color="brand.primaryText" size="md">
          {context.currentStep.title}
        </Heading>
      </Flex>
      <Text>{context.currentStep.description}</Text>
      <Flex
        width="100%"
        direction="column"
        gap={4}

      >
        {context.blueprint === "template" ? (
          <Flex gap={2}>
            <ListBluePrints />
          </Flex>
        ) : (
          <Flex
            direction="column"
            gap={4}
            borderRadius="1rem"
            color="brand.primaryText"
          >
            <Text color="brand.secondaryText">
              Name your journey{" "}
              <Box as="span" color="brand.danger">
                *
              </Box>
            </Text>
            <Input
              placeholder="e.g Getting into Harvard"
              type="text"
              onChange={onChange}
              value={journey.title}
              name="title"
            />
            <JourneyTypeSelector
              defaultValue={journey.journeyType}
              options={options}
              updateJourneyType={updateJourneyType}
            />

            {journey.journeyType === "academic" ? (
              <>
                <Text color="brand.secondaryText">Your field</Text>
                <Input
                  placeholder="E.g Engineering, Medicine etc."
                  type="text"
                  onChange={onChange}
                  value={journey.field}
                  name="field"
                />
                <Text color="brand.secondaryText">Academic level</Text>
                <Select
                  placeholder="e.g undergraduate or postgrade"
                  borderRadius="1rem"
                  name="background"
                >
                  <option value={journey.background}>High School</option>
                  <option value={journey.background}>Undergraduate</option>
                  <option value={journey.background}>Postgraduate</option>
                  <option value={journey.background}>Other</option>
                </Select>
              </>
            ) : null}
            {journey.journeyType === "business" ? (
              <>
                <Text color="brand.primaryText">Business type</Text>
                <Input
                  placeholder="E.g Tech, Education"
                  type="text"
                  onChange={onChange}
                  value={journey.field}
                  name="field"
                />
              </>
            ) : null}
            {journey.journeyType === "career" ? (
              <>
                <Text color="brand.primaryText">Field</Text>
                <Input
                  placeholder="E.g Engineering, Medicine etc."
                  type="text"
                  onChange={onChange}
                  value={journey.interest}
                  name="interest"
                />
                <Text color="brand.primaryText">Experience level</Text>
                <Select
                  placeholder="e.g undergrad or postgrade"
                  borderRadius="1rem"
                  name="background"
                >
                  <option value={journey.background}>No Experience</option>
                  <option value={journey.background}>Early Career</option>
                  <option value={journey.background}>Mid Level/ Senior</option>
                </Select>
              </>
            ) : null}
            <Flex gap={4} justifyContent="flex-end">
              {
                false ? <Button
                  onClick={context.moveBackwards}
                  bg="brand.white"
                  color="brand.primaryText"
                  icon={<FiX />}
                  disabled={
                    context.currentStep.id === 1 || context.currentStep.id === 5
                  }
                >
                  Back
                </Button> : null
              }
              <Button
                onClick={handleNext}
                icon={<FiArrowRight />}
                isLoading={isLoading}
              >
                Continue
              </Button>
            </Flex>
          </Flex>
        )}
      </Flex>
      <Toaster position="bottom-center" />
    </VStack>
  );
};
