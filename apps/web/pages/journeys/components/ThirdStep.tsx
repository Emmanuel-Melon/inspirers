import React, { useContext, useState } from "react";
import {
    Flex,
    Heading,
    Text,
    Select,
} from "@chakra-ui/react";
import { TextInput } from "ui/Input";
import { Button } from "ui";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import { FiX, FiArrowRight } from "react-icons/fi";
import { JourneyBluePrint } from "./JourneyBluePrint";
import { client } from "../../../utils/client";

export const ThirdStep = () => {
    const context = useContext(JourneyOnboardingContext);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);
    const [journey, setJourneyInfo] = useState({
        title: "",
        career: "",
        interest: "",
        blueprint: "",
        description: "ain't nothing",
        background: ""
    });

    const handleNext = () => {
        setLoading(true);
        client.put("/journeys/cl5r5qfwj0254a0btyahkbv69", {
            title: journey.title,
        }).then(res => {
            setLoading(false);
            context.moveForward(context.currentStep.id + 1);
        }).catch(err => {
            setLoading(false);
            setError(true);
        });
    }
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
            <Text fontWeight="700">Your biggest strengths</Text>
            <TextInput
                placeholder="Your biggest strengths"
                type="text"
                handleInputchange={() => { }}
            />
            <Text fontWeight="700">Your biggest strengths</Text>
            <TextInput
                placeholder="Your biggest strengths"
                type="text"
                handleInputchange={() => { }}
            />
                        <Text fontWeight="700">Your biggest strengths</Text>
            <TextInput
                placeholder="Your biggest strengths"
                type="text"
                handleInputchange={() => { }}
            />
                        <Text fontWeight="700">Your biggest strengths</Text>
            <TextInput
                placeholder="Your biggest strengths"
                type="text"
                handleInputchange={() => { }}
            />
                        <Text fontWeight="700">Your biggest strengths</Text>
            <TextInput
                placeholder="Your biggest strengths"
                type="text"
                handleInputchange={() => { }}
            />
            <Flex width="200">
                {
                    context.blueprint === "template" ? (
                        <>
                            <Text fontWeight="700">Template</Text>
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
                        </>
                    ) : null
                }

                {
                    isError ? <Text color="brand.danger">Something went wrong</Text> : null
                }
            </Flex>
            <Flex gap={4}>
                <Button
                    onClick={context.moveBackwards}
                    bg="brand.white"
                    color="brand.primaryText"
                    icon={<FiX />}
                    disabled={context.currentStep.id === 1 || context.currentStep.id === 5}
                >
                    Back
                </Button>
                <Button
                    onClick={handleNext}
                    icon={<FiArrowRight />}
                    isLoading={isLoading}
                >
                    Next
                </Button>
            </Flex>
        </Flex>
    )
}