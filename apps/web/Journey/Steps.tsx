import React from "react";
import {
    Flex,
    Text,
    Avatar,
} from "@chakra-ui/react";



const Step = ({ step }) => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            gap={4}
        >
            <Text
            bg={step.active ? "brand.highlight" : "brand.grey"} color={step.active ? "brand.white" : "brand.primaryText"} 
            border="dashed 0.25rem rgba(17, 105, 121, 0.1)"
            p="2"
            borderRadius="50%"
            width="10"
            textAlign="center"
            fontWeight="700"
            fontSize="18px"
            >
                {step.id.toString()}
            </Text>
            <Text fontWeight="700" color="brand.primaryText">{step.title}</Text>
        </Flex>
    )
}

export const JourneySteps = ({ steps }) => {
    return (
        <Flex
            gap={8}
            marginTop={8}
            justifyContent="center"
            p="8"
            borderRadius="1rem"
        >
            {
                steps.map(step => <Step step={step} key={step.id} />)
            }
        </Flex>
    )
}