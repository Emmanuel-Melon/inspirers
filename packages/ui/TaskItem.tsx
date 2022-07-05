import {
    Flex,
    Text, Heading,
    Stack
} from "@chakra-ui/react";
import { Avatar } from "ui";

export const TaskItem = ({ task }) => {
    return (
        <Flex
            boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px"
            p="8"
            width={"100%"}
            borderRadius="0.2rem"
            borderLeft="solid 0.25rem #fff"
            bg="#fff"
            cursor="pointer"
            _hover={{
                borderLeft: "solid 0.25rem #3e2145",
                color: "brand.white",
                background: "#FFFFF0"
            }}
        >
            <Flex alignItems="center" gap={8}>
                <Avatar size='sm'  name={task.title} src='https://i1.sndcdn.com/avatars-000423224016-58aefd-t500x500.jpg' />
                <Stack>
                    <Heading as="h3" size="md" color="#003c66" m="0">{task.title}</Heading>
                    <Text color="#696969">{task.description}</Text>
                </Stack>
            </Flex>
        </Flex>
    );
}
