import { useFetch } from "../../hooks/useSwr";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { JourneyBluePrint } from "./JourneyBluePrint";


export const RecommendJourneys = () => {
    const { data, isLoading, isError } = useFetch("/journeys/cl6ifq3t90010llbt92ibevlf/list");

    if (isError) {
        return <Heading>So sad</Heading>;
    }

    if(data?.data?.length === 0) {
        return <p>no journeys</p>
    }

    return (
        <Flex direction="column" gap={4}>
            <Flex gap={4} flexWrap="wrap">
                {data?.data?.map((bluePrint) => (
                    <JourneyBluePrint bluePrint={bluePrint} key={bluePrint.id} />
                ))}
            </Flex>
        </Flex>
    );
};
