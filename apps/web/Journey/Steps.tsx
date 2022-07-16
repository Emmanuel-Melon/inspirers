import { useContext } from "react";
import {
    Flex,
    Text
} from "@chakra-ui/react";
import { Button } from "ui";
import { FiX, FiArrowRight } from "react-icons/fi";
import { JourneyOnboardingContext } from "../providers/JourneyOnboardingProvider";

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
                borderRadius="1rem"
                textAlign="center"
                fontWeight="700"
                fontSize="18px"

            >
                {step.id.toString()}
            </Text>
        </Flex>
    )
}

export const JourneySteps = ({ steps }) => {
    const context = useContext(JourneyOnboardingContext);
    return (
        <>
            <Flex
                gap={8}
                py="4"
                borderRadius="1rem"
                alignItems="center"
                justifyContent="center"
            >
                {
                    steps.map(step => <Step step={step} key={step.id} />)
                }
            </Flex>
            <Flex gap={8} justifyContent="center">
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
                onClick={() => context.moveForward(context.currentStep.id + 1)}
                icon={<FiArrowRight />}
            >
                Next
            </Button>
            </Flex>
        </>
    )
}