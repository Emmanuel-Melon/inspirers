import { Flex, Text } from "@chakra-ui/react";
import { DragWrapper, DropWrapper } from "../../../dnd";
import { Types } from "./types";
import { KanbanList } from "./KanbanList";

const lists = [
    {
        _id: "1",
        name: "Todo"
    },
    {
        _id: "2",
        name: "Doing"
    },
    {
        _id: "3",
        name: "Review"
    },
    {
        _id: "4",
        name: "Backlog"
    }
];

export const TaskBoard = () => {
    function onDrop(item, monitor) {

    }

    function moveItem() {
        console.log("moved");
    }

    return (
        <>
            <DropWrapper
                type={Types.LIST}
                onDrop={onDrop}
                index={1}
            >
                <Flex gap={4} overflowX="scroll" width="1200px">
                    {
                        lists && lists.map((list, index) => (
                            <DragWrapper
                                type={Types.LIST}
                                moveItem={moveItem}
                                item={list}
                            >
                                <KanbanList list={list} key={list._id} index={index} />
                            </DragWrapper>))
                    }
                </Flex>

            </DropWrapper>
        </>
    );
}