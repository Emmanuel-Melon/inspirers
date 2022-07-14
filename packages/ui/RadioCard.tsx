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
    Select,
    Radio,
    RadioGroup,
    Stack,
    useRadio,
    useRadioGroup
} from "@chakra-ui/react";
import { FiCopy, FiShare, FiPackage, FiCreditCard, FiSettings, FiTruck, FiEdit3, FiArrowRight } from "react-icons/fi";

export const RadioCard = (props) => {
    return (
        <Flex
            bg="brand.white"
            width="180px"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
            justifyContent="center"
            alignItems="center"
        >
            <Flex gap={2} direction="column" p="4" alignItems="center">
                <Flex gap={4} direction="column" alignItems="flex-start">
                    {
                        props.value.title !== "scratch" ? <FiCopy size="2.5rem" /> :
                        <FiEdit3 size="2.5rem" />
                    }
                    <Text fontWeight="700" color="brand.secondary">{props.value.title}</Text>
                </Flex>
                <Text textAlign="center">{props.value.description}</Text>
            </Flex>
        </Flex>
    )
}