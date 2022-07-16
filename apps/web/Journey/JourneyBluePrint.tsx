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
import { Button } from "ui";
import { FiCopy, FiShare, FiPackage, FiCreditCard, FiSettings, FiTruck, FiEdit3, FiArrowRight } from "react-icons/fi";
import { UserObject } from "types/User";
import { FC } from "react";
import { TextInput } from "ui/Input";
import { useRouter } from "next/router";
import { JourneySteps } from "./Steps";
import { RadioCard } from "ui/RadioCard";


export const JourneyBluePrint = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    const options = [{
        id: 1,
        title: 'scratch',
        description: "Customize your entire experience"
    },
    {
        id: 2,
        title: 'template',
        description: "Explore a wide variety of templates"
    }
];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'template',
        defaultValue: 'template',
        onChange: console.log,
    });

    const group = getRootProps()

    return (
        <Flex gap={4} direction="column" p="4" justifyContent="center" alignItems="center">
            <Heading size="md" color="brand.primary">How would you like to start?</Heading>
            <Text color="brand.primaryText">We'll streamline your setup experience accordingly.</Text>
            <Flex gap={4} py="4" color="brand.primaryText">
                <RadioGroup>
                    <Stack direction="row">
                        {options.map((value) => {
                            const radio = getRadioProps({ value });

                            return (
                                <RadioCard key={value.title} {...radio} />
                            )
                        })}
                    </Stack>
                </RadioGroup>
            </Flex>
            <Button width={400}>Continue</Button>
        </Flex>
    )
}