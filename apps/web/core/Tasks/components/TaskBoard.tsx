import { Flex, Text } from "@chakra-ui/react";
import { DragWrapper, DropWrapper } from "../../../dnd";
import { Types } from "./types";
import { KanbanList } from "./KanbanList";


export const TaskBoard = ({ tasks }) => {
  function onDrop(item, monitor) {}

  function moveItem() {
    console.log("moved");
  }

  return (
    <>
      <DropWrapper type={Types.LIST} onDrop={onDrop} index={1}>
        <Flex gap={4} overflowX="scroll">
          {tasks &&
            tasks.map((list, index) => (
              <DragWrapper type={Types.LIST} moveItem={moveItem} item={list}>
                <KanbanList list={list} key={list._id} index={index} />
              </DragWrapper>
            ))}
        </Flex>
      </DropWrapper>
    </>
  );
};
