import { Avatar, Flex, Text, Heading, VStack, Box, Tag } from "@chakra-ui/react";
import { Button } from "ui";
import { FiFacebook, FiTwitter, FiLinkedin, FiEdit3 } from "react-icons/fi";


export const JourneyCard = ({ user }) => {

    return (
        <Flex
            bg="brand.highlight2"
            borderRadius="1rem"
            p="8"
            direction="column"
            color="brand.primaryText"
            width="100%"
        >
            <Flex
                gap={4}
                justifyContent="space-between"
                direction="column"
            >
                <VStack alignItems="flex-start" width="100%">
                    <Flex gap={2} flexWrap="wrap">
                        <Tag bg="brand.highlight">Tech</Tag>
                        <Tag bg="brand.highlight1">Software</Tag>
                        <Tag bg="brand.highlight">Mentorship</Tag>
                    </Flex>
                </VStack>
            </Flex>
        </Flex>
    );
}