import { useFetch } from "hooks/useSwr";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ResourceCard } from "core/Backpack/ListRecentlyAdded";
import { IconButton } from "ui";
import { FiMoreHorizontal } from "react-icons/fi";
import { ListFolders } from "core/Backpack/ListFolders";
import { Resource } from "@prisma/client";

export const ResourceList = () => {
    const { data: resources, isLoading, isError } = useFetch(`/backpacks/cl8bqg96n14593e1bt8hzr0u1e`);
    return (
        <Stack gap={4}>
            <Stack
                bg="brand.highlight1"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                p={4}
                borderRadius="1rem"
            >
                <ListFolders />
            </Stack>
            <Stack
                bg="brand.highlight1"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                p={4}
                borderRadius="1rem"
            >
                <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="sm">Recently Added</Heading>
                    <IconButton label="recently added settings" onClick={() => {} }>
                        <FiMoreHorizontal />
                    </IconButton>
                </Flex>
                {
                    resources?.map((resource: Resource) => {
                        return (
                            <ResourceCard resource={resource} />
                        )
                    })}
            </Stack>
        </Stack>
    )
}