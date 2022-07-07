import Layout from "../layout/layout";
import { AddTaskItem, TaskItem } from "ui";
import { client } from "../utils/client";
import {
  Flex,
  Text, Heading,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";

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
    <Layout>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="sm" color="#4E4F50" m="0">Welcome back, Eman</Heading>
      </Flex>
      {
        props?.tasks?.data?.length > 0 ? <Text color="#696969" >You've got {props?.tasks?.data?.length} active tasks</Text> : null
      }

      <AddTaskItem addTaskItem={addTaskItem} isLoading={isLoading} />
      <VStack
        h="420px"
        overflowY="scroll"
        alignItems="flex-start"
        width={"610px"}>
        {
          props?.tasks?.data?.length > 0 ?
            props?.tasks?.data?.map(task => <TaskItem task={task} key={task.id} />) : (
              <>
                <Flex alignItems="center" gap={8} marginTop="8" p="4" justifyContent={"center"}>
                  <img size='sm' alt="empty" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8Y6jlyyGKX4Xok7Q6ro0TwI-hCCHLP1zovBevgm_JsTiTnbQXbT9UMCt2YOhDBOjHwo&usqp=CAU' height="300px" />
                </Flex>
              </>
            )
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
