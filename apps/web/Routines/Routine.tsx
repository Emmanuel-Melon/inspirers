import {
    Avatar,
    Image,
    Img,
    Stack,
    Text,
    Link,
    Flex,
    Heading,
    Box,
    LinkBox,
    LinkOverlay,
    IconButton
} from "@chakra-ui/react";
import { Card } from "ui";
import { Routine } from "@prisma/client";
import { FiMoreHorizontal } from "react-icons/fi";
import moment from "moment";

type RoutineItemProps = {
    routine: Routine
}

export const RoutineItem = ({ routine }: RoutineItemProps) => {
    return (
        <LinkBox>
            <Card width="100%">
                <Flex justifyContent="space-between">
                    <Stack gap={2}>
                        <LinkOverlay href={`routines/${routine.id}`}>
                            <Heading size="sm">{routine.title}</Heading>
                        </LinkOverlay>
                        <Text>{routine.description}</Text>
                    </Stack>
                    <Stack alignItems="flex-end">
                        <IconButton aria-label={""} bg="brand.white" borderRadius="50%" _hover={{
                            bg: "brand.hovered"
                        }}>
                            <FiMoreHorizontal />
                        </IconButton>
                        <Text>{moment(routine.createdAt).fromNow()}</Text>
                    </Stack>
                </Flex>
            </Card>
        </LinkBox>
    )
}