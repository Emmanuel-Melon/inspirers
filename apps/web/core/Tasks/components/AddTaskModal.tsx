import { useContext } from "react";
import { JourneyContext } from "providers/JourneyProvider";
import { AddTask } from "./AddTask";
import { Flex } from "@chakra-ui/react";


export const AddTaskModal = () => {
    const context = useContext(JourneyContext);
    return (
        <AddTask 
            journey={context.journey}
            closeModal={() => {}} 
            addTask={() => {}} 
            isLoading={false}
        />
    )
}