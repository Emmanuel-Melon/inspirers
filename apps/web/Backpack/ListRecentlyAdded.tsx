import { useState, useRef, useEffect } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import {
    Avatar,
    Box,
    Image,
    Img,
    Stack,
    Text,
    Flex,
    Heading,
} from "@chakra-ui/react";
import { Button, Card } from "ui";
import moment from 'moment';
import Link from "next/link";

import {
    FiVideo,
    FiExternalLink,
} from "react-icons/fi";
import { useFetch } from "../hooks/useSwr";

export const ResourceCard = ({ resource }) => {
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

export const ListRecentlyAdded = ({ resources }) => {
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


