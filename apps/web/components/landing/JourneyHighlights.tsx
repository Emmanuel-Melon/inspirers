import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiMap } from "react-icons/fi";
import { Card } from "ui";

export const JourneyHighlights = () => {
    return (
        <VStack p="8" margin="0 auto">
            <VStack flex="2" gap={8} textAlign="center">
                <Box
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    p="4"
                    borderRadius="1rem"
                    bg="brand.white"
                    color="brand.secondary"
                >
                    <FiMap size="2rem" />
                </Box>
                <Heading color="brand.secondary" size="md">Choose your path</Heading>
                <Heading size="xl">Choose the area of your improvement, i.e., tech, communication</Heading>
                <Text>
                    Create your goal and break it down into objectives. Choose whether your journey is public or private. When your journey is public, other inspirers can see your goal and objectives, you can let them access your backpack or not!
                </Text>
            </VStack>
            <Flex gap={4}>
                <Card>
                    <Box
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        p="4"
                        borderRadius="1rem"
                        bg="brand.white"
                        color="brand.secondary"
                        width="fit-content"
                    >
                        <FiMap size="2rem" />
                    </Box>
                    <Heading as="h1" size="md">Choose your path</Heading>
                    <Text>
                        Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                    </Text>
                </Card>
                <Card>
                    <Box
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        p="4"
                        borderRadius="1rem"
                        bg="brand.white"
                        color="brand.secondary"
                        width="fit-content"
                    >
                        <FiMap size="2rem" />
                    </Box>
                    <Heading as="h1" size="md">Choose your path</Heading>
                    <Text>
                        Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                    </Text>
                </Card>
            </Flex>
        </VStack>
    )
}