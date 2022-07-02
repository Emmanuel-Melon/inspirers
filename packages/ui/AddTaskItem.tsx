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

    function handleInputchange(e) {
        setTitle(e.target.value);
    }

    return (
        <Flex
            width={"600px"}
            marginBottom="6"
            gap={2}
        >
            <TextInput
                handleInputchange={handleInputchange}
                placeholder="Add new task"
                type="text"
                value={title}
            />
            <Button
                onClick={() => addTaskItem(title)}
                width="80px"
            >
                Add
            </Button>
        </Flex>
    );
}
