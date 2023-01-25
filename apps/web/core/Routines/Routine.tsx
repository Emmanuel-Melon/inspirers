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
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Tag,
    TagLeftIcon,
    TagLabel,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from "@chakra-ui/react";
import { Button, Card, IconButton } from "ui";
import { Routine, RoutineType } from "@prisma/client";
import { FiMoreHorizontal, FiTrash2, FiSunrise, FiBriefcase, FiHeart, FiBarChart2, FiClock, FiUsers } from "react-icons/fi";
import moment from "moment";
import { client } from "utils/client";
import { LinkFolderModal } from "Backpack/LinkFolder";



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
            <Card>
                <Flex justifyContent="space-between" >
                    <Flex gap={4} alignItems="center">

                        <Stack>
                            <LinkOverlay href={`routines/${routine.id}`}>
                                <Heading size="sm">{routine.title}</Heading>
                            </LinkOverlay>
                            <Text>{routine.description}</Text>
                        </Stack>
                    </Flex>
                    <Stack alignItems="flex-end">
                        <Popover>
                            <PopoverTrigger>
                                <IconButton aria-label={""} _hover={{
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
                        
                    </Stack>
                </Flex>
            </Card>
        </LinkBox>
    )
}

// <Tag width="fit-content" bg="brand.highlight3">{moment(routine.createdAt).format("h:mm")} - {moment(routine.createdAt).format("h:mm")} </Tag>