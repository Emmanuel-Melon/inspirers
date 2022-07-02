import React, { useContext } from "react";
import {
    Flex,
    Text, Heading,
    Stack
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Avatar } from "ui";


export const TaskItem = ({ task }) => {
    // rgba(149, 157, 165, 0.2) 0px 8px 24px
    // #868b8e
    return (
        <Flex
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            p="8"
            width={"100%"}
            borderRadius="0.5rem"
            bg="#fff"
        >
            <Flex alignItems="center" gap={8}>
                <Avatar size='sm'  name='Dan Abrahmov' src='https://i1.sndcdn.com/avatars-000423224016-58aefd-t500x500.jpg' />
                <Stack>
                    <Heading as="h3" size="md" color="#4E4F50" m="0">{task.title}</Heading>
                    <Text color="#696969">It is timeless and versatile, making it a great partner to a wide variety of colors.</Text>
                </Stack>
            </Flex>
        </Flex>
    );
}
