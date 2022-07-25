import {
    Heading,
    Badge,
    Flex,
    Text,
    List,
    IconButton,
    VStack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    ListItem,
    ListIcon,
    Divider,
    Input,
    Icon,
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from "@chakra-ui/react";
import { useState } from "react";
import { DropWrapper } from "../../dnd";
import { Types } from "./types";
import { KanbanListItem } from "./KanbanListItem";
import {
    FiSliders,
    FiList,
    FiInfo,
    FiBell,
    FiCopy,
    FiTrash,
    FiArrowDown,
    FiPlus,
    FiX
} from "react-icons/fi";
import { Button } from "ui";
import { CustomModal } from "ui";

export const KanbanList = ({ list }) => {
    const [show, setShow] = useState(false);
    // state should live on board, shared by all lists
    function openModal() {
        setShow(true);
    }

    function closeModal() {
        setShow(false);
    }

    const [items, setItems] = useState([]);
    function onDrop(item, monitor) {
        setItems(prevState => {
            const newItems = prevState
                // @ts-ignore
                .filter(i => i.id !== item.id)
                .concat({ ...item });
            return [...newItems];
        });
    }
    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        });
    };

    return (
        <>
            <DropWrapper
                type={Types.CARD}
                onDrop={onDrop}
                index={1}
                moveItem={moveItem}
            >
                <Popover placement='right-start'>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>List Actions</PopoverHeader>
                        <PopoverBody>
                            <List color="brand.primaryText">
                                <ListItem color="brand.primaryText">
                                    <ListIcon as={FiCopy} />
                                    Copy
                                </ListItem>
                                <ListItem color="brand.primaryText">
                                    <ListIcon as={FiArrowDown} />
                                    Sort List
                                </ListItem>
                                <ListItem color="brand.primaryText">
                                    <ListIcon as={FiTrash} />
                                    Delete
                                </ListItem>
                            </List>
                        </PopoverBody>
                    </PopoverContent>
                    <VStack
                        borderRadius="1rem"
                        alignItems="flex-start"
                        width="350px"
                        bg="brand.highlight2"
                        py="2"
                        px="4"
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        height="500px"
                        color="brand.primaryText"
                    >
                        <Flex
                            justifyContent="space-between" width="100%"
                            alignItems="center"
                        >
                            <Editable defaultValue={list.name}>
                                <EditablePreview />
                                <EditableInput bg="brand.white" width="100%" />
                            </Editable>
                            <PopoverTrigger>
                                <IconButton
                                    bg="brand.white"
                                    color="brand.primary"
                                    aria-label={"info"}
                                    size="sm"
                                    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                                >
                                    <FiSliders />
                                </IconButton>
                            </PopoverTrigger>
                        </Flex>
                        <List
                            gap={4}
                            width="100%"
                            height="450px"
                            overflowY="scroll"
                        >
                            {list.cards.map(item => <KanbanListItem item={item} key={item._id}
                                openModal={openModal}
                            />)}
                        </List>
                        {
                            show ? (
                                <>
                                    <Flex direction="column" gap={2} width="100%">
                                        <Input placeholder="task name" width="100%" bg="white" borderRadius="1rem" />
                                        <Flex gap={2} alignItems="center">

                                            <Button
                                                size="sm"
                                                icon={<FiPlus />}
                                            >Add task</Button>
                                            <IconButton onClick={closeModal} size="sm" bg="brand.white">
                                                <FiX size="1.5rem" />
                                            </IconButton>
                                        </Flex>

                                    </Flex>
                                </>
                            ) : (
                                <>
                                    <Button
                                        icon={<FiPlus />}
                                        width="315px"
                                        bg="brand.white"
                                        color="brand.primary"
                                        onClick={openModal}
                                    >
                                        Add a task
                                    </Button>
                                </>
                            )
                        }
                    </VStack>
                </Popover>
            </DropWrapper>
        </>
    );
}