import { FC } from "react";
import { Flex, Heading, Text, VStack, Badge } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

type Activity = {
    id: string;
    title: string;
    description: string;
}

type ActivityListProps = {
    activities: Activity[];
};

type ActivityProps = {
    activity: Activity;
};

const AcitivityCard: FC<ActivityProps> = ({ activity }) => {
    return (
        <Flex
            borderRadius="1rem"
            direction="column"
            color="brand.primaryText"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
            bg="#fff"
            p="4"
            width="100%"
        >
            <Flex gap={4} direction="column">
                <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="sm" color="brand.primaryeText" fontWeight="700">{activity.title}</Heading>
                    <FiMoreVertical />
                </Flex>
                <Text>
                    {activity.description}
                </Text>
            </Flex>
        </Flex>
    )
}


export const Activities: FC<ActivityListProps> = ({ activities = [] }) => {
    return (
        <Flex direction="column" gap={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading color="brand.primary" size="md">Activities</Heading>
                <Text
                    color="brand.primaryText"
                    bg="brand.highlight2"
                    fontWeight="700"
                    borderRadius="1rem"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    fontSize="12px"
                    px="2"
                    py="1px"
                >
                    View More
                </Text>
            </Flex>
            <VStack color="brand.primaryText">
                <br/>
            {
                activities && activities?.length === 0 || !activities ? <Badge colorScheme={'purple'}>Click get started to create your first task now ; )</Badge> : activities?.map(activity => <AcitivityCard activity={activity} key={activity.id} />)
            }
            </VStack>
        </Flex>
    )
}