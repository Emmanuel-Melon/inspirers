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
    LinkBox, LinkOverlay
} from "@chakra-ui/react";
import { RoutineItem } from "./Routine";
import { Routine } from "@prisma/client";
import { FiRotateCw } from "react-icons/fi";

const EmptyState = () => {
    return (
        <Stack 
            bg="brand.highlight1" 
            p="8" 
            gap={4} 
            alignItems="center"
            borderRadius="1rem"
            textAlign="center"
        >
            <Box bg="brand.white" width="fit-content" p="4" borderRadius="1rem" color="brand.secondary">
                <FiRotateCw size="1.5rem" />
            </Box>
            <Heading size="sm">Create a new routine</Heading>
            <Text width="50%">Wake up early, sit straight, and meditate. It will give you a refreshing start to your day and help you be more productive. Try to plan your day before heading into the office. And remember to prioritize your tasks by importance.</Text>
        </Stack>
    )
}

type ListRoutinesProps = {
    isLoading: boolean;
    isError: boolean;
    routines: Routine[];
}

export const ListRoutines = ({ isLoading, isError, routines }: ListRoutinesProps) => {
    if (isError) {
        return <p>Failed to Load Routines</p>
    }

    if (isLoading) {
        return <p>Loading Routines</p>
    }
    if (routines?.length === 0) {
        return <EmptyState />
    }
    return (
        <Stack gap={2} width="100%">
            {
                routines?.map(routine => <RoutineItem routine={routine} key={routine.id} />)
            }
        </Stack>
    )
}