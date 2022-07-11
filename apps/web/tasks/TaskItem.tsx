import {
    Flex,
    Text, Heading,
    Stack
} from "@chakra-ui/react";
import { TaskObject } from "types/Task";

type TaskItemProps = {
    task: TaskObject;
}

export const TaskItem = ({ task }: TaskItemProps) => {
    return (
        <Flex
            boxShadow="rgba(120, 130, 164, 0.2) 0px 3px 5px"
            p="4"
            width={"100%"}
            borderRadius="16px"
            borderLeft="solid 0.25rem #fff"
            bg="#fff"
            cursor="pointer"
            _hover={{
                borderLeft: "solid 0.25rem",
                borderColor: "brand.accent",
                color: "brand.white",
                background: "rgba(55, 102, 0, 0.01)"
            }}
        >
            <Flex alignItems="center" gap={8}>
                <Stack>
                    <Heading as="h3" size="sm" color="brand.primary" m="0">{task.title}</Heading>
                    <Text color="#696969">{task.description}</Text>
                </Stack>
            </Flex>
        </Flex>
    );
}

