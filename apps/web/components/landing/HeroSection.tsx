import { Flex, Heading, VStack, Text, Container } from "@chakra-ui/react";
import Image from "next/image";

export const HeroSection = () => {
    return (
        <Container p="8" margin="0 auto">
            <VStack flex="2" gap={4} textAlign="center">
                <Heading as="h1" size="2xl">Achieve your dreams and Inspire others.</Heading>
                <Text>
                    Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                </Text>
            </VStack>
        </Container>
    )
}