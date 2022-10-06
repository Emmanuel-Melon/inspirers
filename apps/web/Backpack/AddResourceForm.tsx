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
    FiEye
} from "react-icons/fi";
import { client } from "utils/client";
import { ResourceType } from "@prisma/client";

export const AddResourceForm = ({ toggleView }) => {

    const [title, setTitle] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const backpackId = "cl8u2b5ci24107gbt0drlynhj";
    const addResource = () => {
        setIsLoading(true);
        client.post(`/backpacks/${backpackId}`, {
            title,
            resourceUrl: url,
            type: ResourceType.Video
        })
            .then((response) => {
                setIsLoading(false);
            })
    }
    return (
        <Stack p="8" gap={2} color="brand.primaryText" width="500px">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading size="md">Add a new Resource</Heading>
                <IconButton label={""} onClick={() => { }}>
                    <FiX />
                </IconButton>
            </Flex>
            <Input
                type="text"
                placeholder="Name"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <Input
                type="text"
                placeholder="Enter a URL"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
            />
            <Flex gap={2}>
                <Stack spacing={3}>
                    <Select
                        borderRadius="2rem"
                        bg="brand.white"
                        placeholder='Folder'
                        size='md'
                        border="none"
                        color="brand.secondaryText"
                        boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"
                    >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Stack>
                <Stack spacing={3}>
                    <Select
                        borderRadius="2rem"
                        bg="brand.white"
                        placeholder='Morning Routine'
                        size='md'
                        border="none"
                        color="brand.secondaryText"
                        boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"
                    >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Stack>
            </Flex>
            <Flex gap={2}>
                <Text>Add tags</Text>
                <Tag width="fit-content" bg="brand.highlight3" color="brand.accent" borderRadius="2rem">AWS</Tag>
                <Tag width="fit-content" bg="brand.highlight3" color="brand.accent" borderRadius="2rem">Cloud</Tag>
            </Flex>
            <Divider />
            <Flex alignItems="center" justifyContent="space-between">
                <Flex gap={2}>
                    <IconButton onClick={() => toggleView("image")} label={""}>
                        <FiImage />
                    </IconButton>
                    <IconButton onClick={() => toggleView("video")} label={""}>
                        <FiVideo />
                    </IconButton>
                    <IconButton onClick={() => toggleView("invite")} label={""}>
                        <FiUserPlus />
                    </IconButton>
                    <IconButton onClick={() => toggleView("expanded")} label={""}>
                        <FiMoreHorizontal />
                    </IconButton>
                </Flex>
                <Flex gap={4}>
                    <Select
                        borderRadius="2rem"
                        bg="brand.white"
                        placeholder='Anyone'
                        size='md'
                        border="none"
                        color="brand.secondaryText"
                        boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"
                    >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Button
                        onClick={addResource}
                        isLoading={isLoading}
                    >Add</Button>
                </Flex>
            </Flex>
        </Stack>
    )
}