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
                borderLeft: "dashed 0.25rem",
                borderColor: "brand.highlight",
                color: "brand.white"
            }}
        >
            <Flex alignItems="center" gap={8}>
                <Stack>
                    <Heading as="h3" size="sm" color="brand.primaryText">{task.title}</Heading>
                    <Text color="#696969">{task.description}</Text>
                </Stack>
            </Flex>
        </Flex>
    );
}

