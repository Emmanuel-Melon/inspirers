import { useState } from "react";
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
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Tag
} from "@chakra-ui/react";
import { Button, Card } from "ui";
import { Routine, RoutineType } from "@prisma/client";
import { FiMoreHorizontal, FiTrash2, FiSunrise, FiBriefcase, FiHeart } from "react-icons/fi";
import moment from "moment";
import { client } from "utils/client";



type RoutineItemProps = {
    routine: Routine
}

export const RoutineItem = ({ routine }: RoutineItemProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const deleteRoutine = () => {
        setIsLoading(true);
        client.delete(`/routines/${routine.id}`).then(res => {
            console.log(res);
            setIsLoading(false);
            cancel();
        })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }
    return (
        <LinkBox >
            <Card width="100%" >
                <Flex justifyContent="space-between">
                    <Flex gap={4} alignItems="center">
                        <Box
                            bg="brand.highlight1"
                            p="4"
                            borderRadius="1rem"
                            color="brand.secondary"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        >
                            { routine.type === RoutineType.Productivity ? <FiBriefcase size="1.5rem" /> : null }
                            { routine.type === RoutineType.Wellness ? <FiHeart size="1.5rem" /> : null }
                            
                        </Box>
                        <Stack>
                        <Stack>
                        <Tag width="fit-content" bg="brand.highlight3">{moment(routine.createdAt).format("h:mm")} - {moment(routine.createdAt).format("h:mm")} </Tag>
                        </Stack>
                            <LinkOverlay href={`routines/${routine.id}`}>
                                <Heading size="sm">{routine.title}</Heading>
                            </LinkOverlay>
                            <Text>{routine.description}</Text>
                        </Stack>
                    </Flex>
                    <Stack alignItems="flex-end">

                        <Popover>
                            <PopoverTrigger>
                                <IconButton aria-label={""} bg="brand.white" borderRadius="50%" _hover={{
                                    bg: "brand.hovered"
                                }}>
                                    <FiMoreHorizontal />
                                </IconButton>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Manage Routine</PopoverHeader>
                                <PopoverBody>
                                    <Stack>
                                        <Button
                                            size="sm"
                                            onClick={deleteRoutine}
                                            icon={<FiTrash2 />}
                                        >
                                            Delete
                                        </Button>
                                    </Stack>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Text>{moment(routine.createdAt).fromNow()}</Text>
                    </Stack>
                </Flex>
            </Card>
        </LinkBox>
    )
}