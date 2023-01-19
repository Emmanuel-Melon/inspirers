import { useState } from "react";
import {
    Stack,
    Text,
    Flex,
    FormControl,
    Tag,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { Routine } from "@prisma/client";
import {
    FiX,
    FiMaximize2,
    FiArrowRight,
    FiChevronsRight,
    FiFolder,
    FiRotateCw,
    FiUsers
} from "react-icons/fi";
import { Button, IconButton } from "ui";
import { Input } from "ui";
import { client } from "utils/client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";

export const AddRoutine = ({ cancel }) => {
    const [name, setName] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { data: session, status } = useSession();

    const { control, register, handleSubmit, setValue } = useForm({
        defaultValues: {
          title: "",
        },
      });

    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
       
    }

    const onSubmit = async (data) => {

        client.post(`/routines`, {
            ...data
        }).then(res => {
            console.log(res);
            setIsLoading(false);
            cancel();
            router.push(`/routines/${res?.data.id}`)
        })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
      };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack color="brand.primaryText">
                <Flex px="4" py="2" justifyContent="space-between" alignItems="center">
                    <Flex gap={1} alignItems="center" color="brand.secondaryText">
                        <Tag
                            color="brand.secondaryText"
                            bg="brand.highlight2"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        >
                            Journey
                        </Tag>
                        <FiChevronsRight />
                        <Text size="sm">New Routine</Text>
                    </Flex>
                    <Flex gap={2} alignItems="center">
                        <IconButton label={""} onClick={() => { }}>
                            <FiMaximize2 />
                        </IconButton>
                        <IconButton label={""} onClick={cancel}>
                            <FiX />
                        </IconButton>
                    </Flex>
                </Flex>
                <Stack px="4" py="2">
                    <FormControl>
                        <Input
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Routine name"
                            type="text"
                            value={name}
                            name="name"
                            autoFocus={true}
                        />
                    </FormControl>
                </Stack>
                <Flex px="4" py="4" alignItems="center" justifyContent="flex-end" bg="brand.highlight2">
                    <Flex gap={2}>
                        <Button size="sm" bg="brand.white" onClick={cancel}>Draft</Button>
                        <Button size="sm" type="submit" isLoading={isLoading}>Continue</Button>
                    </Flex>
                </Flex>
            </Stack>
        </form>
    )
}