import React, { useState } from "react";
import {
  Flex,
  Text,
  Stack,
  Divider,
  useMultiStyleConfig,
  useTab,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading
} from "@chakra-ui/react";
import Head from "next/head";

import { Button } from "ui";
import {
  FiPlus,
  FiTrash,
  FiCheck,
  FiTag,
  FiUsers,
  FiLink2,
  FiClock,
  FiX,
} from "react-icons/fi";
import { Input } from "ui";
import { client } from "utils/client";

type AddTaskProps = {
  addTask: any;
  journey: any;
  isLoading: boolean;
};

export const AddTask = ({ addTask, journey, isLoading }: AddTaskProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  return (
    <Stack p="8" gap={4} color="brand.primaryText">
      <Heading size="sm" color="brand.secondary">Add a new Routine</Heading>
      <Stack gap={2}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Fix my car"
            type="text"
            value={title}
            name="name"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            type="text"
            value={description}
            name="name"
          />
        </FormControl>
      </Stack>
      <Flex bg="brand.highlight1" p="4" gap={4} justifyContent="flex-end">
        <Button
          onClick={() => { }}
          icon={<FiX />}
          bg="brand.white"
          color="brand.primaryText"
          size="md"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            addTask({
              title,
              description,
              progress: 0,
              journeyId: journey.id,
            });
          }}
          isLoading={isLoading}
          icon={<FiCheck />}
          size="md"

        >
          Save
        </Button>
      </Flex>
    </Stack>
  );
};
