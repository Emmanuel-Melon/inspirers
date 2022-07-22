import {
    Flex,
    VStack,
    Text
} from "@chakra-ui/react";
import { TaskItem } from "./TaskItem";
import { TaskObject } from "types/Task";
import Image from "next/image";
import { FiCheck, FiFilter, FiCalendar } from "react-icons/fi";

type TaskListProps = {
    tasks: TaskObject[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
    if (tasks.length === 0) {
        return (
            <Flex
                alignItems="center"
                gap={8}
                marginTop="8"
                p="4"
                justifyContent={"center"}
            >
                <Image
                    alt="empty"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8Y6jlyyGKX4Xok7Q6ro0TwI-hCCHLP1zovBevgm_JsTiTnbQXbT9UMCt2YOhDBOjHwo&usqp=CAU' height="300px"
                />
            </Flex>
        )
    }

    return (
        <VStack alignItems="flex-start">
            <Flex width="100%" gap={8} py="4" justifyContent="space-between">
                <Flex gap={2} alignItems="center">
                    <FiCheck />
                    <Text>2/7 tasks completed</Text>
                </Flex>
                <Flex gap={2} alignItems="center">
                    <FiCalendar />
                    <Text>2 tasks due</Text>
                </Flex>
                <Flex gap={2} alignItems="center">
                    <FiFilter />
                    <Text>Filter</Text>
                </Flex>
                <Text>View More</Text>
            </Flex>
            <VStack
                alignItems="flex-start"
                marginTop="4"
                width="100%"
            >
                {
                    tasks.map(task => <TaskItem task={task} key={task.id} />)
                }
            </VStack>
        </VStack>
    );
}

