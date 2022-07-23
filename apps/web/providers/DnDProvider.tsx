import React, { createContext, useContext } from "react";

export const DragContext = createContext();

export const DragProvider = ({ children }) => {
  const Drag = useProvideDrag();
  return (
    <DragContext.Provider value={Drag}>
      {children}
    </DragContext.Provider>
  )
}

export const useDrag = () => {
  return useContext(DragContext);
};

function dragItem () {
  console.log("moving this list!");
}

function dropItem () {
  console.log("moving this list!");
}

function useProvideDrag () {
  return {
    dragItem,
    dropItem
  }
}