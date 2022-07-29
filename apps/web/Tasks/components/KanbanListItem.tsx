import { useState } from "react";
import { Avatar, Flex, Heading, Progress, Text, Tag } from "@chakra-ui/react";
import { TaskDetailView } from "./TaskDetailView";

import {
  FiEdit3,
  FiMessageSquare,
  FiList,
  FiInfo,
  FiBell,
  FiCheckSquare,
  FiLink2,
} from "react-icons/fi";
import { CustomModal } from "ui";
const colors = {
  Progress: "brand.secondary",
  Blocked: "brand.danger",
  Review: "blue",
  Pending: "brand.accent",
  Approved: "brand.success",
};

export const KanbanListItem = ({ item }) => {
  const [show, setShow] = useState(false);
  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }
  return (
    <>
      <Flex
        bg="brand.white"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px"
        p="4"
        borderRadius="1rem"
        my="2"
        direction="column"
        gap={2}
        cursor="pointer"
        _hover={{
          bg: "brand.highlight",
        }}
        color="brand.primaryText"
        onClick={openModal}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{item.name}</Text>
          <FiEdit3 />
        </Flex>
        <Flex gap={2}>
          <Tag
            width="fit-content"
            bg={colors[item.status]}
            color="brand.white"
            size="sm"
            borderRadius="1rem"
          >
            {item.status}
          </Tag>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex
            gap={4}
            bg="brand.highlight2"
            py="1"
            px="4"
            color="brand.primary"
            borderRadius="1rem"
          >
            {item.notifications ? (
              <Flex gap={1} alignItems="center">
                <FiBell />
                <Text>{item.notifications}</Text>
              </Flex>
            ) : null}
            {item.tasks ? (
              <Flex gap={1} alignItems="center">
                <FiCheckSquare />
                <Text>
                  {item.tasks}/{item.completedTasks}
                </Text>
              </Flex>
            ) : null}
            {item.comments ? (
              <Flex gap={1} alignItems="center">
                <FiMessageSquare />
                <Text>{item.comments}</Text>
              </Flex>
            ) : null}
            {item.attachments ? (
              <Flex gap={1} alignItems="center">
                <FiLink2 />
                <Text>{item.attachments}</Text>
              </Flex>
            ) : null}
          </Flex>
          <Flex gap={2}>
            {item?.members?.map((member) => (
              <Avatar size="xs" src={member.avatar} />
            ))}
          </Flex>
        </Flex>
        <Progress
          value={item.progress}
          hasStripe
          size="sm"
          colorScheme="green"
          borderRadius="1rem"
        />
      </Flex>
      <CustomModal show={show} close={closeModal}>
        <TaskDetailView item={item} />
      </CustomModal>
    </>
  );
};
