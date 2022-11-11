import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

import {
    Stack,
    Text,
    Flex,
    Heading,
    Box,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/react";
import { Button, Card, IconButton } from "ui";

import {
    FiMoreHorizontal,
    FiFolder,
    FiPlus
} from "react-icons/fi";

const categories = [
    {
        id: 1,
        title: "Documents",
        text: "56 files",
        icon: "",
    },
    {
        id: 2,
        title: "Music",
        text: "2 files",
        icon: "",
    },
    {
        id: 3,
        title: "Videos",
        text: "3 files",
        icon: "",
    }
]

export const Folder = ({ folder }) => {
    return (
        <LinkBox>
            <Card>
                <Flex gap={4}>
                    <Flex alignItems="center">
                        <Box
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                            color="brand.secondary"
                            fontWeight="700"
                            bg="brand.highlight1"
                            p="4"
                            borderRadius="1rem"
                        >
                            <FiFolder />
                        </Box>
                    </Flex>
                    <LinkOverlay href={`/backpack/${folder.title.toLowerCase()}`}>
                        <Stack>
                            <Heading size="sm">{folder.title}</Heading>
                            <Text color='brand.secondaryText'>{folder.text}</Text>
                        </Stack>
                    </LinkOverlay>
                </Flex>
            </Card>
        </LinkBox>

    )
}

export const ListFolders = () => {
    const addCategory = () => {

    }
    return (
        <Stack color='brand.primaryText'>
            <Flex justifyContent="space-between">
                <Heading size="md">Folders</Heading>
                <Flex gap={2}>
                    <IconButton>
                        <FiPlus />
                    </IconButton>
                    <IconButton>
                        <FiMoreHorizontal />
                    </IconButton>
                </Flex>
            </Flex>
            <Flex gap={4}>
                {categories.map(folder => <Folder key={folder.id} folder={folder} />)}
            </Flex>
        </Stack>
    );
}
