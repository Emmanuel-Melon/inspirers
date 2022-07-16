import {
    Flex,
    Heading,
    Text,
    RadioGroup,
    Stack,
    useRadioGroup
} from "@chakra-ui/react";
import { RadioCard } from "ui/RadioCard";
import { useState } from "react";
import { FiCopy, FiEdit3 } from "react-icons/fi";

type BluePrintSelectorProps = {

};

type SelectorCardProps = {
    description: string;
    value: string;
};

const SelectorCard = ({ description, value }: SelectorCardProps) => {
    return (
        <Flex
            bg="brand.white"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
            justifyContent="center"
            alignItems="center"
            width="150px"
            border="dashed 0.25rem #fff"
            height="200px"
        >
            <Flex gap={4} direction="column" p="4" alignItems="center">
                <Flex gap={4} direction="column" alignItems="flex-start">
                    {
                        value !== "scratch" ? <FiCopy size="2.5rem" /> :
                            <FiEdit3 size="2.5rem" />
                    }
                    <Text fontWeight="700" color="brand.secondary">{value}</Text>
                </Flex>
                <Text textAlign="center">{description}</Text>
            </Flex>
        </Flex>
    )
}

export const BluePrintSelector = ({ updateBluePrint, currentStep }: BluePrintSelectorProps) => {
    const [bluePrint, setBluePrint] = useState<string>("template");

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'blueprint',
        defaultValue: bluePrint,
        onChange: (nextValue) => {
            updateBluePrint(nextValue);
        },
    });

    const group = getRootProps();

    const options = [{
        id: 1,
        value: 'scratch',
        description: "Customize your entire experience"
    },
    {
        id: 2,
        value: 'template',
        description: "Explore a wide variety of templates"
    }
    ];

    return (
        <Flex gap={4} direction="column" >
            <Heading size="md" color="brand.primaryText">How would you like to start?</Heading>
            <Text color="brand.primaryText">We'll streamline your setup experience accordingly.</Text>
            <Flex 
                gap={4} 
                color="brand.primaryText"
            >
                <RadioGroup>
                    <Stack direction="row" {...group}>
                        {options.map((value) => {
                            const radio = getRadioProps({ ...value });
                            return (
                                <RadioCard
                                    key={value.value}
                                    {...radio}
                                    checked={{
                                        borderColor: "brand.highlight2",
                                        borderRadius: "1rem"
                                    }}

                                    hover={{
                                        borderColor: "brand.highlight",
                                        borderRadius: "1rem"
                                    }}
                                    border="dashed 0.25rem #F8F8F7"
                                >
                                    <SelectorCard {...radio} />
                                </RadioCard>
                            )
                        })}
                    </Stack>
                </RadioGroup>
            </Flex>
        </Flex>
    )
}