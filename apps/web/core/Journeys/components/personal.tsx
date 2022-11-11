import { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import { TaskList } from "core/Tasks/components/TaskList";
import { AddTask } from "core/Tasks/components/AddTask";
import { Button, Card, IconButton } from "ui";
import { client } from "utils/client";
import { FiPlus, FiFilter, FiCalendar, FiArrowRight } from "react-icons/fi";
import { AddBackPackItemModal } from "./AddBackPackItemModal";
import { AddTaskModal } from "core/Tasks/components/AddTaskModal";

export const PersonalJourney = ({ journey }) => {
  console.log(journey);

  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  function handleTaskClick() {
    openModal();
  }

  function handleBackpackClick() {
    openModal();
  }

  const addTask = (task) => {
    setIsLoading(true);
    client
      .post("/tasks", {
        ...task,
      })
      .then((res) => {
        setIsLoading(true);
        closeModal();
      })
      .catch((err) => {
        setIsLoading(true);
        closeModal();
      });
  };
  return (
    <>
      <Stack
        color="brand.primaryText"
      >
        <Card bg="brand.highlight1">
          <Flex justifyContent="space-between" alignItems="center">
            <Stack>
              <Heading size="sm">Find Companions</Heading>
              <Text color="brand.secondaryText">Hello, World my dear friends!</Text>
            </Stack>
            <IconButton onClick={openModal} label="Some Action">
              <FiArrowRight />
            </IconButton>
          </Flex>
        </Card>
        <Card bg="brand.highlight1">
          <Flex justifyContent="space-between" alignItems="center">
            <Stack>
              <Heading size="sm">Pack Resources</Heading>
              <Text color="brand.secondaryText">Hello, World my dear friends!</Text>
            </Stack>
            <IconButton onClick={openModal} label="Some Action">
              <FiArrowRight />
            </IconButton>
          </Flex>
        </Card>
        <Card bg="brand.highlight1">
          <Flex justifyContent="space-between" alignItems="center">
            <Stack>
              <Heading size="sm">Create Routines</Heading>
              <Text color="brand.secondaryText">Hello, World my dear friends!</Text>
            </Stack>
            <IconButton onClick={openModal} label="Some Action">
              <FiArrowRight />
            </IconButton>
          </Flex>
        </Card>
      </Stack>
    </>
  );
};
