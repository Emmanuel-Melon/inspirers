import {
    Heading,
    Badge,
    Flex,
    Text,
    List,
    IconButton,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { DropWrapper } from "../../../dnd";
import { Types } from "./types";
import { KanbanListItem } from "./KanbanListItem";
import { FiPlus, FiFilter, FiList, FiInfo, FiBell } from "react-icons/fi";
import { Button } from "ui";

const cards = [
    {
        _id: "1",
        name: "Onboard New Developers",
        status: "Progress",
        progress: 25,
        description: "purpose - create a nice environment so the user stays for longer"
    },
    {
        _id: "2",
        name: "Brainstorm logo ideas",
        status: "Review",
        progress: 65,
        description: "purpose - create a nice environment so the user stays for longer"
    },
    {
        _id: "2",
        name: "Brainstorm logo ideas",
        status: "Review",
        progress: 65,
        description: "purpose - create a nice environment so the user stays for longer"
    },
    {
        _id: "3",
        name: "Prepare video demo",
        status: "Blocked",
        progress: 15,
        description: "purpose - create a nice environment so the user stays for longer"
    }
];

/**
 * 
 * @param param0 ,
    {
        _id: "2",
        name: "Brainstorm logo ideas",
        status: "Review",
        progress: 65,
        description: "purpose - create a nice environment so the user stays for longer"
    },
    {
        _id: "3",
        name: "Prepare video demo",
        status: "Blocked",
        progress: 15,
        description: "purpose - create a nice environment so the user stays for longer"
    },
    {
        _id: "5",
        name: "Use dummy data",
        status: "Approved",
        progress: 94,
        description: "purpose - create a nice environment so the user stays for longer"
    }
 * @returns 
 */

export const KanbanList = ({ list }) => {
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
        <DropWrapper
            type={Types.CARD}
            onDrop={onDrop}
            index={1}
            moveItem={moveItem}
        >
            <VStack
                borderRadius="1rem"
                alignItems="flex-start"
                width="350px"
                bg="brand.highlight2"
                p="4"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                height="500px"
            >
                <Flex 
                    justifyContent="space-between" width="100%"
                    alignItems="center"
                >
                    <Heading size="sm">{list.name}</Heading>
                    <IconButton
                        bg="brand.white"
                        color="brand.primary"
                        aria-label={"info"}
                        size="sm"
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    >
                        <FiPlus />
                    </IconButton>
                </Flex>
                <List
                    gap={4}
                    width="100%"
                    height="400px"
                    overflowY="scroll"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                >
                    {cards.map(item => <KanbanListItem item={item} key={item._id} />)}
                </List>
                <Button
                    icon={<FiPlus />}
                    width="315px"
                    bg="brand.white"
                    color="brand.primary"
                >
                    Add a task
                </Button>
            </VStack>
        </DropWrapper>
    );
}