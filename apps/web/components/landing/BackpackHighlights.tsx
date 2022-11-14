import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiMap } from "react-icons/fi";
import { Card } from "ui";
import { RiSuitcase2Line } from "react-icons/ri";

export const BackpackHighlights = () => {
    return (
        <VStack p="8" margin="0 auto">
<<<<<<< HEAD
            <VStack flex="2" gap={4} textAlign="center">
=======
            <VStack flex="2" gap={8} textAlign="center">
>>>>>>> 4fe53ce (fix: remove dark background:)
                <Box
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    p="4"
                    borderRadius="1rem"
                    bg="brand.white"
                    color="brand.secondary"
                >
                    <RiSuitcase2Line size="2rem" />
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
                >Don’t Be Overwhelmed </Heading>
                <Heading size="lg">No need for a bunch of redundant links and tabs. The key is to keep it simple. </Heading>
                <Text>
                    With your goals, gather the necessary resources and organize them accordingly for easy reach and future reference.
                    The Inspirers Backpack is the ultimate resource feature that will allow you to have your books, articles, mood boards, tutorials, podcasts, videos, and more at your fingertips. You can sync your resources to your individual tasks to save time. Stay organized and put an end to information clutter.

                </Text>
            </VStack>
            <Flex gap={4}>
                <Card>
                    <Heading size="md">Chrome Extension</Heading>
                    <Text>
                        Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                    </Text>
                </Card>
                <Card>
                    <Heading size="md">Import Data</Heading>
                    <Text>
                        Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                    </Text>
                </Card>
                <Card>
                    <Heading size="md">Clone</Heading>
                    <Text>
                        Go on an amazing journey with Inspirers and get inspired by the people who are doing what you aspire to do. Advice, motivation, and encouragement are at your fingertips.
                    </Text>
                </Card>
            </Flex>
        </VStack>
    )
}