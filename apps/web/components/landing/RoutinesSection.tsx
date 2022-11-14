import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { RiLightbulbFill } from "react-icons/ri";
import { Card } from "ui";

export const RoutinesSection = () => {
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
                    <RiLightbulbFill size="2rem" />
                </Box>
                <Heading
                    as="h3"
                    size="md"
                    _after={{
                        bg: "linear-gradient(91.27deg, #D1FEB5 48.92%, rgba(208, 245, 101, 0) 158.06%)",
                        display: "block",
                        content: '""',
                        width: "100%",
                        height: "15px",
                        marginTop: "-10px"
                    }}
                >
                    Create Custom Routines
                </Heading>
                <Heading size="lg">A personalized flow of action will help you achieve your goal quickly and effectively.  </Heading>
                <Text>
                    If you struggle with consistency, routines are your remedy. Routines are the building blocks of achieving your goals. Following a routine helps you to structure your days, grow new habits, and ensure consistency to achieve objectives and goals. Pace yourself and achieve your goals without burning out.
                </Text>
            </VStack>
        </VStack>
    )
}