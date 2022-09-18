import { Stack, Text } from "@chakra-ui/react";
import { RoutineItem } from "./Routine";
import { Routine } from "@prisma/client";
import { FiRotateCw } from "react-icons/fi";
import { EmptyState } from "ui";

type ListRoutinesProps = {
    isLoading: boolean;
    isError: boolean;
    routines: Routine[];
}

export const ListRoutines = ({ isLoading, isError, routines }: ListRoutinesProps) => {
    if (isError) {
        return <Text>Failed to Load Routines</Text>
    }
    if (isLoading) {
        return <Text>Loading Routines</Text>
    }
    if (routines?.length === 0) {
        return (
            <EmptyState
                heading="Create a new routine"
                description="Wake up early, sit straight, and meditate. It will give you a refreshing start to your day and help you be more productive. Try to plan your day before heading into the office. And remember to prioritize your tasks by importance."
                icon={<FiRotateCw size="1.5rem" />}
            />
        )
    }
    return (
        <Stack gap={2} width="100%">
            {
                routines?.map(routine => <RoutineItem routine={routine} key={routine.id} />)
            }
        </Stack>
    )
}