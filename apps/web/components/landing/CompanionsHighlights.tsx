import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { RiTeamLine } from "react-icons/ri";
import { Card } from "ui";

export const CompanionsHighlights = () => {
    return (
        <VStack p="8" margin="0 auto">
            <VStack flex="2" gap={4} textAlign="center">
                <Box
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    p="4"
                    borderRadius="1rem"
                    bg="brand.white"
                    color="brand.secondary"
                >
                    <RiTeamLine size="2rem" />
                </Box>
                <Heading as="h3" size="md" color="brand.secondary">Connect with peers</Heading>
                <Heading size="lg" >Network with empowered folks who’re ready to go farther together</Heading>
                <Text size="lg" color="brand.secondaryText">
                    We’re in this together. Join our global community of like-minded peers. Discover and learn from those who share your aspirations, then stay connected to grow together. Collaborate in real-time using Inspirers Companion Mode! Inspirers is the platform you need for collectively achieving mind-blowing dreams.
                </Text>
            </VStack>
        </VStack>
    )
}