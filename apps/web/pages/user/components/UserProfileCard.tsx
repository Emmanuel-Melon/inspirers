import { Avatar, Flex, Text, Heading, VStack } from "@chakra-ui/react";
import { Button } from "ui";
import { FiMoreVertical, FiPlus, FiMessageCircle } from "react-icons/fi";


export const UserProfileCard = ({ user }) => {

    return (
        <Flex
            bg="brand.white"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            borderRadius="1rem"
            p="8"
            direction="column"
            color="brand.primaryText"
            gap={8}
            alignItems="center"
            width="100%"

        >
            <Flex
                gap={4}
                alignItems="center"
            >
                <Avatar src={user.image} />
                <VStack alignItems="flex-start">
                    <Heading size="md">{user.name}</Heading>
                    <Text>Software Developer</Text>
                </VStack>
                <FiMoreVertical />
            </Flex>
            <Flex gap={4}>
                <Button 
                    bg="brand.white" 
                    color="brand.primaryText"
                    onClick={() => {}}
                    icon={<FiMessageCircle />}
                    >
                        Message
                    </Button>
                <Button 
                    onClick={() => {}}
                    icon={<FiPlus />}
                >Follow</Button>
            </Flex>
        </Flex>
    );
}