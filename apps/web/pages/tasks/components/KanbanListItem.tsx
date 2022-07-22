import {
    Avatar,
    Flex,
    Heading,
    Progress,
    Text,
    Tag
} from "@chakra-ui/react";
import { FiMoreHorizontal, FiMessageSquare, FiList, FiInfo, FiBell, FiCheckSquare, FiLink2 } from "react-icons/fi";

const colors = {
    Progress: "brand.secondary",
    Blocked: "brand.danger",
    Review: "blue",
    Pending: "brand.accent",
    Approved: "brand.success"
}

export const KanbanListItem = ({ item }) => {
    return (
        <Flex
            bg="brand.white"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px"
            p="4"
            borderRadius="1rem"
            my="2"
            direction="column"
            gap={4}
            cursor="pointer"
            _hover={{
                bg: "brand.highlight"
            }}
            color="brand.primaryText"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm" color="brand.primary">{item.name}</Heading>
                <FiMoreHorizontal />
            </Flex>
            <Flex gap={2}>
                <Tag
                    width="fit-content"
                    bg={colors[item.status]}
                    color="brand.white"
                >
                    {item.status}
                </Tag>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
                <Flex
                    gap={4}
                    bg="brand.highlight2"
                    py="1"
                    px="4"
                    color="brand.primary"
                    borderRadius="1rem"
                >
                    <Flex gap={1} alignItems="center">
                        <FiBell />
                        <Text>35</Text>
                    </Flex>
                    <Flex gap={1} alignItems="center">
                        <FiCheckSquare />
                        <Text>3/5</Text>
                    </Flex>
                    <Flex gap={1} alignItems="center">
                        <FiMessageSquare />
                        <Text>17</Text>
                    </Flex>
                    <Flex gap={1} alignItems="center">
                        <FiLink2 />
                        <Text>3</Text>
                    </Flex>
                </Flex>
                <Flex gap={2}>
                    <Avatar
                        size="xs"
                        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"
                    />
                    <Avatar
                        size="xs"
                        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"
                    />
                </Flex>
            </Flex>
            <Progress
                value={item.progress}
                hasStripe
                size='sm'
                colorScheme='green'
                borderRadius="1rem"
            />
        </Flex>
    );
}