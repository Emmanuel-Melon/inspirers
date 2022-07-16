import Layout from "../../layout/layout";
import NestedLayout from "../../layout/Nested";
import { client } from "../../utils/client";
import {
  Flex,
  Text, Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { TaskList } from "./components/TaskList";

export default function Tasks(props) {

  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <Flex justifyContent="space-between" width="100%"  gap={8}>
      <Flex
        flexGrow={1}
        borderRadius="0.5rem"
        direction="column"
      >
        <Flex
          w={"640px"}
          h="500px"
          overflowY="scroll"
          css={{
            "::-webkit-scrollbar": { display: "none" }
          }}
        >
          <TaskList tasks={data} />
        </Flex>
      </Flex>
      <Flex
        bg="rgba(102, 73, 0, 0.01)"
        boxShadow="rgba(0, 0, 0, 0.04) 0px 3px 5px"
        height="650px"
        borderRadius="1rem"

        flexGrow={1}
        direction="column"
      >
        <Heading>This is a heading</Heading>
        <Text>Simple text</Text>
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
  },
  {
    "id": 17,
    "title": "Pimpin",
    "userId": 1,
    "description": "Chilling and smoking here",
    "completed": false,
    "createdAt": "2022-07-05T09:44:21.664Z"
  }
];

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/api/tasks/user/cl5imusb0005800bt26o62b2m`)
  const data = await res.json();
  return { props: { tasks: data } }
}
