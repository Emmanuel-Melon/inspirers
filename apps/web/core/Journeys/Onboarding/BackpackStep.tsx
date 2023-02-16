import React, { useContext, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  Avatar,
  Flex,
  Heading,
  Text,
  VStack,
  Checkbox,
  Tag,
  TagLeftIcon,
  TagLabel,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Progress,
  LinkBox,
  LinkOverlay,
  Textarea,
} from "@chakra-ui/react";
import { Button, Card, IconButton, Input } from "ui";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
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
} from "react-icons/fi";
import { JourneyBluePrint } from "../components/JourneyBluePrint";
import { client } from "../../../utils/client";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { RecommendedAccounts } from "./RecommendedAccounts";
import { useFetch } from "hooks/useSwr";
import { HiOutlineTemplate } from "react-icons/hi";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export const BackpackStepGuide = ({ guide }) => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Flex height="100%">
      <Flex direction="column" gap={4}>
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
          <Card>
            <Stack gap={4} color="brand.primaryText" borderRadius="1rem">
              <Flex alignItems="center" gap={2} color="brand.secondaryText">
                <FiTarget />
                <Text>Specific: Well defined, clear, and unambiguous.</Text>
              </Flex>
              <Flex alignItems="center" gap={2} color="brand.secondaryText">
                <FiTrendingUp />
                <Text>Measurable: With specific criteria.</Text>
              </Flex>
              <Flex alignItems="center" gap={2} color="brand.secondaryText">
                <FiThumbsUp />
                <Text>
                  Attainable: Attainable and not impossible to achieve.
                </Text>
              </Flex>
              <Flex alignItems="center" gap={2} color="brand.secondaryText">
                <FiCheckCircle />
                <Text>
                  Realistic: Within reach, realistic, and relevant to your life
                  purpose.
                </Text>
              </Flex>
              <Flex alignItems="center" gap={2} color="brand.secondaryText">
                <FiClock />
                <Text>
                  Timely: With a clearly defined timeline, including a starting
                  date and a target date.
                </Text>
              </Flex>
            </Stack>
          </Card>
        )}
      </Flex>
    </Flex>
  );
};

// add this somewhere when looking for companions: Inspire others to reach their goals and invite them to join your tribe.

// Link Backpacks/Routines to Goals
const JourneyGoal = ({ goal }) => {
  return (
    <LinkBox>
      <Card>
        <Flex justifyContent="space-between">
          <LinkOverlay href={`goals/${goal.id}`}>
            <Flex gap={4} alignItems="center">
              <Box
                bg="brand.highlight3"
                p="2"
                color="brand.accent"
                borderRadius="50%"
              >
                <FiFlag />
              </Box>
              <Stack>
                <Heading size="xs">{goal.title}</Heading>
              </Stack>
            </Flex>
          </LinkOverlay>
          <Flex gap={2}>
            {false ? (
              <IconButton size="sm">
                <FiMoreHorizontal />
              </IconButton>
            ) : null}
            {false ? (
              <Button size="sm" bg="brand.white" icon={<FiBookOpen />}>
                Reflect
              </Button>
            ) : null}
          </Flex>
        </Flex>
      </Card>
    </LinkBox>
  );
};

type BackpackInfoInput = {
  title: string;
  description?: string;
};

export const BackpackStep = () => {
  const context = useContext(JourneyOnboardingContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const router = useRouter();

  

  const defaultFormValues = () => {
    return {
      title: "",
      description: "",
    };
  };

  const createBackpackForm = useForm({
    defaultValues: defaultFormValues(),
    // resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = createBackpackForm;

  const onSubmit: SubmitHandler<BackpackInfoInput> = (data) => {
    client
      .post(`/backpacks`, {

        // ...data,
        userId: context.journey.userId,
        journeyId: context.journey.id,
        name: data.title,
        description: data.description
      })
      .then(({ data: { backpack } }) => {
        console.log(data);
        context.updateJourney(backpack);
        context.moveForward(context.currentStep.id + 1);
      })
      .catch((err) => {
        // alert("err");
        console.log(err);
      });
  };

  return (
    <Stack color="brand.primaryText">
      <Flex gap={4} alignItems="center">
        <IconButton
          size="sm"
          onClick={context.moveBackwards}
          label="go back to previous step"
        >
          <FiArrowLeft />
        </IconButton>
        <Heading color="brand.primaryText" size="md">
          {context.currentStep.title}
        </Heading>
      </Flex>

      <Flex width="200">
        {context.blueprint === "template" ? (
          <>
            <Text fontWeight="700">Template</Text>
            <JourneyBluePrint
              bluePrint={{
                id: "cl5o8pq8t0070fgbt5eqar9bs",
                userId: "cl5imusb0005800bt26o62b2m",
                type: "template",
                templateId: null,
                title: "Poet",
                description: "ain't nothing to it but to do it",
                field: null,
                expertise: null,
                price: null,
                creator: null,
                createdAt: null,
                updateAt: null,
                image:
                  "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg",
              }}
            />
          </>
        ) : null}

        {isError ? (
          <Text color="brand.danger">Something went wrong</Text>
        ) : null}
      </Flex>
      <Heading size="sm">The Backpack</Heading>
      <Text>
        Gather all the resources you need to achieve your goals and keep them
        organized in one place.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <FormControl>
            <FormLabel color="brand.secondaryText" htmlFor="title">
              Name your Backpack
            </FormLabel>

            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="e.g Eman's Vault"
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
                  placeholder="Describe your backpack"
                  bg="brand.grey"
                  id="description"
                  _placeholder={{ color: "brand.secondaryText" }}
                  {...field}
                />
              )}
            />
            {errors.title && <p>Hello</p>}
          </FormControl>
        </Stack>
        <Stack gap={2}>
          <Card>
            <Stack>
              <Box color="brand.accent">
                <HiOutlineTemplate />
              </Box>
              <Heading size="sm">Local Drive</Heading>
              <Text>
                Gather all the resources you'll need to complete your journey
              </Text>
              <Button>Upload Now</Button>
            </Stack>
          </Card>
          <Card>
            <Stack>
              <Box color="brand.accent">
                <HiOutlineTemplate />
              </Box>
              <Heading size="sm">Chrome Extension</Heading>
              <Text>
                Gather all the resources you'll need to complete your journey
              </Text>
              <Button>Get Extension</Button>
            </Stack>
          </Card>
          <Card>
            <Stack>
              <Box color="brand.accent">
                <HiOutlineTemplate />
              </Box>
              <Heading size="sm">Import Data</Heading>
              <Text>
                Gather all the resources you'll need to complete your journey
              </Text>
              <Button>View Integrations</Button>
            </Stack>
          </Card>
        </Stack>
        <Flex gap={4} justifyContent="flex-end">
        <Button
          bg="brand.white"
          color="brand.primaryText"
          icon={<FiX />}
          disabled={
            context.currentStep.id === 1 || context.currentStep.id === 5
          }
        >
          Skip
        </Button>
        <Button type="submit" icon={<FiArrowRight />} isLoading={isLoading}>
          Next
        </Button>
      </Flex>
      </form>
    </Stack>
  );
};
