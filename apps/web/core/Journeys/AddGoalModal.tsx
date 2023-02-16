import { FC, useEffect, useReducer, useState } from "react";
import { Box, Stack, Text, Flex, Heading } from "@chakra-ui/react";
import { Button, IconButton, Modal, Input } from "ui";
import { AddNewGoal } from "./AddNewGoal";
import { FiMusic } from "react-icons/fi";

export const AddGoalModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  return (
    <>
      <Flex gap={2}>
        <Button
          onClick={openModal}
          icon={<FiMusic />}
          bg="brand.white"
          color="brand.accent"
        >
          Start Setting Goals
        </Button>
        <Button onClick={openModal} icon={<FiMusic />}>
          Start Setting Goals
        </Button>
      </Flex>
      <Modal show={isModalOpen} close={closeModal}>
        <AddNewGoal />
      </Modal>
    </>
  );
};
