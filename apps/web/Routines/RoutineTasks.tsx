import {
    Avatar,
    Image,
    Img,
    Stack,
    Text,
    Link,
    Flex,
    Heading,
    Tag,
    IconButton
} from "@chakra-ui/react";
import { Button, Card, CustomCheckbox } from "ui";
import { FiMoreHorizontal, FiArrowRight, FiLink } from "react-icons/fi";

const RoutineTask = ({ task }) => {
    return (
        <Card onClick={() => { }} bg={""}>
            <Flex gap={2} justifyContent="space-between">
                <Stack>
                    <Heading size="xs">Finish routines page</Heading>
                    <Flex gap={2}>
                        <Tag
                            size="sm"
                            width="fit-content"
                            bg="brand.highlight2"
                        >
                            Inspirers
                        </Tag>
                        <Tag
                            size="sm"
                            width="fit-content"
                            bg="brand.highlight3"
                        >
                            Inspirers
                        </Tag>
                        <Tag
                            size="sm"
                            width="fit-content"
                            bg="brand.highlight1"
                        >
                            Inspirers
                        </Tag>
                    </Flex>
                </Stack>
                <IconButton size="sm" bg="brand.primary" aria-label={""}>
                    <FiArrowRight />
                </IconButton>
            </Flex>
        </Card>
    )
}

export const RoutineTasks = ({ routine }) => {
    const tasks = [];
    return (
        <Stack alignItems="flex-start">
            <Flex justifyContent="space-between" width="100%">
                <Stack>
                    <Heading size="sm" color="brand.secondary">Tasks</Heading>
                    <Text color="brand.secondaryText">Break down your plans into tasks</Text>
                </Stack>
                <IconButton size="sm" bg="brand.highlight2" aria-label={""}>
                    <FiMoreHorizontal />
                </IconButton>
            </Flex>
            {
                tasks.length === 0 ? <Card>
                    <Flex gap={4} alignItems="center" justifyContent="space-between">
                        <Text color="brand.secondaryText">No Tasks Linked</Text>
                        <Button size="sm" icon={<FiLink />} bg="brand.highlight1">Link Task</Button>
                    </Flex>
                </Card> : tasks.map(task => <RoutineTask key={task.id} task={task} />)
            }
        </Stack>
    )
}