import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiMap } from "react-icons/fi";
import { Card } from "ui";

export const Differentiators = () => {
    return (
        <VStack p="8" width="65%" margin="0 auto">
            <VStack flex="2" gap={4} textAlign="center">
                <Box>
                    <FiMap size="2rem" />
                </Box>
                <Heading as="h1" size="2xl">Why We're Different</Heading>
                <Text>
                    Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                </Text>
            </VStack>
        </VStack>
    )
}