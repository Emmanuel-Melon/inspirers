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
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import { FiX, FiArrowRight } from "react-icons/fi";

export const FourthStep = () => {
    const context = useContext(JourneyOnboardingContext);
    return (
<Flex
                    direction="column"
                    gap={4}
                    borderRadius="1rem"
                >
                    <Text fontWeight="700">What are your goals?</Text>
                    <Text>Land a job</Text>
                    <Text>Join college, win a scholarship</Text>
                    <Text>Get a promotion</Text>
                    <Text>Internship</Text>
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

    )
}