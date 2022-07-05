import React, { useContext } from "react";
import {
    Flex,
    Text, Heading,
    Stack
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Avatar } from "ui";

// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; (number one choice)\\// box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

// box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
export const TaskItem = ({ task }) => {
    // rgba(149, 157, 165, 0.2) 0px 8px 24px
    // #868b8e
    return (
        <Flex
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            p="8"
            width={"100%"}
            borderRadius="0.5rem"
            bg="#fff"
        >
            <Flex alignItems="center" gap={8}>
                <Avatar size='sm'  name='Dan Abrahmov' src='https://i1.sndcdn.com/avatars-000423224016-58aefd-t500x500.jpg' />
                <Stack>
                    <Heading as="h3" size="md" color="#4E4F50" m="0">{task.title}</Heading>
                    <Text color="#696969">{task.description}</Text>
                </Stack>
            </Flex>
        </Flex>
    );
}
