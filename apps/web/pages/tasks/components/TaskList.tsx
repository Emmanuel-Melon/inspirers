import {
    Flex,
    VStack
} from "@chakra-ui/react";
import { TaskItem } from "./TaskItem";
import { TaskObject } from "types/Task";
import Image from "next/image";

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
        <VStack
            alignItems="flex-start"
            width={"600px"}
        >
            {
                tasks.map(task => <TaskItem task={task} key={task.id} />)
            }
        </VStack>
    );
}

