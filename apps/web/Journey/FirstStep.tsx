import React, { useContext } from "react";
import {
    Flex,
    Text,
    Heading,
    VStack
} from "@chakra-ui/react";
import Image from "next/image";
import { BluePrintSelector } from "./BluePrintSelector";
import { JourneyOnboardingContext } from "../providers/JourneyOnboardingProvider";
import { Button } from "ui";
import { FiInfo } from "react-icons/fi";

export const FirstStep = ({ blueprint }) => {
    const context = useContext(JourneyOnboardingContext);
    return (
        <Flex
            width="100%"
            gap={8}
            color="brand.primaryText"
        >
            <VStack width="100%" gap={4} alignItems="flex-start">
                <Flex
                    direction="column"
                    borderRadius="1rem"
                >
                    <BluePrintSelector
                        currentStep={context.currentStep}
                        updateBluePrint={context.updateBluePrint}
                    />
                </Flex>
            </VStack>
        </Flex>
    )
}

export const FirstStepGuide = ({ guide, blueprint }) => {
    const context = useContext(JourneyOnboardingContext);
    return (
        <Flex
            direction="column"
            width="100%"
        >
            <Flex direction="column" gap={4} >
                <Heading color="brand.primary">{context.currentStep.id} - {context.currentStep.title}</Heading>
                <Text>Every castle started at the basement.</Text>
                <Flex
                    alignItems="center"
                    bg="brand.white"
                    borderRadius="0rem 1rem 1rem 0rem"
                    borderLeft="solid 0.25rem"
                    borderColor="brand.accent"
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                >
                    <Image height="180" width="180" alt="start journey" src={"https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg"} />
                    <Text color="brand.primary">{guide?.mimi?.greeting}</Text>
                </Flex>
                <Heading size="md" color="brand.primary">What is a journey?</Heading>
                <Text>{context.currentStep.description}</Text>
                <Button
                    onClick={() => { }}
                    icon={<FiInfo />}
                >Learn More</Button>
            </Flex>
        </Flex>
    )
}