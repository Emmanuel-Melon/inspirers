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
    Checkbox, 
    CheckboxGroup,
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
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from "@chakra-ui/react";
import { Button, Card, CustomCheckbox, Modal, Input, LayoutController } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { FiFlag, FiPlayCircle, FiX, FiPlus, FiMoreHorizontal, FiUserPlus, FiTrash2 } from "react-icons/fi";
import { client } from "../../utils/client";
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
                    <Flex gap={2}>
                    <Checkbox
                        p="2"
                        borderRadius="0.5rem"
                        bg="brand.highlight1"
                    ></Checkbox>
                        <Heading size="sm" onClick={openModal}>{objective.title}</Heading>
                    </Flex>
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
                                <List spacing={2} color='brand.secondaryText'>
                                                <ListItem>
                                                    <ListIcon as={FiTrash2} color='brand.secondaryText' />
                                                    Delete
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={FiTrash2} color='brand.secondaryText' />
                                                    Delete
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={FiTrash2} color='brand.secondaryText' />
                                                    Delete
                                                </ListItem>
                                            </List>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        {
                            objective.active ? <Button size="sm">Continue</Button> : null
                        }
                    </Flex>
                </Flex>
            </Card>
            <Modal show={isOpen} close={closeModal}>
                <Stack h="50vh" w="50vh">
                    <Heading as="h2">{objective.title}</Heading>
                    <Text>Progress: {objective.progress}% </Text>
                    <Text>Companions</Text>
                    <Flex>
                        <Button onClick={closeModal}>Cancel</Button>
                        <Button>Edit</Button>
                    </Flex>
                </Stack>
            </Modal>
        </>
    )
}

const NewObjective = ({ closeEditor, onSave }) => {
    const [title, setTitle] = useState("");
    return (
        <Stack>
                    <Flex gap={4}>
            <Input
                placeholder="New objective"
                value={title}
                onChange={e => setTitle(e.target.value)}
                autoFocus
            />

        </Flex>
        <Flex gap={2}>
                <Button size="md" onClick={() => {
                    onSave({ title }).then(res => {
                        closeEditor();
                    });
                }}>Save</Button>
                                <IconButton size="md" bg="white" onClick={closeEditor}>
                    <FiX />
                </IconButton>
            </Flex>
        </Stack>
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
        return client.post(`/routines/${routine?.id}`, {
            ...data,
            routineId: routine?.id
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
                    <Heading size="sm" color="brand.secondary">My Quests</Heading>
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