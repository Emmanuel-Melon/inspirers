import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiMap } from "react-icons/fi";
import { Card } from "ui";

export const JourneyHighlights = () => {
    return (
        <VStack p="8" width="65%" margin="0 auto">
            <VStack flex="2" gap={4} textAlign="center">
                <Box>
                    <FiMap size="2rem" />
                </Box>
                <Heading as="h1" size="2xl">Choose your path</Heading>
                <Text>
                    Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                </Text>
            </VStack>
            <Flex gap={4}>
                <Card>
                    <Heading as="h1" size="md">Choose your path</Heading>
                    <Text>
                        Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                    </Text>
                </Card>
                <Card>
                    <Heading as="h1" size="md">Choose your path</Heading>
                    <Text>
                        Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                    </Text>
                </Card>
            </Flex>
        </VStack>
    )
}