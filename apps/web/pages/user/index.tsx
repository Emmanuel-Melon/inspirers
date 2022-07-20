import Layout from "../../layout/layout";
import { Flex, Text, Heading } from "@chakra-ui/react";
import { TaskList } from "../tasks/components/TaskList";
import { useFetch } from "../../hooks/useSwr";

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


export default function Profile() {

  const { data, isLoading, isError } = useFetch("/users/5");
  if (isLoading) return <h3>Loading</h3>
  if (isError) return <h3>Error</h3>
  return (
    <Flex justifyContent="space-between" width="100%"  gap={8}>
        <Flex
          p="4"
          flexGrow={1}
          borderRadius="0.5rem"
          direction="column"
          gap={4}
        >
          <Heading color="brand.primary" as="h1" size="md">Tasks</Heading>
          <TaskList tasks={data} />
        </Flex>
        <Flex
          bg="rgba(102, 73, 0, 0.01)"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
          height="600px"
          borderRadius="1rem"
          p="4"
          flexGrow={1}
          direction="column"
        >
          <Text>Simple text</Text>
        </Flex>
      </Flex>
  );
}