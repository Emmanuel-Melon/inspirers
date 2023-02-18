import React, { FC, useEffect, useReducer, useState, useContext } from "react";
import { JourneyConsumer, JourneyContext } from "providers/JourneyProvider";
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
import { client } from "utils/client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

export const AddNewGoal = () => {
  const context = useContext(JourneyContext);
  console.log(context);
  const defaultFormValues = () => {
    return {
      title: "",
      description: "",
    };
  };

  const schema = z.object({
    title: z.string().min(3, { message: "Required" }),
    // description: z.number().min(10),
  });

  // integrate with state to reflect the name on the header
  const createGoalForm = useForm({
    defaultValues: defaultFormValues(),
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log("heyy")
    console.log(data)
    client
      .post(`/journeys/goals`, {
        ...data,
        userId: context.userId,
        journeyId: context.id
      })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = createGoalForm;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Flex px="4" py="2" justifyContent="space-between" alignItems="center">
          <Flex gap={1} alignItems="center" color="brand.secondaryText">
            <Text>{context.title}</Text>
            <FiChevronsRight />
            <Text size="xs">New Goal</Text>
          </Flex>
          <Flex gap={2} alignItems="center">
            <IconButton label={""} onClick={() => {}}>
              <FiMaximize2 />
            </IconButton>
            <IconButton label={""} onClick={() => {}}>
              <FiX />
            </IconButton>
          </Flex>
        </Flex>
        <Stack p="4" gap={2}>
          <Flex gap={2} alignItems="center">
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
              {errors?.title && (
                <FormErrorMessage color="red">
                  {errors?.title?.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </Flex>
          <Flex gap={2} alignItems="center">
            <FormControl>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea
                    placeholder="Add Description"
                    _placeholder={{ color: "brand.secondaryText" }}
                    {...field}
                  />
                )}
              />
              {errors?.title && (
                <FormErrorMessage color="red">
                  {errors?.title?.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </Flex>
          <Flex gap={4} justifyContent="flex-end">
            <Button bg="brand.white" color="brand.primaryText" icon={<FiX />}>
              Cancel
            </Button>
            <Button type="submit" icon={<FiArrowRight />}>
              Continue
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </form>
  );
};
