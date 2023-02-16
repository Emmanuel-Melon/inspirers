import React, { useState } from "react";
import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Stack,
} from "@chakra-ui/react";

export const Timeline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const timeLabels = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];

  return (
    <Box p={4}>
      <Flex alignItems="center" mb={4}>
        <Box w="30px" h="30px" bg="gray.500" borderRadius="full" mr={2} />
        <Box>Day 1</Box>
      </Flex>

      <Stack mb={4}>
      <Box />
        {Array(24)
          .fill(0)
          .map((_, index) => (
            <Box
              key={index}
              w="100%"
              h="50px"
              bg="gray.200"
              onClick={() => handleTimeSlotClick(index)}
            >
              <Flex alignItems="center" h="100%">
                <Box>{timeLabels[index]}</Box>
              </Flex>
            </Box>
          ))}
      </Stack>

      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You selected time slot {selectedTimeSlot}.
            <Button mt={4} onClick={handleModalClose}>
              Close
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
