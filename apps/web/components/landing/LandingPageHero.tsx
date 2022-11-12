import { Flex, Heading, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";

export const LandingPageHero = () => {
    return (
        <VStack p="8"  width="65%" margin="0 auto">
            <VStack flex="2" gap={4} textAlign="center">
                <Heading as="h1" size="2xl">Achieve your dreams and Inspire others.</Heading>
                <Text>
                    Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                </Text>
            </VStack>
        </VStack>
    )
}