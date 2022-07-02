import Layout from "../layout/layout";
import { AddTaskItem, TaskItem } from "ui";
import { client } from "../utils/client";
import { useEffect, useState } from "react";
import {
  Flex,
  Text, Heading,
  VStack
} from "@chakra-ui/react";

export default function Tasks(props) {
  const [success, setSuccess] = useState(false);

  function addTaskItem(title: string) {
    client.post("/api/tasks", {
      title,
      userId: 1
    })
      .then(response => {
        setSuccess(true);
      });
  }

  useEffect(() => {

  }, [success]);

  return (
    <Layout>
      <Flex justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="sm" color="#4E4F50" m="0">Welcome back, Eman</Heading>
      
      </Flex>
      <Text color="#696969" >You've got 7 active tasks</Text>
      <AddTaskItem addTaskItem={addTaskItem} />
      <VStack
        alignItems="flex-start"
        width={"600px"}>
        {
          props?.tasks?.data?.map(task => <TaskItem task={task} key={task.id} />)
        }
      </VStack>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5000/api/tasks/user/1`)
  const data = await res.json();

  // Pass data to the page via props
  return { props: { tasks: data } }
}
