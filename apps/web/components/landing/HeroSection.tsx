import { Box, Flex, Heading, VStack, Text, Container } from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "ui";

export const HeroSection = () => {
    return (
        <Container p="8" margin="0 auto">
            <VStack flex="2" gap={4} textAlign="center">
                <Heading as="h1" size="2xl">Achieve your <Box as="span" color="brand.primary">dreams</Box> and <Box as="span" color="brand.secondary">inspire</Box> others.</Heading>
                <Text fontSize="16px">
                    Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                </Text>
                <Button>Get Inspired</Button>
            </VStack>
        </Container>
    )
}