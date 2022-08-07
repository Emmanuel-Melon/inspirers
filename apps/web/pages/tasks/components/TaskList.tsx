import { useState, useEffect } from "react";
import { Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { TaskItem } from "./TaskItem";
import { TaskObject } from "types/Task";
import Image from "next/image";
import { FiPlus, FiFilter, FiCalendar } from "react-icons/fi";
import { Button } from "ui";
import { AddTask } from "./AddTask";
import { CustomModal } from "ui";

type TaskListProps = {
  tasks: TaskObject[];
};

export const TaskList = ({ addTask, journey, tasks }: TaskListProps) => {
  const [show, setShow] = useState(false);
  // state should live on board, shared by all lists
  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }
  if (tasks.length === 0) {
    return (
      <>
        <Flex
          alignItems="center"
          gap={8}
          justifyContent={"center"}
          direction="column"
        >
          <Heading>No Tasks</Heading>
          <Image
            alt="empty"
            src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1658948677/inspirers/images/e087d92f-036d-41ec-895c-de4659e810e9.png"
            height="180"
            width="180"
          />
        </Flex>
      </>
    );
  }

  return (
    <VStack alignItems="flex-start" width="100%">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </VStack>
  );
};
