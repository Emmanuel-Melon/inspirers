import { Box, Flex, Heading, Stack, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiMap } from "react-icons/fi";
import { Card } from "ui";
import { RiRobotLine, RiBrush3Line } from "react-icons/ri";

export const Differentiators = () => {
    return (
        <VStack p="8" margin="0 auto" bg="brand.highlight1" gap={8}>
            <VStack flex="2" gap={4} textAlign="center">
                <Box>
                    <FiMap size="2rem" />
                </Box>
                <Heading as="h1" size="2xl">Why We are Different</Heading>
                <Text>
                    Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                </Text>
            </VStack>
            <VStack gap={8}>
                <Flex gap={8} alignItems="center">
                    <Box>
                        <FiMap size="2rem" />
                    </Box>
                    <Heading as="h1" size="2xl"
                        _after={{
                            bg: "linear-gradient(90.44deg, #F4C85A -7.46%, #E3A6F2 54.28%, #FBBE95 119.85%)",
                            display: "block",
                            content: '""',
                            width: "100%",
                            height: "15px",
                            marginTop: "-15px"
                        }}
                    >Why We are Different</Heading>
                    <Text>
                        Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                    </Text>
                    </Flex>
            </VStack>
            <VStack gap={8}>
                <Flex gap={8} alignItems="center">
                    <Box>
                        <RiRobotLine size="2rem" />
                    </Box>
                    <Stack>
                        <Heading>Automation</Heading>
                        <Text>Automate workflows and Resources</Text>
                    </Stack>
                </Flex>
                <Flex gap={8} alignItems="center">
                    <Box color="brand.accent">
                        <RiBrush3Line size="2rem" />
                    </Box>
                    <Stack>
                        <Heading>Customization</Heading>
                        <Text>Automate workflows and Resources</Text>
                    </Stack>
                </Flex>
                <Flex gap={8} alignItems="center">
                    <Box>
                        <RiRobotLine size="2rem" />
                    </Box>
                    <Stack>
                        <Heading>Personalization</Heading>
                        <Text>Automate workflows and Resources</Text>
                    </Stack>
                </Flex>
            </VStack>
        </VStack>
    )
}