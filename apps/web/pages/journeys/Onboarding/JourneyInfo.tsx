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
} from "@chakra-ui/react";
import { TextInput } from "ui/Input";
import Image from "next/image";
import { Button } from "ui";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import { client } from "../../../utils/client";
import { ListBluePrints } from "../components/ListBluePrints";
import {
  FiX,
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiClipboard,
  FiHeart,
} from "react-icons/fi";
import { RadioCard } from "ui";
import toast, { Toaster } from "react-hot-toast";
import { CustomCheckbox } from "ui";

export const SecondStepGuide = ({ guide }) => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Flex gap={8} height="100%">
      <Flex direction="column" gap={4}>
        <Heading color="brand.primary">
          {context.currentStep.id}/{context.steps.length} -{" "}
          {context.currentStep.title}
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
            height="180"
            width="180"
            alt="start journey"
            src={
              "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg"
            }
          />
          <Text color="brand.primary">
            Hi, my name is Ney and I'll be your guide in this journey
          </Text>
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
            <Text>Explore the different journey types</Text>
            <Flex alignItems="center" gap={2} color="brand.secondary">
              <FiBookOpen />
              <Heading size="sm">Academic</Heading>
            </Flex>
            <Text>
              Study, prepar for exams and organize your academic life.
            </Text>
            <Flex alignItems="center" gap={2} color="brand.secondary">
              <FiBriefcase />
              <Heading size="sm">Business</Heading>
            </Flex>
            <Text>Plan your business and manage your work.</Text>
            <Flex alignItems="center" gap={2} color="brand.secondary">
              <FiClipboard />
              <Heading size="sm">Career</Heading>
            </Flex>
            <Text>Career guidance and development.</Text>
            <Flex alignItems="center" gap={2} color="brand.secondary">
              <FiHeart />
              <Heading size="sm">Personal</Heading>
            </Flex>
            <Text>Improve your personal life.</Text>
          </Flex>
        )}
      </Flex>
    </Flex>
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
  // const [value, setValue] = React.useState([]);

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ["2"],
  });

  console.log(name);
  console.log(value);

  return (
    <VStack alignItems="flex-start">
      {options.map((value) => {
        console.log(value);
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
      <Text color="brand.primary">Type of journey</Text>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard
              key={value}
              {...radio}
              bg="brand.white"
              checked={{
                bg: "brand.primary",
                color: "brand.white",
              }}
              hover={{
                borderColor: "brand.highlight2",
              }}
              border="groove 0.10rem"
              borderColor="brand.primary"
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
          active: true
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

  const academicOptions = [
    "Earn a scholarship",
    "Exam Preparation",
    "Research",
    "Write thesis/ Paper",
    "publish",
  ];
  const businessOptions = [
    "Start a business",
    "Launch/ Promote Product",
    "Analyze Growth",
    "Investors/ Funding",
    "Partnership",
  ];
  const careerOptions = [
    "Get a Promotion",
    "Learn new skills",
    "land a new job",
    "netowrk",
    "other",
  ];
  const personalOptions = ["Lifestyle Change", "Diet", "other"];

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
      <Flex
        width="100%"
        direction="column"
        gap={4}
        bg="brand.highlight2"
        p="8"
        borderRadius="1rem"
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
            <Text color="brand.primary">
              Name your journey{" "}
              <Box as="span" color="brand.danger">
                *
              </Box>
            </Text>
            <TextInput
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
                <Text color="brand.primary">Your field</Text>
                <TextInput
                  placeholder="E.g Engineering, Medicine etc."
                  type="text"
                  onChange={onChange}
                  value={journey.field}
                  name="field"
                />
                <Text color="brand.primary">Academic level</Text>
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
                <Text color="brand.primary">What's your goal?</Text>
                <JourneyQuestions
                  options={academicOptions}
                  defaultValue="academic"
                  name="academic"
                />
              </>
            ) : null}
            {journey.journeyType === "business" ? (
              <>
                <Text color="brand.primary">Business type</Text>
                <TextInput
                  placeholder="E.g Tech, Education"
                  type="text"
                  onChange={onChange}
                  value={journey.field}
                  name="field"
                />
                <Text color="brand.primary">What's your goal?</Text>
                <JourneyQuestions
                  options={businessOptions}
                  defaultValue="business"
                  name="business"
                />
              </>
            ) : null}
            {journey.journeyType === "career" ? (
              <>
                <Text color="brand.primary">Field</Text>
                <TextInput
                  placeholder="E.g Engineering, Medicine etc."
                  type="text"
                  onChange={onChange}
                  value={journey.interest}
                  name="interest"
                />
                <Text color="brand.primary">Experience level</Text>
                <Select
                  placeholder="e.g undergrad or postgrade"
                  borderRadius="1rem"
                  name="background"
                >
                  <option value={journey.background}>No Experience</option>
                  <option value={journey.background}>Early Career</option>
                  <option value={journey.background}>Mid Level/ Senior</option>
                </Select>
                <Text color="brand.primary">What's your goal?</Text>

                <JourneyQuestions
                  options={careerOptions}
                  defaultValue="career"
                  name="career"
                />
              </>
            ) : null}
            {journey.journeyType === "personal" ? (
              <>
                <JourneyQuestions
                  options={personalOptions}
                  defaultValue="personal"
                  name="personal"
                />
              </>
            ) : null}
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
                Back
              </Button>
              <Button
                onClick={handleNext}
                icon={<FiArrowRight />}
                isLoading={isLoading}
              >
                Next
              </Button>
            </Flex>
          </Flex>
        )}
      </Flex>
      <Toaster position="bottom-center" />
    </VStack>
  );
};
