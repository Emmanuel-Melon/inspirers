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

export const FifthStep = () => {
    const context = useContext(JourneyOnboardingContext);
    return (
        <Flex
            direction="column"
            gap={4}
            borderRadius="1rem"
        >
            <Heading>Overview</Heading>
            <Text>Journey</Text>
            <Text>Activities</Text>
            <Text>Tasks</Text>
            <Text>Integrations</Text>
            <Text>Backpack (Resources)</Text>
            <Text>Companions</Text>
            <Text>Inspirers</Text>
            <Text>Communities</Text>
            <Flex gap={4}>
                <Button
                    onClick={context.moveForward}
                    icon={<FiArrowRight />}
                >
                    Done
                </Button>
            </Flex>
        </Flex>

    )
}