import { FC } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

type Milestone = {
    id: string;
    title: string;
    description: string;
}

type MileStonesProps = {
    milestones: Milestone[];
};

export const Milestones: FC<MileStonesProps> = ({ milestones }) => {
    return (
        <Flex direction="column" gap={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading color="brand.primary" size="md">Milestones</Heading>
                <Text
                    color="brand.secondary"
                    bg="brand.highlight"
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
            <Flex
                borderRadius="1rem"
                color="brand.primaryText"
                gap={4}
            >
                {
                    milestones.map(( milestone) => <Text key={milestone.id}>Empty State</Text>)
                }
            </Flex>
        </Flex>
    )
}