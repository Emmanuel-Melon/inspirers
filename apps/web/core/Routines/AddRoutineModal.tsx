import { FC, useEffect, useReducer, useState } from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Select,
  Input as ChakraInput,
  Checkbox,
  Heading,
  CheckboxGroup,
  Divider,
  useCheckbox,
  Switch,
  useRadio,
  useRadioGroup,
  RadioGroup,
  Textarea,
} from "@chakra-ui/react";
import { Routine } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FiX,
  FiMaximize2,
  FiArrowRight,
  FiChevronsRight,
  FiFolder,
  FiRotateCw,
  FiUsers,
  FiPlus,
  FiArchive,
  FiEdit3,
  FiColumns,
} from "react-icons/fi";
import { Button, IconButton, Modal, Input } from "ui";
import { client } from "utils/client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Controller, useForm } from "react-hook-form";
import { addHours, parse } from "date-fns";
import { reducer } from "./reducers";
import toast, { Toaster } from "react-hot-toast";

const DatePicker = ({ field }: any) => {
  return (
    <ChakraInput
      placeholder="Start Date"
      type="date"
      {...field}
      bg="brand.accent"
      color="brand.white"
      size="sm"
    />
  );
};

const TimePicker = ({ field }: any) => {
  return (
    <ChakraInput
      placeholder="Start Date"
      type="time"
      {...field}
      bg="brand.accent"
      color="brand.white"
      size="sm"
    />
  );
};

const weekDays = [
  { value: "M", id: 1 },
  { value: "T", id: 2 },
  { value: "W", id: 3 },
  { value: "T", id: 4 },
  { value: "F", id: 5 },
  { value: "S", id: 6 },
  { value: "S", id: 7 },
];

const CustomRecurrenceSelector = () => {
  return (
    <CheckboxGroup>
      <Flex alignItems="center" gap={2}>
        {weekDays.map((day) => (
          <Box
            key={day.id}
            bg={day.id !== 2 ? "brand.highlight2" : "brand.primary"}
            color={day.id === 2 ? "brand.primaryText" : "brand.secondaryText"}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            borderRadius="50%"
            justifyContent="center"
            alignItems="center"
            px="4"
            py="2"
          >
            <Text fontWeight="bold">{day.value}</Text>
            <Checkbox display="none" />
          </Box>
        ))}
      </Flex>
    </CheckboxGroup>
  );
};

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const { value } = props;

  return (
    <Box as="label">
      <input {...input} />
      {value === "on" ? (
        <Box {...checkbox}>
          <FormControl>
            <Flex gap={2} alignItems="center">
              <Box height="20px" width="20px" bg="green"></Box>
              <FormLabel>After</FormLabel>
              <Input placeholder="5" type="number" width="50px" />
              <Text>Occurances</Text>
            </Flex>
          </FormControl>
        </Box>
      ) : (
        <Box {...checkbox}>
          <FormControl>
            <Flex gap={2} alignItems="center">
              <Box height="20px" width="20px" bg="green"></Box>
              <FormLabel>On</FormLabel>
              <Input placeholder="Add title" type="date" />
            </Flex>
          </FormControl>
        </Box>
      )}
    </Box>
  );
}

const initialState = {};

type AddRoutineModalProps = {
  CTA?: string;
  journeyId?: string;
};

export const AddRoutineModal: FC<AddRoutineModalProps> = ({
  CTA = "New Routine",
  journeyId = "cldvqpxv50001btfnwanocwtk"
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCustom, setIsCustom] = useState<boolean>(true);
  const { data: session } = useSession();
  // const [state, dispatch] = useReducer(reducer, initialState);

  const options = ["on", "after"];
  const errorToast = (message: string) => toast.error(message);
  const successToast = (message: string) => toast.success(message);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNewRoutine = (data) => {
    client
      .post(`/routines`, {
        ...data,
        userId: session?.user?.id,
        journeyId // props or context?
      })
      .then((res) => {
        console.log(res);
        successToast("Routine created");
        closeModal();
      })
      .catch((err) => {
        console.log(err);
        errorToast(err.message);
      });
  };

  const defaultFormValues = () => {
    return {
      title: "",
      startingDate: null, // default value is the upcoming weekday/ availablity date
      description: "",
      startsAt: null,
      duration: 0,
      reminder: "",
      reccurenceText: "", // should be a drop down with some default options and the ability to choose custom
      //
    };
  };

  const schema = z.object({
    title: z.string().min(3, { message: "Required" }),
    // description: z.number().min(10),
  });

  // integrate with state to reflect the name on the header
  const createRoutineForm = useForm({
    defaultValues: defaultFormValues(),
    resolver: zodResolver(schema),
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = createRoutineForm;

  console.log(errors);
  console.log(errors?.title?.message);

  const onSubmit = async (data: any) => {
    const startsAt = parse(data.startsAt, "HH:mm", new Date());
    try {
      const input = {
        ...data,
        startsAt,
        finishesAt: addHours(startsAt, data.duration),
        startingDate: parse(data.startingDate, "yyyy-MM-dd", new Date()),
      };

      console.log(errors);
      await addNewRoutine(input);

      // reset form!
      setIsSubmitSuccessful(true);

    } catch (err) {
      console.log("oh man!");
    }
  };

  useEffect(() => {
    reset({
      title: "",
      startingDate: null,
      startsAt: null,
      duration: 0,
      reminder: "",
    });
  }, [isSubmitSuccessful]);

  // use presets
  // allow custom

  return (
    <>
      <Button onClick={openModal} icon={<FiPlus />} width="fit-content">
        {CTA}
      </Button>
      <Modal show={isModalOpen} close={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack color="brand.primaryText">
            <Flex
              px="4"
              py="2"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex gap={1} alignItems="center" color="brand.secondaryText">
                <Text>Journey</Text>
                <FiChevronsRight />
                <Text size="xs">{CTA}</Text>
              </Flex>
              <Flex gap={2} alignItems="center">
                <IconButton label={""} onClick={() => {}}>
                  <FiMaximize2 />
                </IconButton>
                <IconButton label={""} onClick={closeModal}>
                  <FiX />
                </IconButton>
              </Flex>
            </Flex>
            <Stack px="4" py="2" gap={2}>
              <Flex gap={2} alignItems="center">
                <Box color="brand.accent">
                  <FiEdit3 />
                </Box>
                <FormControl>
                  <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                      <Input
                        placeholder="Add title"
                        type="text"
                        autoFocus={true}
                        {...field}
                        
                      />
                    )}
                  />
                  {errors?.title && <FormErrorMessage color="red">{errors?.title?.message}</FormErrorMessage>}
                </FormControl>
              </Flex>
             {
              false ?  <Flex gap={2} alignItems="center">
              <Box color="brand.accent">
                <FiColumns />
              </Box>
              <FormControl>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      placeholder="Add description"
                      size="sm"
                      colorScheme="teal"
                    />
                  )}
                />
              </FormControl>
            </Flex> : null
             }

              <Flex alignItems="center" gap={4}>
                <FormControl>
                  <Flex alignItems="center">
                    <FormLabel color="brand.secondaryText" size="sm">
                      From
                    </FormLabel>
                    <Controller
                      name="startingDate"
                      control={control}
                      render={({ field }) => <DatePicker field={field} />}
                    />
                  </Flex>
                </FormControl>
                <FormControl>
                  <Controller
                    name="startsAt"
                    control={control}
                    render={({ field }) => <TimePicker field={field} />}
                  />
                </FormControl>
                <FormControl>
                  <Controller
                    name="duration"
                    control={control}
                    render={({ field }) => (
                      <Input
                        placeholder="Duration"
                        type="number"
                        {...field}
                      />
                    )}
                  />
                </FormControl>
              </Flex>
              {isCustom ? (
                <Stack>
                  <Divider />
                  <Flex alignItems="center" gap={4}>
                    <Text>On</Text>
                    <CustomRecurrenceSelector />
                  </Flex>
                  <Text>Ends</Text>
                  <Flex alignItems="center" gap={4}>
                    <Flex flex="1" gap={8}>
                      {options.map((value) => {
                        const radio = getRadioProps({ value });
                        return (
                          <RadioCard key={value} {...radio}>
                            {value}
                          </RadioCard>
                        );
                      })}
                    </Flex>
                  </Flex>
                </Stack>
              ) : null}
            </Stack>
            <Flex
              px="4"
              py="4"
              alignItems="center"
              justifyContent="flex-end"
              bg="rgba(32, 60, 134, 0.05)"
            >
              <Flex gap={2}>
                <Button
                  size="sm"
                  bg="brand.white"
                  onClick={() => {}}
                  icon={<FiArchive />}
                >
                  Draft
                </Button>
                <Button
                  size="sm"
                  type="submit"
                  isLoading={isLoading}
                  icon={<FiArrowRight />}
                >
                  Continue
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </form>
      </Modal>
      <Toaster position="bottom-center" />
    </>
  );
};
