import React, { useState, useEffect } from "react";
import {
    Flex,
    Text,
    Heading,
    Select,
    Stack,
    Tag,
    Divider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
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
    FiMaximize2,
    FiArrowRight,
    FiChevronsRight,
    FiFolder,
    FiRotateCw,
    FiUsers
} from "react-icons/fi";
import { client } from "utils/client";
import { Folder, ResourceType } from "@prisma/client";

// clear form fields after submit
// add loading state
// add drag and drop for images/videos uploads
// pick links from the clipboard
// add tags
// add a preview of the link
// submit form on enter

export const AddNewFolder = ({ closeModal, toggleView, backpack }) => {

    const [title, setTitle] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const addResource = (e: SubmitEvent) => {
        e.preventDefault();
        setIsLoading(true);
        client.post(`/backpacks/${backpack?.id}/folders`, {
            title,
            backpackId: backpack?.id
        })
            .then((response) => {
                setIsLoading(false);
            }).then(() => closeModal());
    }

    const preventExit = () => {
        alert("Are you sure you want to exit? Your changes will be lost.");
    }

    useEffect(() => {
        const keyDownHandler = event => {
            console.log('User pressed: ', event.key);

            if (event.key === 'Escape') {
                event.preventDefault();

                // 👇️ your logic here
                preventExit();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        // 👇️ clean up event listener
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);
    return (
        <form onSubmit={addResource}>
            <Stack color="brand.primaryText">
                <Flex px="4" py="2" justifyContent="space-between" alignItems="center">
                    <Flex gap={1} alignItems="center"  color="brand.secondaryText">
                        <Tag
                            color="brand.secondaryText"
                            bg="brand.highlight1"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        >
                            {backpack?.name || "Backpack"}
                        </Tag>
                        <FiChevronsRight />
                        <Text size="sm">New Folder</Text>
                    </Flex>
                    <Flex gap={2} alignItems="center">
                        <IconButton label={""} onClick={() => { }}>
                            <FiMaximize2 />
                        </IconButton>
                        <IconButton label={""} onClick={closeModal}>
                            <FiX />
                        </IconButton>
                    </Flex>
                </Flex>
                <Stack px="4" py="2">
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Folder Name name (optional)"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            autofocus={true}
                        />
                    </FormControl>
                </Stack>
                <Flex px="4" py="2" gap={2}>
                    <Button
                        size="sm"
                        icon={<FiRotateCw />}
                        onClick={() => { }}
                        bg="brand.white"
                        color="brand.secondaryText"
                    >
                        Routine
                    </Button>
                    <Button
                        size="sm"
                        icon={<FiClock />}
                        onClick={() => { }}
                        bg="brand.white"
                        color="brand.secondaryText"
                    >
                        Due Date
                    </Button>
                    <Button
                        size="sm"
                        icon={<FiUsers />}
                        onClick={() => { }}
                        bg="brand.white"
                        color="brand.secondaryText"
                    >
                        Companions
                    </Button>
                </Flex>
                <Flex px="4" py="4" alignItems="center" justifyContent="space-between" bg="brand.highlight1">
                    <Flex gap={2}>
                        <IconButton onClick={() => toggleView("invite")} label={""}>
                            <FiUserPlus />
                        </IconButton>
                        <IconButton onClick={() => toggleView("expanded")} label={""}>
                            <FiMoreHorizontal />
                        </IconButton>
                    </Flex>
                    <Flex gap={2}>
                        <Button
                            isLoading={isLoading}
                            type="submit"
                        >
                            Add Folder
                        </Button>
                    </Flex>
                </Flex>
            </Stack>
        </form>
    )
}