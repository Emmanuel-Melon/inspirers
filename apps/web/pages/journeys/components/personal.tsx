import { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { TaskList } from "pages/tasks/components/TaskList";
import { AddTask } from "pages/tasks/components/AddTask";
import { Button } from "ui";
import { client } from "utils/client";
import { CustomModal } from "ui";
import { FiPlus, FiFilter, FiCalendar } from "react-icons/fi";

export const PersonalJourney = ({ journey }) => {

  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  const addTask = (task) => {
    setIsLoading(true);
    client.post("/tasks", {
      ...task
    })
      .then(res => {
        setIsLoading(true);
        closeModal()
      }).catch(err => {
        setIsLoading(true);
        closeModal();
      })
  }
  return (
    <>
      <VStack color="brand.primaryText" gap={4} alignItems="flex-start" width="100%">
        <VStack width="100%" alignItems="flex-start" gap={8} justifyContent="space-between">
          <Flex gap={4}>
            <VStack alignItems="flex-start" width="40%" gap={4}>
              <Heading size="md">Tasks</Heading>
              <Text>Create your own unique action plan for success with Inspirers. We help you organize your goals in a way that works for you.</Text>
              <Button onClick={openModal} icon={<FiPlus />} >Add a task</Button>
            </VStack>
            <TaskList tasks={journey.tasks} journey={journey} addTask={addTask}/>
          </Flex>
        </VStack>
      </VStack>
      <CustomModal show={show} close={closeModal}>
          <AddTask 
            journey={journey} 
            closeModal={closeModal} 
            addTask={addTask}
            isLoading
          />
        </CustomModal>
    </>
  );
};
