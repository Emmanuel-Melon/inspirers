import { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { TaskList } from "Tasks/components/TaskList";
import { AddTask } from "Tasks/components/AddTask";
import { Button } from "ui";
import { client } from "utils/client";
import { Modal } from "ui";
import { FiPlus, FiFilter, FiCalendar } from "react-icons/fi";
import { AddBackPackItemModal } from "./AddBackPackItemModal";
import { AddTaskModal } from "Tasks/components/AddTaskModal";

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
      <VStack
        color="brand.primaryText"
        gap={4}
        alignItems="flex-start"
        width="100%"
      >
        <VStack
          width="100%"
          alignItems="flex-start"
          gap={8}
          justifyContent="space-between"
        >
          <Flex gap={4}>
            <VStack alignItems="flex-start" width="40%" gap={4}>
              <Heading size="md">Tasks</Heading>
              <Text>
                Create your own unique action plan for success with Inspirers.
                We help you organize your goals in a way that works for you.
              </Text>
              <Button onClick={openModal} icon={<FiPlus />}>
                Add a task
              </Button>
            </VStack>
          </Flex>
          <Flex gap={4}>
            <VStack alignItems="flex-start" width="40%" gap={4}>
              <Heading size="md">Backpack</Heading>
              <Text>
              Immerse yourself in the world of resources and transformation with Inspirers. It's a beautiful, exciting place to be.
              </Text>
              <Button onClick={openModal} icon={<FiPlus />}>
                Pack Resources
              </Button>
            </VStack>
          </Flex>
          <Flex gap={4}>
            <VStack alignItems="flex-start" width="40%" gap={4}>
              <Heading size="md">Reflections</Heading>
              <Text>
                Create your own unique action plan for success with Inspirers.
                We help you organize your goals in a way that works for you.
              </Text>
              <Button onClick={openModal} icon={<FiPlus />}>
                Reflect
              </Button>
            </VStack>
          </Flex>
        </VStack>
      </VStack>
    </>
  );
};
