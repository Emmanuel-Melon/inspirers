import { Heading, Flex, Stack, Text } from "@chakra-ui/react";
import { FiBook } from "react-icons/fi";

const resources = [
    {
        id: 1,
        title: "Practicial",
        description: "You don’t get better at swimming by watching others."
    },
    {
        id: 2,
        title: "Faster than videos",
        description: "Videos are holding you back."
    },
    {
        id: 3,
        title: "Hello",
        description: "Start learning immediately instead of fiddling with SDKs and IDEs."
    },
    {
        id: 4,
        title: "Progress you can show",
        description: "Built in assessments let you test your skills. "
    }
]

export const ResourcesOverview = () => {
    return (
        <Stack>
            <Heading size="md">Resources</Heading>
            <Text>Follow this journey</Text>
            <Flex gap={4} flexWrap="wrap">
                {
                    resources.map(resource => (
                        <Stack 
                            width="40%" 
                            bg="brand.white"
                            borderRadius="1rem"
                            p="4"
                            key={resource.id}
                        >
                            <Flex alignItems="center" gap={2}>
                                <FiBook size="2rem" color="#E79C2A" />
                                <Heading size="sm">{resource.title}</Heading>
                            </Flex>
                            <Text>
                                {resource.description}
                            </Text>
                        </Stack>
                    ))
                }
            </Flex>
        </Stack>
    );
}