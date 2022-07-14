import {
    Flex,
    Heading,
    Text,
    Box,
    Avatar,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Select
} from "@chakra-ui/react";
import { Button } from "ui";
import { FiEye, FiShare, FiPackage, FiCreditCard, FiSettings, FiTruck } from "react-icons/fi";
import { UserObject } from "types/User";
import { FC } from "react";
import { TextInput } from "ui/Input";
import  { useRouter } from "next/router";

export const NewJourney = () => {
    return (
        <>
            <Flex direction="column" gap={4} py="4">
                <Text fontWeight="700">Let's give this journey a name</Text>
                <TextInput
                    placeholder="What would you like to do/ become?"
                    type="text"
                    handleInputchange={() => { }}
                />
                <Text fontWeight="700">Your career/ passion?</Text>
                <TextInput
                    placeholder="E.g acting, fitness"
                    type="text"
                    handleInputchange={() => { }}
                />
                <Text fontWeight="700">How would you describe yourself?</Text>
                <Select placeholder='Select option' borderRadius="1rem">
                    <option value='option1'>Student</option>
                    <option value='option2'>Profesional</option>
                    <option value='option3'>Guru</option>
                </Select>
                <TextInput placeholder="Other"
                    type="text"
                    handleInputchange={() => { }}
                />
            </Flex>
        </>
    )
}