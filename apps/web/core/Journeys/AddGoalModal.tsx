import { FC, useEffect, useReducer, useState, useContext } from "react";
import { JourneyConsumer, JourneyContext } from "providers/JourneyProvider";
import { Box, Stack, Text, Flex, Heading } from "@chakra-ui/react";
import { Button, IconButton, Modal, Input } from "ui";
import { AddNewGoal } from "./AddNewGoal";
import { FiTarget } from "react-icons/fi";

export const AddGoalModal = ({ CTA = "Start Setting Goals" }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Flex gap={2}>
        <Button onClick={openModal} icon={<FiTarget />}>
          {CTA}
        </Button>
      </Flex>
      <Modal show={isModalOpen} close={closeModal}>
        <AddNewGoal />
      </Modal>
    </>
  );
};
