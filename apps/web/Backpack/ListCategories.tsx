import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

import {
    Stack,
    Text,
    Flex,
    Heading,
    Box,
} from "@chakra-ui/react";
import { Button, Card, IconButton } from "ui";

import {    
    FiMoreHorizontal,
    FiFolder
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

export const Category = ({ category }) => {
    return (
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
                <Stack>
                    <Heading size="sm">{category.title}</Heading>
                    <Text color='brand.secondaryText'>{category.text}</Text>
                </Stack>
            </Flex>
        </Card>
    )
}

export const ListCategories = () => {
    const addCategory = () => {

    }
    return (
        <Stack color='brand.primaryText'>
            <Flex justifyContent="space-between">
                <Heading size="sm">Categories</Heading>
            </Flex>
            <Flex gap={4}>
                {categories.map(category => <Category key={category.id} category={category} />)}
            </Flex>
        </Stack>
    );
}
