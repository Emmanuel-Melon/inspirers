import { useState } from "react";
import {
  Avatar,
  Flex,
  Text,
  Heading,
  Stack,
  Tag,
  Progress,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { TaskObject } from "types/Task";
import {
  FiMoreHorizontal,
  FiEdit3,
  FiLink2,
  FiMessageSquare,
  FiBox,
  FiCalendar,
  FiArrowDown,
  FiCopy,
  FiTrash,
} from "react-icons/fi";
import { client } from "utils/client";

type TaskItemProps = {
  task: TaskObject;
};

export const TaskItem = ({ task }: TaskItemProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteTask = () => {
    setIsLoading(true);
    client
      .delete(`/tasks/${task.id}`)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };
  return (
    <Popover placement="right-start">
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>List Actions</PopoverHeader>
        <PopoverBody>
          <List color="brand.primaryText">
            <ListItem color="brand.primaryText">
              <ListIcon as={FiCopy} />
              Duplicate
            </ListItem>
            <ListItem
              cursor="pointer"
              color="brand.primaryText"
              onClick={deleteTask}
            >
              <ListIcon as={FiTrash} />
              Delete
            </ListItem>
          </List>
        </PopoverBody>
      </PopoverContent>
      <Flex
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        p="4"
        width={"100%"}
        gap={4}
        borderRadius="1rem"
        bg="brand.white"
        cursor="pointer"
        direction="column"
        color="brand.primaryText"
      >
        <Flex alignItems="center" gap={8}>
          <Stack width="100%">
            <Flex alignItems="center" justifyContent="space-between">
              <Flex gap={2} alignItems="center">
                <Heading as="h3" size="sm" color="brand.primary">
                  {task.title}
                </Heading>
              </Flex>
              <Flex gap={2}>
                <PopoverTrigger>
                  <IconButton
                    aria-label={"task item options"}
                    bg="brand.highlight2"
                  >
                    <FiMoreHorizontal />
                  </IconButton>
                </PopoverTrigger>
              </Flex>
            </Flex>
            <Text>{task.description}</Text>
            <Flex gap={1} alignItems="center">
              <Tag
                width="fit-content"
                bg="brand.success"
                color="brand.white"
                size="sm"
                borderRadius="1rem"
              >
                Progress
              </Tag>
            </Flex>
          </Stack>
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
            <Flex gap={1} alignItems="center">
              <FiMessageSquare />
              <Text>17</Text>
            </Flex>
            <Flex gap={1} alignItems="center">
              <FiLink2 />
              <Text>3</Text>
            </Flex>
          </Flex>
          <Flex gap={1}>
            <Avatar
              size="sm"
              src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"
            />
            <Avatar
              size="sm"
              src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"
            />
            <Avatar
              size="sm"
              src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189711/neno/avatars/icons8-walter-white.svg"
            />
          </Flex>
        </Flex>
        <Progress
          value={60}
          hasStripe
          size="sm"
          colorScheme="green"
          borderRadius="1rem"
        />
      </Flex>
    </Popover>
  );
};
