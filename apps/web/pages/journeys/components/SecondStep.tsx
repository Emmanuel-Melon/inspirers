import React, { useContext, useCallback, useState } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Select,
    VStack,
    RadioGroup,
    Radio,
    Stack,
    useRadioGroup,
    HStack,
} from "@chakra-ui/react";
import { TextInput } from "ui/Input";
import Image from "next/image";
import { Button } from "ui";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import { client } from "../../../utils/client";
import { ListBluePrints } from "./ListBluePrints";
import { FiX, FiArrowRight } from "react-icons/fi";
import { RadioCard } from "ui";

export const SecondStepGuide = ({ guide }) => {
    const context = useContext(JourneyOnboardingContext);
    return (
        <Flex gap={8} height="100%">
            <Flex direction="column" gap={4}>
                <Heading color="brand.primary">{context.currentStep.id} - {context.currentStep.title}</Heading>
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
                {
                    context.blueprint === "template" ? (
                        <>
                            <Heading size="md" color="brand.primary">Browse templates</Heading>
                            <VStack
                                alignItems="flex-start"
                                p="4"
                                borderRadius="1rem"
                                bg="brand.highlight2"
                                color="brand.primaryText"
                            >
                                <Text>Accounting</Text>
                                <Text>Software Engineering</Text>
                                <Text>Cooking</Text>
                                <Text>Poetry</Text>
                                <Text
                                    color="brand.primaryText"
                                    bg="brand.highlight2"
                                    fontWeight="700"
                                    borderRadius="1rem"
                                    boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                                    fontSize="12px"
                                    px="2"
                                    py="1px"
                                    width="fit-content"
                                >Show More</Text>
                            </VStack>
                        </>
                    ) : (
                        <Text>Customize your own journey!</Text>
                    )}
            </Flex>

        </Flex>
    )
}


const AcademicOptions = () => {
    const [value, setValue] = React.useState('academic');
    const options = ['academic', 'business', 'career', 'personal', 'other'];

    const careerOptions = ['Get a Promotion', 'Learn new skills', 'land a new job', 'netowrk', 'other'];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'journey',
        defaultValue: 'academic',
        onChange: (nextValue) => setValue(nextValue),
    })

    const group = getRootProps();

    <HStack {...group}>
        {options.map((value) => {
            const radio = getRadioProps({ value })
            return (
                <RadioCard
                    key={value}
                    {...radio}
                    bg="brand.white"
                    checked={{
                        bg: "brand.secondary",
                        color: "brand.white"
                    }}
                    hover={{
                        bg: "brand.highlight"
                    }}
                >
                    {value}
                </RadioCard>
            )
        })}
    </HStack>
}

export const SecondStep = () => {
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
        client.post("/journeys", {
            blueprint: context.blueprint,
            title: journey.title,
            description: journey.description,
            userId: "cl5imusb0005800bt26o62b2m"
        }).then(res => {
            setLoading(false);
            context.moveForward(context.currentStep.id + 1);
        }).catch(err => {
            setLoading(false);
            setError(true);
        });
    }


    const handleInputchange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setJourneyInfo((currentState) => {
                return {
                    ...currentState,
                    [name]: value
                }
            });
        },
        []
    );

    const [value, setValue] = React.useState('academic');
    const options = ['academic', 'business', 'career', 'personal'];

    const academicOptions = ['Get a Promotion', 'Learn new skills', 'land a new job', 'netowrk', 'other'];
    const businessOptions = ['Get a Promotion', 'Learn new skills', 'land a new job', 'netowrk', 'other'];
    const careerOptions = ['Get a Promotion', 'Learn new skills', 'land a new job', 'netowrk', 'other'];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'journey',
        defaultValue: 'academic',
        onChange: (nextValue) => setValue(nextValue),
    })

    const group = getRootProps();

    return (
        <Flex
            width="100%"
            direction="column"
            gap={4}
        >
            {
                context.blueprint === "template" ? <Flex gap={2}>
                    <ListBluePrints />
                </Flex> : (
                    <Flex
                        direction="column"
                        gap={4}
                        borderRadius="1rem"
                        color="brand.primaryText"
                    >
                        <Text color="brand.primary">Type of journey</Text>
                        <HStack {...group}>
                            {options.map((value) => {
                                const radio = getRadioProps({ value })
                                return (
                                    <RadioCard
                                        key={value}
                                        {...radio}
                                        bg="brand.white"
                                        checked={{
                                            bg: "brand.secondary",
                                            color: "brand.white"
                                        }}
                                        hover={{
                                            borderColor: "brand.highlight2"
                                        }}
                                        border="groove 0.10rem"
                                        borderColor="brand.secondary"
                                    >
                                        {value}
                                    </RadioCard>
                                )
                            })}
                        </HStack>
                        <Text color="brand.primary">What would you like to name your journey? <Box as="span" color="brand.danger">*</Box></Text>
                        <TextInput
                            placeholder="e.g Getting into Harvard"
                            type="text"
                            handleInputchange={handleInputchange}
                            value={journey.title}
                            name="title"
                        />

                        {
                            value === "academic" ? (
                                <>
                                    <Text color="brand.primary">Your field</Text>
                                    <TextInput
                                        placeholder="E.g Engineering, Medicine etc."
                                        type="text"
                                        handleInputchange={handleInputchange}
                                        value={journey.interest}
                                        name="interest"
                                    />
                                    <Text color="brand.primary">Academic level</Text>
                                    <Select
                                        placeholder='e.g undergrad or postgrade'
                                        borderRadius="1rem"
                                        name="background"
                                    >
                                        <option value={journey.background}>High School</option>
                                        <option value={journey.background}>Undergrate</option>
                                        <option value={journey.background}>Postgraduate</option>
                                    </Select>
                                    <Text color="brand.primary">What's your goal?</Text>
                                    <Text>Earn a scholarship</Text>
                                    <Text>Prepare for an exam</Text>
                                    <Text>Research and plan thesis</Text>
                                    <Text>Write a book</Text>
                                </>
                            ) : null
                        }
                        {
                            value === "business" ? (
                                <>
                                    <Text color="brand.primary">Business type</Text>
                                    <TextInput
                                        placeholder="E.g Engineering, Medicine etc."
                                        type="text"
                                        handleInputchange={handleInputchange}
                                        value={journey.interest}
                                        name="interest"
                                    />
                                    <Text color="brand.primary">What's your goal?</Text>
                                    <Text>Start a business</Text>
                                    <Text>Launch a product</Text>
                                    <Text>Find investors/ collaborators</Text>
                                    <Text>Analyze growth</Text>
                                </>
                            ) : null
                        }
                        {
                            value === "career" ? (
                                <>
                                    <Text color="brand.primary">Field</Text>
                                    <TextInput
                                        placeholder="E.g Engineering, Medicine etc."
                                        type="text"
                                        handleInputchange={handleInputchange}
                                        value={journey.interest}
                                        name="interest"
                                    />
                                    <Text color="brand.primary">Experience level</Text>
                                    <Text>No experience</Text>
                                    <Text>Junior</Text>
                                    <Text color="brand.primary">What's your goal?</Text>
                                    <Text>Get first job</Text>
                                    <Text>Earn a promotion</Text>
                                    <Text>Find collaborators</Text>
                                </>
                            ) : null
                        }
                        {
                            isError ? <Text color="brand.danger">Something went wrong, try again later.</Text> : null
                        }
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
        </Flex>

    )
}

/**
 * 
                         <Text color="brand.primary">How would you describe yourself?</Text>
                        <Select
                            placeholder='Select option' 
                            borderRadius="1rem"
                            name="background"
                        >
                            <option value={journey.background}>Student</option>
                            <option value={journey.background}>Profesional</option>
                            <option value={journey.background}>Business</option>
                        </Select>
 */