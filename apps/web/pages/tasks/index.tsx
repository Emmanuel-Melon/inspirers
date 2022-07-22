import { client } from "../../utils/client";
import { useState } from "react";
import {
  Flex,
  Text, Heading,
} from "@chakra-ui/react";
import { TaskList } from "./components/TaskList";
import { TaskViewMenu } from "./components/TaskViewMenu";
import { TaskBoard } from "./components/TaskBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Tasks(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("kanban");

  function addTaskItem(data) {
    setIsLoading(true);
    client.post("/api/tasks", {
      ...data,
      userId: 1,

    })
      .then(response => {
        setIsLoading(false);
      });
  }

  const changeView = (view) => {
    setView(view);
  }

  return (
    <Flex justifyContent="space-between" width="100%" gap={8}>
      <Flex
        flexGrow={1}
        borderRadius="0.5rem"
        direction="column"
        gap={8}
      >
        <TaskViewMenu changeView={changeView} view={view} />
        <Flex>
          {
            view === "list" ? (
              <Flex
                h="500px"
                overflowY="scroll"
                css={{
                  "::-webkit-scrollbar": { display: "none" }
                }}
              >
                <TaskList tasks={data} />
              </Flex>
            ) : (
              <DndProvider backend={HTML5Backend}>
                <TaskBoard />
              </DndProvider>
            )
          }
        </Flex>
      </Flex>
    </Flex>
  )
}

const data = [
  {
    "id": 14,
    "title": "Throw Some D's",
    "userId": 1,
    "description": "Rich boy selling crack",
    "completed": false,
    "createdAt": "2022-07-05T09:40:16.053Z"
  },
  {
    "id": 15,
    "title": "Out Here Grinding",
    "userId": 1,
    "description": "Making things look great",
    "completed": false,
    "createdAt": "2022-07-05T09:42:40.739Z"
  },
  {
    "id": 16,
    "title": "Hustler's Ambition",
    "userId": 1,
    "description": "Out here on a mission",
    "completed": false,
    "createdAt": "2022-07-05T09:43:32.044Z"
  }
];

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/api/tasks/user/cl5imusb0005800bt26o62b2m`)
  const data = await res.json();
  return { props: { tasks: data } }
}
