import {
    Flex,
    VStack,
    Avatar,
    Text,
    Button,
    Heading
} from "@chakra-ui/react";
import { TaskObject } from "types/Task";
import Image from "next/image";

type ListUsersProps = {
    users: TaskObject[];
}

export const ListUsers = ({ users }: ListUsersProps) => {

    return (
        <VStack
            alignItems="flex-start"
            color="brand.primaryText"
            gap={4}
            marginTop="4"
        >
            {
                users.map(user => (
                    <Flex
                        width="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        cursor="pointer"
                        borderRadius="1rem"
                        p="2"
                        _hover={{
                            bg: "brand.highlight1"
                        }}
                    >
                        <Flex alignItems="center" gap={2}>
                            <Avatar src={user.image} />
                            <VStack alignItems="flex-start">
                                <Heading size="xs" color="brand.primary">{user.name}</Heading>
                                <Text>@username</Text>
                            </VStack>
                        </Flex>
                        <Button
                            size="sm"
                            alignItems="center"
                            borderRadius="1rem"
                            bg="brand.primary"
                            color="brand.white"
                        >Follow</Button>
                    </Flex>)
                )
            }
        </VStack>
    );
}

