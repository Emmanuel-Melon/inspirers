import React, { useState } from "react";
import {
    Flex,
    Text,
    Heading,
    Select,
    Stack,
    Tag,
    Divider
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";

import { Button, IconButton, Input } from "ui";
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
    FiArrowLeft
} from "react-icons/fi";
import { client } from "utils/client";
import { ResourceType } from "@prisma/client";
import { UserCompanions } from "core/User/Companions";



export const InviteCompanionView = ({ previousView, toggleView }) => {
    return (
        <Stack p="8" gap={2} color="brand.primaryText">
            <Flex alignItems="center" gap={4}>
                <IconButton onClick={previousView} label="go back">
                    <FiArrowLeft />
                </IconButton>
                <Heading size="sm">Invite Companions</Heading>
            </Flex>
            <Stack gap={4}>
                <Input 
                    type="text"
                    placeholder="Search for companions"
                    onChange={() => {}}
                />
                <UserCompanions />
            </Stack>
        </Stack>
    )
}