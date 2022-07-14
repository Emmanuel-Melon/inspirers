import { Flex, Heading, Text } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";


export const Insights = () => {
    return (
        <Flex direction="column" gap={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading color="brand.primary" size="md">Insights</Heading>
                <FiMoreVertical />
            </Flex>
            <Flex justifyContent="space-between">
                <Flex
                    bg="brand.primary"
                    p="4"
                    gap={8}
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    borderRadius="1rem"
                    direction="column"
                    color="brand.white"
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
                <Flex
                    bg="brand.white"
                    p="4"
                    gap={8}
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    borderRadius="1rem"
                    direction="column"
                    color="brand.primaryText"
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
                <Flex
                    bg="brand.white"
                    p="4"
                    gap={8}
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                    borderRadius="1rem"
                    direction="column"
                    color="brand.primaryText"
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
            </Flex>
        </Flex>
    )
}