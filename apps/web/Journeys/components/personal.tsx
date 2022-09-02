import { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { TaskList } from "Tasks/components/TaskList";
import { AddTask } from "Tasks/components/AddTask";
import { Button } from "ui";
import { client } from "utils/client";
import { CustomModal } from "ui";
import { FiPlus, FiFilter, FiCalendar } from "react-icons/fi";
import { AddBackPackItemModal } from "./AddBackPackItemModal";
import { AddTaskModal } from "Tasks/components/AddTaskModal";

export const PersonalJourney = ({ journey }) => {
<<<<<<< Updated upstream
=======
  const [view, setView] = useState("");
>>>>>>> Stashed changes
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  function handleTaskClick () {
    setView("task");
    openModal();
  }

  function handleBackpackClick () {
    setView("backpack");
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
<<<<<<< Updated upstream
              <Text>
                Create your own unique action plan for success with Inspirers.
                We help you organize your goals in a way that works for you.
              </Text>
              <Button onClick={openModal} icon={<FiPlus />}>
                Add a task
              </Button>
            </VStack>
            <TaskList
              tasks={journey.tasks}
              journey={journey}
              addTask={addTask}
            />
=======
              <Text>Create your own unique action plan for success with Inspirers. We help you organize your goals in a way that works for you.</Text>
              <Button onClick={handleTaskClick} icon={<FiPlus />} >Add a task</Button>
            </VStack>
          </Flex>
          <Flex gap={4}>
            <VStack alignItems="flex-start" width="40%" gap={4}>
              <Heading size="md">Fill Backpack</Heading>
              <Text>Use this resources organizer to log all the websites, videos, and courses that you want to save. Quickly access frequently used tools and docs, plus stay on top of interesting research and articles.</Text>
              <Button onClick={handleBackpackClick} icon={<FiPlus />} >Add Resources</Button>
            </VStack>
>>>>>>> Stashed changes
          </Flex>
        </VStack>
      </VStack>
      <CustomModal show={show} close={closeModal}>
<<<<<<< Updated upstream
        <AddTask
          journey={journey}
          closeModal={closeModal}
          addTask={addTask}
          isLoading
        />
=======
          {
            view === "task" ? (
              <AddTaskModal />
            ) : <AddBackPackItemModal />
          }
>>>>>>> Stashed changes
      </CustomModal>
    </>
  );
};
