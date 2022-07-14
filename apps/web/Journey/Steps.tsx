import React from "react";
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



const Step = ({ step }) => {
    return (
        <Flex 
            direction="column" 
            alignItems="center" 
            gap={4}
            
        >
            <Avatar 
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                name={step.id.toString()} 
                bg={step.active ? "brand.primary" : "brand.grey"} color={step.active ? "brand.white" : "brand.primary"} 
                border="solid 0.10rem"
                borderColor="brand.accent"
            />
            <Text fontWeight="700" color="brand.primaryText">{step.title}</Text>
        </Flex>
    )
}

export const JourneySteps = ({ steps }) => {
    console.log(steps);
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