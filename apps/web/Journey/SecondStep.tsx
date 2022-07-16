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

export const SecondStep = () => {
    const context = useContext(JourneyOnboardingContext);
    return (
        <Flex gap={8}>
            <Flex width="35%" direction="column" gap={4}>
            <Heading color="brand.primary">{context.currentStep.title}</Heading>
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
            <Flex
                width="60%"
                direction="column"
                gap={4}
            >
                <Flex
                    direction="column"

                    
                    gap={4}
                    
                    borderRadius="1rem"
                >
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
                    <Text fontWeight="700">Your career/ passion?</Text>
                    <TextInput
                        placeholder="E.g acting, fitness"
                        type="text"
                        handleInputchange={() => { }}
                    />
                                        <Text fontWeight="700">Your career/ passion?</Text>
                    <TextInput
                        placeholder="E.g acting, fitness"
                        type="text"
                        handleInputchange={() => { }}
                    />
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
                </Flex>
            </Flex>
        </Flex>

    )
}