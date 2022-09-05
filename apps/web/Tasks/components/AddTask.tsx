import React, { useState } from "react";
import {
  Flex,
  Text,
  Stack,
  Divider,
  useMultiStyleConfig,
  useTab,
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
import { TextInput } from "ui";
import { client } from "utils/client";

type AddTaskProps = {
  addTask: any;
  journey: any;
  isLoading: boolean;
};

export const AddTask = ({ addTask, journey, isLoading }: AddTaskProps) => {
  const [title, setTitle] = useState<string>("");
  return (
    <Flex width="800px" gap={8} color="brand.primaryText" direction="column">
      <Flex>
        <Stack width="60%" gap={4} p="8">
          <Flex gap={2} direction="column">
            <TextInput
              placeholder="Add task title"
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              value={title}
              type="text"
            />
          </Flex>
          <Flex gap={6}>
            <Flex gap={2} alignItems="center">
              <FiUsers />
              <Text>Assignees</Text>
            </Flex>
            <Flex gap={2}>
              <Flex gap={2} alignItems="center">
                <FiPlus />
                <Text>Assign user</Text>
              </Flex>
            </Flex>
          </Flex>
        </Stack>
        <Stack width="150px" alignItems="flex-start" p="8">
          <Button
            icon={<FiLink2 />}
            size="sm"
            bg="brand.highlight2"
            color="brand.primary"
            onClick={() => {}}
          >
            Add Resources
          </Button>
          <Button
            icon={<FiUsers />}
            size="sm"
            bg="brand.highlight2"
            color="brand.primary"
            onClick={() => {}}
          >
            Members
          </Button>
          <Button
            icon={<FiClock />}
            size="sm"
            bg="brand.highlight2"
            color="brand.primary"
            width="100%"
            onClick={() => {}}
          >
            Dates
          </Button>
          <Button
            icon={<FiTrash />}
            size="sm"
            bg="brand.highlight2"
            color="brand.primary"
            width="100%"
            onClick={() => {}}
          >
            Delete
          </Button>
        </Stack>
      </Flex>
      <Flex bg="brand.highlight" p="8" gap={4}>
        <Button
          onClick={() => {}}
          icon={<FiX />}
          bg="brand.white"
          color="brand.primaryText"
          size="md"
        >
          Cancel
        </Button>
        <Button
          onClick={addTask({
            title: title,
            userId: journey.userId,
            description: "oweeeeee",
            journeyId: journey.id,
          })}
          icon={<FiCheck />}
          size="md"
          isLoading={isLoading}
        >
          Save
        </Button>
      </Flex>
    </Flex>
  );
};
