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
import { ListBluePrints } from "./ListBluePrints";
import { Button } from "ui";
import { FiX, FiArrowRight } from "react-icons/fi";

const BluePrintOption = ({ blueprint }) => {
    return (
        <>
            {
                blueprint === "scratch" ? <FirstStep /> : <ListBluePrints />
            }
        </>
    )
}

export const FirstStep = () => {
    const context = useContext(JourneyOnboardingContext);
    return (
        <Flex
            width="100%"
            gap={8}
            color="brand.primaryText"
        >
            <Flex width="35%" direction="column" justifyContent="center" alignItems="center">

                <Flex direction="column" gap={8} >
                    <Heading  color="brand.primary">{context.currentStep.title}</Heading>
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
                        <Text color="brand.primary">Hi, my name is Ney and I'll be your guide in this journey</Text>
                    </Flex>

                    <Heading size="md" color="brand.primary">What is a journey?</Heading>
                    <Text>Privacy Policies are agreements that specify what type of data a website collects from users and how that data will be used. Known as personal information.</Text>
                    <Button onClick={() => { }}>Learn More</Button>
                </Flex>
            </Flex>
            <VStack width="45%" gap={4} alignItems="flex-start">
                <Flex
                    direction="column"
                    borderRadius="1rem"
                >
                    <BluePrintSelector 
                        currentStep={context.currentStep} 
                        updateBluePrint={context.updateBluePrint}
                    />
                </Flex>
                <Flex gap={4}>
                    <Button 
                        onClick={context.moveBackwards}
                        bg="brand.white"
                        color="brand.primaryText"
                        icon={<FiX />}
                    >
                        Cancel
                    </Button>
                    <Button 
                        onClick={context.moveForward}
                        icon={<FiArrowRight />}
                    >
                        Continue
                    </Button>
                </Flex>
            </VStack>
        </Flex>

    )
}