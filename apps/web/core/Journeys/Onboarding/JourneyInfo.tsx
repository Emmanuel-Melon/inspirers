import React, { FC, useContext, useCallback, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
  Stack,
  Grid,
  GridItem,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Textarea,
} from "@chakra-ui/react";
import { Button, IconButton, Input } from "ui";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import { client } from "../../../utils/client";
import { ListBluePrints } from "../components/ListBluePrints";
import {
  FiX,
  FiArrowRight,
  FiTarget,
  FiTrendingUp,
  FiThumbsUp,
  FiCheckCircle,
  FiClock,
  FiFlag,
  FiBookOpen,
  FiMoreHorizontal,
  FiStar,
  FiPlus,
  FiArrowLeft,
  FiSliders,
} from "react-icons/fi";
import { Card, RadioCard } from "ui";
import toast, { Toaster } from "react-hot-toast";
import { CustomCheckbox } from "ui";
import {
  RiEmpathizeLine,
  RiStore3Line,
  RiBriefcase2Line,
} from "react-icons/ri";

type JourneyInfoInput = {
  title: string;
  description?: string;
};

const currentGoals = [
  {
    id: 1,
    title: "Build 5 front end applications",
    eta: "1 month",
    userId: "cl8bry9660006rlbt2n2ki24f",
  },
  {
    id: 4,
    title: "Learn how to play 15 guitar solos",
    eta: "1 month",
    userId: "cl8bry9660006rlbt2n2ki24f",
  },
];

const SmartGoalSuggestion = ({ saveGoal, goal }) => {
  return (
    <Flex
      gap={2}
      bg="brand.white"
      py="2"
      px="4"
      borderRadius="1.5rem"
      alignItems="center"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      _hover={{
        bg: "brand.highlight2",
      }}
      cursor="pointer"
      onClick={() => saveGoal({ title: goal.title, userId: goal.userId })}
    >
      <Box bg="brand.highlight3" p="2" color="brand.accent" borderRadius="50%">
        <FiFlag />
      </Box>
      <Text>{goal.title}</Text>
    </Flex>
  );
};

const JourneyInfoForm = () => {
  const context = useContext(JourneyOnboardingContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const errorToast = (message: string) => toast.error(message);
  const successToast = (message: string) => toast.success(message);

  const defaultFormValues = () => {
    return {
      title: "",
      description: "",
    };
  };

  const createJourneyForm = useForm({
    defaultValues: defaultFormValues(),
    // resolver: zodResolver(schema),
  });


  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = createJourneyForm;

  const onSubmit: SubmitHandler<JourneyInfoInput> = (data) => {
    client
      .post(`journeys`, {
        ...data,
      })
      .then(({ data: { journey } }) => {
        // setGoalInfo({ ...goal, title: "" });
        console.log(journey);
        context.updateJourney(journey);
        // don't move unless you got approval from the previous step!
        context.moveForward(context.currentStep.id + 1);
      })
      .catch((err) => {
        // alert("err");
        console.log(err);
      });
  };

  const [isFocused, setFocused] = useState(false);

  if (context.blueprint === "template") {
    return <ListBluePrints />;
  }

  const saveGoal = (goal) => {
    client
      .post(`journeys/${context.journey.id}/goals`, {
        ...goal,
      })
      .then(() => {
        // setGoalInfo({ ...goal, title: "" });
      });
  };

  // disable next button if no goals are added
  // disable auto suggestions if max goal count is reached
  // maintain fixed height for the goal container
  // separate the suggestions from the added goals
  // maybve a divider between the two
  // or a container witgha  different bg color

  return (
    <Grid gap={4} borderRadius="1rem" color="brand.primaryText" width="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={4}>
          <Heading size="sm">Basic Info</Heading>
          <FormControl>
            <FormLabel color="brand.secondaryText" htmlFor="title">
              Name your journey{" "}
              <Box as="span" color="brand.danger">
                *
              </Box>
            </FormLabel>

            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="e.g Getting into Harvard"
                  type="text"
                  autoFocus={true}
                  id="title"
                  {...field}
                />
              )}
            />
            {errors.title && <p>Hello</p>}
          </FormControl>
          <FormControl>
            <Flex gap={2} alignItems="center">
              <FormLabel color="brand.secondaryText" htmlFor="title">
                Description
              </FormLabel>
            </Flex>

            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Textarea
                  placeholder="Describe your journey"
                  bg="brand.grey"
                  id="description"
                  _placeholder={{ color: "brand.secondaryText" }}
                  {...field}
                />
              )}
            />
            {errors.title && <p>Hello</p>}
          </FormControl>

          {false ? (
            <Stack borderRadius="1rem">
              <Heading size="sm">My Goals</Heading>
              <Text color="brand.secondaryText">
                Start by defining your long-term goal and breaking it down into
                smaller, achievable steps.
              </Text>
              <FormControl>
                <FormLabel color="brand.secondaryText" htmlFor="title">
                  Add a goal{" "}
                  <Box as="span" color="brand.danger">
                    *
                  </Box>
                </FormLabel>

                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="e.g Reaching a 100 users"
                      type="text"
                      autoFocus={true}
                      id="title"
                      {...field}
                    />
                  )}
                />
                {errors.title && <p>Hello</p>}
              </FormControl>
              {isFocused ? (
                <Stack gap={4}>
                  <Flex alignItems="center" gap={4}>
                    <Box
                      bg="brand.highlight1"
                      p="2"
                      color="brand.secondary"
                      borderRadius="50%"
                    >
                      <FiStar size="1rem" />
                    </Box>
                    <Text color="brand.secondaryText">
                      Check out these inspiring SMART goals from our community
                      of change makers.
                    </Text>
                  </Flex>
                  <Flex gap={2} flexWrap="wrap">
                    {currentGoals.map((goal) => (
                      <SmartGoalSuggestion goal={goal} saveGoal={saveGoal} />
                    ))}
                  </Flex>
                </Stack>
              ) : null}
            </Stack>
          ) : null}

          <Flex gap={4} justifyContent="flex-end">
            {false ? (
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
            ) : null}
            <Button
              type="submit"
              icon={<FiArrowRight />}
              isLoading={isLoading}
            >
              Continue
            </Button>
          </Flex>
        </Stack>
      </form>
    </Grid>
  );
};

export const JourneyInfo = () => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Stack width="100%" alignItems="flex-start">
      <Flex alignItems="center" gap={4} width="100%">
        <IconButton
          size="sm"
          onClick={context.moveBackwards}
          label="Go to previous step"
        >
          <FiArrowLeft />
        </IconButton>
        <Heading color="brand.primaryText" size="md">
          {context.currentStep.title}
        </Heading>
      </Flex>
      <Text>{context.currentStep.description}</Text>
      <JourneyInfoForm />
      <Toaster position="bottom-center" />
    </Stack>
  );
};

export const JourneyInfoGuide = ({ guide }) => {
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
          <Stack gap={4} color="brand.primaryText" borderRadius="1rem" p="4">
            <Heading size="md">Explore the different journey types</Heading>
            <Stack>
              <Flex alignItems="center" gap={2}>
                <Box color="brand.secondaryText">
                  <FiBookOpen size="1rem" />
                </Box>
                <Heading size="sm">Academic</Heading>
              </Flex>
              <Text color="brand.secondaryText">
                Study, prepar for exams and organize your academic life.
              </Text>
            </Stack>
            <Stack>
              <Flex alignItems="center" gap={2} color="brand.primaryText">
                <Box color="brand.secondaryText">
                  <RiStore3Line size="1rem" />
                </Box>
                <Heading size="sm">Business</Heading>
              </Flex>
              <Text color="brand.secondaryText">
                Plan your business and manage your work.
              </Text>
            </Stack>
            <Stack>
              <Flex alignItems="center" gap={2} color="brand.primaryText">
                <Box color="brand.secondaryText">
                  <RiBriefcase2Line size="1rem" />
                </Box>
                <Heading size="sm">Career</Heading>
              </Flex>
              <Text color="brand.secondaryText">
                Career guidance and development.
              </Text>
            </Stack>
            <Stack>
              <Flex alignItems="center" gap={2} color="brand.primaryText">
                <Box color="brand.secondaryText">
                  <RiEmpathizeLine size="1rem" />
                </Box>
                <Heading size="sm">Personal</Heading>
              </Flex>
              <Text color="brand.secondaryText">
                Improve your personal life.
              </Text>
            </Stack>
          </Stack>
        </Card>
      )}
    </Stack>
  );
};

/**
 *       <Stack ref={parent}>
        <Text>As soon as I do the following, my journey will be finished.</Text>
        {
          goals && goals.length === 0 ? (
            <Stack>
              <Flex alignItems="center" gap={4}>
                <Box
                  bg="brand.highlight1"
                  p="2"
                  color="brand.secondary"
                  borderRadius="50%"
                >
                  <FiStar size="1rem" />
                </Box>
                <Text>Autogenerate goals using our awesome AI tool!</Text>
              </Flex>
            </Stack>
          ) : null
        }
        {goals && goals?.map((goal) => {
          return (
            <JourneyGoal goal={goal} key={goal.id} />
          )
        })}
      </Stack>
 */
