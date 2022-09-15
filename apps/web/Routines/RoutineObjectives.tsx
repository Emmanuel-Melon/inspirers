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
    LinkBox, LinkOverlay,
    Progress,
    VStack,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Tag,
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
} from "@chakra-ui/react";
import { Button, Card, CustomCheckbox, CustomModal, TextInput, ViewNavigator } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { FiFlag, FiPlayCircle, FiClock, FiPlus, FiMoreHorizontal, FiUserPlus, FiTrash } from "react-icons/fi";
import { client } from "../utils/client";
import { Routine, RoutineType } from "@prisma/client";

const Objective = ({ deleteItem, objective }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsOpen(true);

    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Card>
                <Flex gap={2} alignItems="center" justifyContent="space-between">
                    <Flex>
                        <Heading size="sm" onClick={openModal}>{objective.title}</Heading>
                    </Flex>
                    <Stack>
                        <Flex gap={4}>
                            <IconButton size="sm" bg="brand.white">
                                <FiUserPlus />
                            </IconButton>
                        </Flex>
                    </Stack>
                    <Stack>
                        <Text color="brand.secondaryText">{objective.progress}% completed</Text>
                        <Progress
                            value={objective.progress}
                            hasStripe
                            size="sm"
                            colorScheme="green"
                            borderRadius="1rem"
                        />
                    </Stack>
                    <Flex gap={2}>
                        <IconButton size="sm" bg="brand.white">
                            <FiUserPlus />
                        </IconButton>
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
                                            onClick={() => deleteItem(objective.id)}
                                            icon={<FiTrash />}
                                        >
                                            Delete
                                        </Button>
                                    </Stack>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        {
                            objective.active ? <Button size="sm">Continue</Button> : null
                        }
                    </Flex>
                </Flex>
            </Card>
            <CustomModal show={isOpen} close={closeModal}>
                <Stack h="50vh" w="50vh">
                    <Heading as="h2">{objective.title}</Heading>
                    <Text>Progress: {objective.progress}% </Text>
                    <Progress
                        value={objective.progress}
                        hasStripe
                        size="sm"
                        colorScheme="green"
                        borderRadius="1rem"
                    />
                    <Text>Companions</Text>
                    <Flex>
                        <Button onClick={closeModal}>Cancel</Button>
                        <Button>Edit</Button>
                    </Flex>
                </Stack>
            </CustomModal>
        </>
    )
}

const NewObjective = ({ closeEditor, onSave }) => {
    const [title, setTitle] = useState("");
    return (
        <Flex gap={4}>
            <TextInput
                placeholder="New objective"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <Flex gap={2}>
                <Button size="md" bg="white" onClick={closeEditor}>Cancel</Button>
                <Button size="md" onClick={onSave}>Save</Button>
            </Flex>
        </Flex>
    )
}

type RoutineObjectivesProps = {
    routine: Routine
}


export const RoutineObjectives = ({ routine }: RoutineObjectivesProps) => {
    const [edit, setEdit] = useState(false);
    const closeEditor = () => {
        setEdit(false);
    }
    const onSave = (data) => {
        client.post(`/routines/${routine.id}`, {
            title: "Hello",
            routineId: routine.id
        })
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }

    const deleteItem = (objectiveId: string) => {
        client.delete(`/routines/${routine.id}/${objectiveId}`)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <Stack alignItems="flex-start" width="100%" color="brand.primaryText">
            <Flex gap={2} justifyContent="space-between" width="100%">
                <Stack>
                    <Heading size="sm" color="brand.secondary">Objectives</Heading>
                    <Text color="brand.secondaryText">Today, I will complete the following</Text>
                </Stack>
                <Flex gap={2}>

                    <IconButton size="sm" bg="brand.white" aria-label={""}>
                        <FiMoreHorizontal />
                    </IconButton>
                </Flex>
            </Flex>
            <Stack gap={2} width="100%">
                {
                    routine?.items?.length === 0 ? <Text>No Objectives</Text> : routine?.items?.map(objective => <Objective
                        objective={objective}
                        key={objective.id}
                        deleteItem={deleteItem}
                    />)
                }
                {
                    edit ? <NewObjective closeEditor={closeEditor} onSave={onSave} /> : <Button
                        size="sm"
                        width="fit-content"
                        icon={<FiPlus />}
                        onClick={() => setEdit(currentState => !currentState)}
                    >
                        Add Objective
                    </Button>
                }
            </Stack>
        </Stack>
    )
}