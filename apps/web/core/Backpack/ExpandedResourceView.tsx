import React, { useState } from "react";
import {
    Flex,
    Text,
    Heading,
    Select,
    Stack,
    Tag,
    Divider,
    Box
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";

import { Button, Card, IconButton, Input } from "ui";
import {
    FiPlus,
    FiTrash,
    FiCheck,
    FiTag,
    FiUserPlus,
    FiLink2,
    FiClock,
    FiX,
    FiLink,
    FiImage,
    FiVideo,
    FiMoreHorizontal,
    FiEye,
    FiArrowLeft,
    FiRotateCw,
    FiLock
} from "react-icons/fi";
import { client } from "utils/client";
import { ResourceType } from "@prisma/client";

export const ExpandedResourceView = ({ previousView, toggleView }) => {
    return (
        <Stack p="8" gap={2} color="brand.primaryText">
            <Flex alignItems="center" gap={4}>
                <IconButton onClick={previousView}>
                    <FiArrowLeft />
                </IconButton>
                <Heading size="sm">Manage your rsource</Heading>
            </Flex>
            <Flex gap={2} flexWrap="wrap">
                <Card bg="brand.highlight3" onClick={() => toggleView("image")}>
                    <Flex gap={4} alignItems="center">
                        <Box as="span" bg="brand.highlight3" p="2" borderRadius="1rem">
                            <FiImage />
                        </Box>
                        <Text>Image</Text>
                    </Flex>
                </Card>
                <Card  onClick={() => toggleView("video")}>
                    <Flex gap={4} alignItems="center">
                        <Box as="span" bg="brand.highlight3" p="2" borderRadius="1rem">
                            <FiVideo />
                        </Box>
                        <Text>Video</Text>
                    </Flex>
                </Card>
                <Card onClick={() => toggleView("invite")}>
                    <Flex gap={4} alignItems="center">
                        <Box as="span" bg="brand.highlight3" p="2" borderRadius="1rem">
                            <FiUserPlus />
                        </Box>
                        <Text>Invite Compnions</Text>
                    </Flex>
                </Card>
                <Card onClick={() => toggleView("routine")}>
                    <Flex gap={4} alignItems="center">
                        <Box as="span" bg="brand.highlight3" p="2" borderRadius="1rem">
                            <FiRotateCw />
                        </Box>
                        <Text>Link to Routine</Text>
                    </Flex>
                </Card>
                <Card onClick={() => toggleView("tag")}>
                    <Flex gap={4} alignItems="center">
                        <Box as="span" bg="brand.highlight3" p="2" borderRadius="1rem">
                            <FiTag />
                        </Box>
                        <Text>Tags</Text>
                    </Flex>
                </Card>
                <Card onClick={() => toggleView("privacy")}>
                    <Flex gap={4} alignItems="center">
                        <Box as="span" bg="brand.highlight3" p="2" borderRadius="1rem">
                            <FiLock />
                        </Box>
                        <Text>Privacy</Text>
                    </Flex>
                </Card>
            </Flex>
        </Stack>
    )
}