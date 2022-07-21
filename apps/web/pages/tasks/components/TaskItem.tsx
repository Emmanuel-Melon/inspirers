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
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            p="4"
            width={"100%"}
            borderRadius="1rem"
            borderLeft="solid 0.25rem #fff"
            bg="#fff"
            cursor="pointer"
            _hover={{
                borderLeft: "dashed 0.25rem",
                borderColor: "brand.highlight",
                color: "brand.white"
            }}
        >
            <Flex alignItems="center" gap={8}>
                <Stack>
                    <Heading as="h3" size="sm" color="brand.primary">{task.title}</Heading>
                    <Text color="#696969">{task.description}</Text>
                </Stack>
            </Flex>
        </Flex>
    );
}

