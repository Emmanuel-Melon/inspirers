import { Flex } from "@chakra-ui/react";
import React, { cloneElement, useRef } from "react";
// import { useDrop, XYCoord } from "react-dnd";

export const DropWrapper = ({
  onDrop,
  children,
  type,
  index,
  moveItem,
}: any) => {
  /**
   * const ref: any = useRef(null);
  const [{ isOver }, drop] = useDrop({
    accept: type,
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition: XYCoord | null = monitor.getClientOffset();
      const hoverClientY: any =
        // @ts-ignore
        mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item, monitor) => {
      onDrop(item, monitor);
    },
  });

  {cloneElement(children, { isOver })}
  ref={drop}
   */

  return <Flex >
    hey
  </Flex>;
};
