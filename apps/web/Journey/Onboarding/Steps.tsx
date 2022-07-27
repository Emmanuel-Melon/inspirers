import { useContext } from "react";
import {
    Flex,
    Text
} from "@chakra-ui/react";
import { Button } from "ui";
import { FiX, FiArrowRight, FiBookOpen, FiBriefcase, FiClipboard, FiHeart } from "react-icons/fi";
import { JourneyOnboardingContext } from "../../providers/JourneyOnboardingProvider";

const Step = ({ step }) => {
    return (
        <Flex
            alignItems="center"
            gap={4}
        >
            <Flex
                alignItems="center"
                gap={4}
                bg={step.active ? "brand.highlight" : "brand.grey"} color={step.active ? "brand.white" : "brand.primaryText"}
                border="dashed 0.25rem rgba(17, 105, 121, 0.1)"
                p="4"
                px="4"
                borderRadius="50%"
                textAlign="center"
            >
                <FiBookOpen />
            </Flex>
        </Flex>
    )
}

export const JourneySteps = ({ steps }) => {
    const context = useContext(JourneyOnboardingContext);
    return (
        <Flex
            justifyContent="space-around"
            direction="column"
        >
            {
                steps.map(step => <Step step={step} key={step.id} />)
            }
        </Flex>
    )
}