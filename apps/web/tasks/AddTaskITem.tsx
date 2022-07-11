import React, { useCallback, useState } from "react";
import { TextInput } from "./Input";
import { Button } from "./Button";
import {
    Flex,
    Text, Heading, VStack,
    Tag
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CustomModal } from "./Modal";


export const AddTaskItem = ({ addTaskItem, isLoading }) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleDescChange(e) {
        setDescription(e.target.value);
    }

    const handleInputchange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;

        },
        []
    );

    const handleSubmit = () => {
        if (title.length > 0 && description.length > 0) {
            addTaskItem({
                description,
                title
            });
            // setModalOpen((currentState) => !currentState);

        }
    }


    function closeModal() {
        setTitle("");
        setDescription("");
        setModalOpen((currentState) => !currentState);
    }

    function openModal() {
        setModalOpen((currentState) => !currentState);
    }


    return (
        <>
            <Flex
                width={"600px"}
                marginBottom="6"
                alignItems="center"
                justifyContent="space-between"
            >
                <Heading as="h3" size="md" color="#4E4F50" m="0">Add new task</Heading>
                <Button
                    onClick={openModal}
                    width="80px"
                >
                    Add
                </Button>


            </Flex>
            <CustomModal show={isModalOpen} close={closeModal}>
                <Flex width={"500px"} direction="column">
                    <VStack p="8" m="8">
                        <TextInput
                            handleInputchange={handleTitleChange}
                            placeholder="Task name"
                            type="text"
                            value={title}
                            border="none"
                        />
                        <TextInput
                            handleInputchange={handleDescChange}
                            placeholder="Task description"
                            type="text"
                            value={description}
                            border="none"
                        />
                    </VStack>
                    <Flex p="8" marginRight="8"  marginLeft="8"gap={8}>
                        <Tag 
                            borderRadius="0.2rem"
                            color="#3e2145"
                            boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px"
                            px="4"
                            py="1"
                            border="solid 0.05rem #2d3e57"
                        >
                            Due Date
                        </Tag>
                        <Tag 
                            borderRadius="0.2rem"
                            color="#3e2145"
                            boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px"
                            px="4"
                            border="solid 0.05rem #2d3e57"
                        >
                            Category
                        </Tag>
                    </Flex>
                    <Flex bg="#FFFFF0" p="8" gap={6} justifyContent="flex-end" boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px">
                        <Button width="80px" bg="#fff" color="#333" border="none" onClick={closeModal}>Cancel</Button>
                        <Button width="80px" onClick={handleSubmit} isLoading={isLoading}>Add</Button>
                    </Flex>
                </Flex>
            </CustomModal>
        </>
    );
}
