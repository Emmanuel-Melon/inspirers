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
} from "@chakra-ui/react";
import { Input } from "ui/Input";
import { Button, IconButton } from "ui";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import { client } from "../../../utils/client";
import { ListBluePrints } from "../components/ListBluePrints";
import { FiX, FiArrowRight, FiBookOpen, FiArrowLeft } from "react-icons/fi";
import { Card, RadioCard } from "ui";
import toast, { Toaster } from "react-hot-toast";
import { CustomCheckbox } from "ui";
import {
  RiEmpathizeLine,
  RiStore3Line,
  RiBriefcase2Line,
} from "react-icons/ri";

type JourneyTypeSelectorProps = {
  defaultValue: any;
  options: any;
  updateJourneyType: any;
};

type JourneyType = "academic" | "business" | "career" | "personal";

const JourneyTypeSelector: FC<JourneyTypeSelectorProps> = ({
  defaultValue,
  options,
  updateJourneyType,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "journey",
    defaultValue,
    onChange: (nextValue) => updateJourneyType(nextValue),
  });

  const group = getRootProps();
  const type: JourneyType = "academic";
  return (
    <>
      <FormControl>
      <FormLabel color="brand.secondaryText">Type of journey</FormLabel>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard
              p="0.5rem"
              
              key={value}
              {...radio}
              bg="brand.white"
              checked={{
                bg: "brand.accent",
                color: "brand.white",
                borderRadius: "0.5rem",
              }}
              hover={{
                borderColor: "brand.highlight2",
              }}
              name="journeyType"
            >
              {value}
            </RadioCard>
          );
        })}
      </HStack>
      </FormControl>

      {type === "academic" ? <AcademicJourneyForm /> : null}
      {type === "business" ? <BusinessJourneyForm /> : null}
      {type === "career" ? <CareerJourneyForm /> : null}
    </>
  );
};

type JourneyFormProps = {
  journey?: any;
};

const CareerJourneyForm: FC<JourneyFormProps> = ({ journey }) => {
  return (
    <>
      <FormControl>
        <FormLabel color="brand.primaryText">Field</FormLabel>
        <Input
          placeholder="E.g Engineering, Medicine etc."
          type="text"
          onChange={() => {}}
          value={journey.interest}
          name="interest"
        />
      </FormControl>
      <FormControl>
        <FormLabel color="brand.primaryText">Experience level</FormLabel>
        <Select
          placeholder="e.g undergrad or postgrade"
          borderRadius="1rem"
          name="background"
        >
          <option value={journey.background}>No Experience</option>
          <option value={journey.background}>Early Career</option>
          <option value={journey.background}>Mid Level/ Senior</option>
        </Select>
      </FormControl>
    </>
  );
};

const BusinessJourneyForm: FC<JourneyFormProps> = ({ journey }) => {
  return (
    <>
      <FormControl>
        <FormLabel color="brand.primaryText">Business type</FormLabel>
        <Input
          placeholder="E.g Tech, Education"
          type="text"
          onChange={() => {}}
          value={journey.field}
          name="field"
        />
      </FormControl>
    </>
  );
};

type AcademicJourneyInput = {
  background?: string;
  title: string;
};

const AcademicJourneyForm = ({ journey }: JourneyFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AcademicJourneyInput>();
  const onSubmit: SubmitHandler<AcademicJourneyInput> = (data) =>
    console.log(data);

  console.log(watch("title"));
  return (
    <Stack gap={1}>
      <FormControl>
        <FormLabel color="brand.secondaryText">Your field</FormLabel>
        <Input
          placeholder="E.g Engineering, Medicine etc."
          type="text"
          {...register("title")}
        />
      </FormControl>
      <FormControl>
        <FormLabel color="brand.secondaryText">Academic level</FormLabel>
        <Select
          placeholder="e.g undergraduate or postgrade"
          borderRadius="1rem"
          name="background"
          variant="outline"
          bg="brand.highlight2"
          borderColor="brand.highlight2"
        >
          <option>High School</option>
          <option>Undergraduate</option>
          <option>Postgraduate</option>
          <option>Other</option>
        </Select>
      </FormControl>
    </Stack>
  );
};

type JourneyInfoInputs = {
  title: string;
};

const JourneyInfoForm = () => {
  const context = useContext(JourneyOnboardingContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const errorToast = (message: string) => toast.error(message);
  const successToast = (message: string) => toast.success(message);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<JourneyInfoInputs>();
  const onSubmit: SubmitHandler<JourneyInfoInputs> = (data) =>
    console.log(data);

  const options = ["academic", "business", "career", "personal"];

  console.log(watch("title"));
  console.log(errors);

  const updateJourneyType = (value) => {
    /**
     * setJourneyInfo((currentState) => {
      return {
        ...currentState,
        journeyType: value,
      };
    });
     */
  };

  if (context.blueprint === "template") {
    return <ListBluePrints />;
  }
  return (
    <Grid gap={4} borderRadius="1rem" color="brand.primaryText" width="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <JourneyTypeSelector
          defaultValue={""}
          options={options}
          updateJourneyType={updateJourneyType}
        />
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
            as="input"
            type="submit"
            icon={<FiArrowRight />}
            isLoading={isLoading}
          >
            Continue
          </Button>
        </Flex>
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
