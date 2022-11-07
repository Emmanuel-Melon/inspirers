import React, { useCallback, useState } from "react";
import {
    Flex,
    Text,
    Heading,
    Stack,
    Box
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";

import { IconButton } from "ui";
import {
    FiImage,
    FiArrowLeft
} from "react-icons/fi";
import { client } from "utils/client";
import { ResourceType } from "@prisma/client";

import { useDropzone } from 'react-dropzone'

export const UploadView = ({ previousView, toggleView }) => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <Stack p="8" gap={2} color="brand.primaryText">
            <Flex alignItems="center" gap={4}>
                <IconButton onClick={previousView}>
                    <FiArrowLeft />
                </IconButton>
                <Heading size="sm">Upload Resource</Heading>
            </Flex>

            <Flex 
                alignItems="center" 
                justifyContent="center" 
                bg="brand.highlight1"
                borderRadius="1rem" 
                py="8"
                {...getRootProps()}
                cursor="pointer"
                boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"
            >
                <Stack alignItems="center">
                    <Box bg="brand.highlight3" p="4" color="brand.secondary" borderRadius="1rem">
                        <FiImage size="1.5rem" />
                    </Box>
                    <Heading size="sm">Upload Photo</Heading>
                    <Text color="brand.secondaryText">Or drag and drop</Text>
                    <input {...getInputProps()} />
                </Stack>
            </Flex>
        </Stack>
    )
}