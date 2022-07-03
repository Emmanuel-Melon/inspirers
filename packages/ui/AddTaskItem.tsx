import React, { useContext, useState } from "react";
import { TextInput } from "./Input";
import { Button } from "./Button";
import {
    Flex,
    Text, Heading
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";


export const AddTaskItem = ({ addTaskItem }) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

   function handleDescChange(e) {
    setDescription(e.target.value);
    }

    return (
        <Flex
            width={"600px"}
            marginBottom="6"
            gap={2}
        >
            <TextInput
                handleInputchange={handleTitleChange}
                placeholder="Add new task"
                type="text"
                value={title}
            />
            <TextInput
                handleInputchange={handleDescChange}
                placeholder="Description"
                type="text"
                value={description}
            />
            <Button
                onClick={() => addTaskItem({
                    description,
                    title
                })}
                width="80px"
            >
                Add
            </Button>
        </Flex>
    );
}
