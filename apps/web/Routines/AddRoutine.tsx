import { useState } from "react";
import {
    Avatar,
    Image,
    Img,
    Stack,
    Text,
    Link,
    Flex,
    Heading,
    Box,
    LinkBox,
    LinkOverlay,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";
import { Routine } from "@prisma/client";
import { FiRotateCw } from "react-icons/fi";
import { Button } from "ui";
import { TextInput } from "ui";
import { client } from "utils/client";
import { useRouter } from "next/router";

export const AddRoutine = ({ cancel }) => {
    const [name, setName] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const handleClick = () => {
        setIsLoading(true);
        client.post(`/routines`, {
            title: name
        }).then(res => {
            console.log(res);
            setIsLoading(false);
            cancel();
            router.push(`/routines/${res.data.data.id}`)
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }
    return (
        <Stack p="8" width="420px" gap={4} color="brand.primaryText">
            <Heading size="sm" color="brand.secondary">Add a new Routine</Heading>
            <Stack gap={2}>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <TextInput
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Morning Routine"
                        type="text"
                        value={name}
                        name="name"
                    />
                </FormControl>
                <Flex gap={4}>
                    <Button size="sm" bg="brand.white" onClick={cancel}>Cancel</Button>
                    <Button size="sm" onClick={handleClick} isLoading={isLoading}>Continue</Button>
                </Flex>
            </Stack>
        </Stack>
    )
}