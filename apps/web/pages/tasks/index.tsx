import { client } from "../../utils/client";
import { useState } from "react";
import {
  Flex,
  Text,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { TaskList } from "./components/TaskList";
import { TaskViewMenu } from "./components/TaskViewMenu";
import { TaskBoard } from "./components/TaskBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "ui";

export default function Tasks(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("kanban");
  const { isOpen, onOpen, onClose } = useDisclosure();

  function addTaskItem(data) {
    setIsLoading(true);
    client
      .post("/api/tasks", {
        ...data,
        userId: 1,
      })
      .then((response) => {
        setIsLoading(false);
      });
  }

  const changeView = (view) => {
    setView(view);
  };

  return (
    <>
      <Flex justifyContent="space-between" width="100%" gap={8}>
        <Flex flexGrow={1} borderRadius="0.5rem" direction="column" gap={8}>
          <TaskViewMenu
            changeView={changeView}
            view={view}
            addNewJourney={onOpen}
          />
          <Flex>
            {view === "list" ? (
              <Flex gap={8}>
                <Flex
                  h="500px"
                  overflowY="scroll"
                  css={{
                    "::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  <TaskList tasks={data} />
                </Flex>
                <Flex direction="column" width={"35%"} gap={4}>
                  <Text>White</Text>
                  <Flex
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    p="4"
                    gap={4}
                    borderRadius="1rem"
                    bg="brand.white"
                  >
                    <Text>White</Text>
                  </Flex>
                </Flex>
              </Flex>
            ) : (
              <DndProvider backend={HTML5Backend}>
                <TaskBoard />
              </DndProvider>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

const data = [
  {
    id: 14,
    title: "Throw Some D's",
    userId: 1,
    description:
      "As a privat user, I want to keep the inspirational resources on my own board and use a personal planner..etc?",
    completed: false,
    createdAt: "2022-07-05T09:40:16.053Z",
  },
  {
    id: 15,
    title: "Out Here Grinding",
    userId: 1,
    description: "Making things look great",
    completed: false,
    createdAt: "2022-07-05T09:42:40.739Z",
  },
  {
    id: 16,
    title: "Hustler's Ambition",
    userId: 1,
    description: "Out here on a mission",
    completed: false,
    createdAt: "2022-07-05T09:43:32.044Z",
  },
];

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:5000/api/tasks/user/cl5imusb0005800bt26o62b2m`
  );
  const data = await res.json();
  return { props: { tasks: data } };
}
