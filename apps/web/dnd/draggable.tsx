import { Flex } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { useDrag } from "react-dnd";



type DragWrapperProps = {
  moveItem: Function;
  type: string;
  item: any;
}

export const DragWrapper: FunctionComponent<DragWrapperProps> = ({ moveItem, children, type, item }) => {
  const [{isDragging}, drag]: any = useDrag(() =>({
    type: type,
    item
  }));
  return (
    <Flex 
      ref={drag}
      style={{ opacity: isDragging ? 0 : 1 }}
    >
      {children}
    </Flex>
  )
};
