import { Stack, Text } from "@chakra-ui/react";
import { JourneyCard } from "./components/JourneyCard";
import { Routine } from "@prisma/client";
import { FiMap } from "react-icons/fi";
import { EmptyState } from "ui";

type ListJourneysProps = {
    isLoading: boolean;
    isError: boolean;
    journeys: Routine[];
}

// this can be refactored to a dynamic component
// that takes in a list of data items and renders them
// as a list of cards
// this will be used for journeys, journeys, and tasks
// 
export const ListJourneys = ({ isLoading, isError, journeys }: ListJourneysProps) => {
    if (isError) {
        return <Text>Failed to Load Journeys</Text>
    }
    if (isLoading) {
        return <Text>Loading Journeys</Text>
    }
    if (journeys?.length === 0) {
        return (
            <EmptyState
                heading="Embark on a new Journey"
                description="Wake up early, sit straight, and meditate. It will give you a refreshing start to your day and help you be more productive. Try to plan your day before heading into the office. And remember to prioritize your tasks by importance."
                icon={<FiMap size="1.5rem" />}
            />
        )
    }
    return (
        <Stack gap={2} width="100%">
            {
                journeys?.map(journey => <JourneyCard journey={journey} key={journey.id} />)
            }
        </Stack>
    )
}