import { FC, useState, useRef, useEffect } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {
    Box,
    Stack,
    Text,
    Flex,
    Heading,
} from "@chakra-ui/react";
import { Card } from "ui";
import Link from "next/link";
import { Resource } from "@prisma/client";

import {
    FiVideo,
    FiExternalLink,
} from "react-icons/fi";

type ResourceCardProps = {
    resource: Resource;
}

export const ResourceCard: FC<ResourceCardProps> = ({ resource }) => {
    return (
        <Card>
        <Flex alignItems="center" justifyContent="space-between">
            <Flex gap={4} alignItems="center">
                <Box boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" color="brand.secondary" bg="brand.highlight1" p="4" borderRadius="1rem">
                    <FiVideo />
                </Box>
                <Stack>
                    <Heading size="xs">{resource.title}</Heading>
                    <Text color="brand.secondaryText">{resource.resourceUrl}</Text>
                </Stack>
            </Flex>
            <Flex gap={2} alignItems="center">
                <Link href={resource.resourceUrl}>
                    <FiExternalLink />
                </Link>
            </Flex>
        </Flex>
    </Card>
    )
}

type ListRecentlyAddedProps = {
    resources: Resource[];
}

export const ListRecentlyAdded: FC<ListRecentlyAddedProps> = ({ resources }) => {
    const [parent] = useAutoAnimate(/* optional config */)
    return (
        <Stack color="brand.primaryText">
            <Heading size="sm">Recently Added</Heading>
            <Stack ref={parent}>
                {
                    resources?.map(resource => (
                        <ResourceCard resource={resource} />
                    ))
                }
            </Stack>
        </Stack>
    );
}


