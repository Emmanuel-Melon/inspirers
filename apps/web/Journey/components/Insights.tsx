import { FC } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

type Insight = {
    id: string;
    title: string;
    description: string;
    type: "primary" | "secondary";
}

type InsightsProps = {
    insights: Insight[];
};

type InsightCardProps = {
    insight: Insight;
};

const InsightCard: FC<InsightCardProps> = ({ insight }) => {
    return (
        <Flex
            borderRadius="1rem"
            direction="column"
            color="brand.primaryText"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
            bg={insight.type === "primary" ? "brand.primary" : "brand.white"}
            p="4"
            width="100%"
        >
            <Flex gap={8} >
                <Text fontWeight="700">People Reached</Text>
                <Text>9%</Text>
            </Flex>
            <Flex gap={8} justifyContent="space-between">
                <Text>1995</Text>
                <Text>Learn More</Text>
            </Flex>
        </Flex>
    )
}


export const Insights: FC<InsightsProps> = ({ insights = [] }) => {
    return (
        <Flex direction="column" gap={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading color="brand.primary" size="md">Insights</Heading>
                <FiMoreVertical />
            </Flex>
            <Flex justifyContent="space-between">
                {
                    insights && insights.map(insight => <InsightCard insight={insight} key={insight.id} />)
                }
            </Flex>
        </Flex>
    )
}