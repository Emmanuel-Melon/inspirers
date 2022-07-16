import { useFetch } from "../../../hooks/useSwr";
import {
    Flex,
    Text
} from "@chakra-ui/react";
import { JourneyBluePrint } from "./JourneyBluePrint";

export const ListBluePrints = () => {
    const { data, isLoading, isError } = useFetch("/journeys/blueprints");

    if(isError) {
        return <Text>So sad</Text>
    }

    return (
        <Flex gap={4} flexWrap="wrap">
            {
                data?.data?.map(bluePrint => <JourneyBluePrint bluePrint={bluePrint} key={bluePrint.id} />)
            }
        </Flex>
    )
}