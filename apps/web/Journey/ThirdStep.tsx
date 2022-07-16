import React, { useContext } from "react";
import {
    Flex,
    Heading,
    Text,
    Select,
} from "@chakra-ui/react";
import { TextInput } from "ui/Input";
import Image from "next/image";
import { Button } from "ui";
import { JourneyOnboardingContext } from "../providers/JourneyOnboardingProvider";
import { FiX, FiArrowRight } from "react-icons/fi";
import { JourneyBluePrint } from "./JourneyBluePrint";

export const ThirdStep = () => {
    const context = useContext(JourneyOnboardingContext);
    return (
        <Flex
            gap={4}
            borderRadius="1rem"
            direction="column"
            width="100%"
        >
            <Text fontWeight="700">Journey Title</Text>
            <TextInput
                placeholder="e.g Becoming an Oscar Nominee"
                type="text"
                handleInputchange={() => { }}
            />
            <Text fontWeight="700">Template</Text>
            <Flex width="200">
            <JourneyBluePrint bluePrint={{
            "id": "cl5o8pq8t0070fgbt5eqar9bs",
            "userId": "cl5imusb0005800bt26o62b2m",
            "type": "template",
            "templateId": null,
            "title": "Poet",
            "description": "ain't nothing to it but to do it",
            "field": null,
            "expertise": null,
            "price": null,
            "creator": null,
            "createdAt": null,
            "updateAt": null,
            "image": "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"
        }} />
            </Flex>
            <Button bg="brand.secondary">Save</Button>

        </Flex>

    )
}