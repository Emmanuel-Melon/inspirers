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
} from "@chakra-ui/react";
import { useFetch } from "../../hooks/useSwr";
import { ListRoutines } from "../../Routines/ListRoutines";
import { AddRoutine } from "../../Routines/AddRoutine";
import { Button } from "ui";
import { FiPlus } from "react-icons/fi";
import { CustomModal, ViewNavigator } from "ui";

export default function Routines() {
    const { data: routines, isLoading, isError } = useFetch(`/routines/cl7zrw659000810btyaacqm54/list`);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Stack color="brand.primaryText" gap={4} >
                <Flex justifyContent="space-between" alignItems="center" gap={8}>
                    <Stack flex="2">
                        <Heading size="md">Routines</Heading>
                        <Text>The key to managing your time is performing the right habits everyday. These habits will improve your life and help you optimize it to reach your goals.</Text>
                        <ViewNavigator view="list" changeView={() => {}} />
                    </Stack>
                </Flex>
                <ListRoutines routines={routines?.data} isLoading={isLoading} isError={isError} />
            </Stack>
            <CustomModal show={isOpen} close={closeModal}>
                <AddRoutine cancel={closeModal} />
            </CustomModal>
        </>
    );
}
