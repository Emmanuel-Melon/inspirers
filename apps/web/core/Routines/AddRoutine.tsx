import { useState } from "react";
import {
  Stack,
  Text,
  Flex,
  FormControl,
  Tag,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Routine } from "@prisma/client";
import {
  FiX,
  FiMaximize2,
  FiArrowRight,
  FiChevronsRight,
  FiFolder,
  FiRotateCw,
  FiUsers,
} from "react-icons/fi";
import { Button, IconButton, Modal } from "ui";
import { Input } from "ui";
import { client } from "utils/client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { parse, format, formatDistance, formatRelative, subDays } from "date-fns";

export const AddRoutine = ({ addNewRoutine }) => {
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const { control, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: "",
      startingDate: null,
      startsAt: null,
      finishesAt: null,
      reminder: ""
    },
  });

  const onSubmit = async (data) => {

    console.log(data)
    await addNewRoutine({
      ...data,
      startsAt: parse(data.startsAt, "HH:mm", new Date()),
      finishesAt: parse(data.finishesAt, "HH:mm", new Date()),
      startingDate: new Date(data.startingDate)
    });
    closeModal();
  };
  return (
    <>
      <Button onClick={openModal}>New Routine</Button>
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
                <Tag
                  color="brand.secondaryText"
                  bg="brand.highlight2"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                >
                  Journey
                </Tag>
                <FiChevronsRight />
                <Text size="sm">New Routine</Text>
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
            <Stack px="4" py="2">
              <FormControl>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Routine name"
                      type="text"
                      autoFocus={true}
                      {...field}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Controller
                  name="startingDate"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Start Date"
                      type="date"
                      {...field}
                    />
                  )}
                />
              </FormControl>
              <Flex>
              <FormControl>
                <Controller
                  name="startsAt"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Start Date"
                      type="time"
                      {...field}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Controller
                  name="finishesAt"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Start Date"
                      type="time"
                      {...field}
                    />
                  )}
                />
              </FormControl>
              </Flex>
              <FormControl>
                <Controller
                  name="reminder"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Reminder"
                      type="text"
                      {...field}
                    />
                  )}
                />
              </FormControl>
            </Stack>
            <Flex
              px="4"
              py="4"
              alignItems="center"
              justifyContent="flex-end"
              bg="brand.highlight2"
            >
              <Flex gap={2}>
                <Button size="sm" bg="brand.white" onClick={() => {}}>
                  Draft
                </Button>
                <Button size="sm" type="submit" isLoading={isLoading}>
                  Continue
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
