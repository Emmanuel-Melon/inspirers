import { Flex, Heading, Text } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";


export const Activities = () => {
    return (
        <Flex direction="column" gap={4}>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading color="brand.primary" size="md">Activities</Heading>
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
                direction="column"
                color="brand.primaryText"
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                bg="#fff"
                p="4"
                borderLeft="solid 0.2rem"
                borderColor="brand.white"
                _hover={{
                    background: "brand.hovered",
                    borderLeft: "solid 0.2rem",
                    borderColor: "brand.secondary"
                }}
                cursor="pointer"
            >
                <Flex gap={4} direction="column">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading size="sm" color="brand.primaryText">Finish the app</Heading>
                        <FiMoreVertical />
                    </Flex>
                    <Text>
                        Connect with friends to view their activity.
                    </Text>
                </Flex>
            </Flex>
            <Flex
                borderRadius="1rem"
                direction="column"
                color="brand.primaryText"
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                bg="#fff"
                p="4"
            >
                <Flex gap={4} direction="column">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Heading size="sm" color="brand.primaryeText" fontWeight="700">Write the article</Heading>
                        <FiMoreVertical />
                    </Flex>
                    <Text>
                        Connect with friends to view their activity.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}