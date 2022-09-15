import {
    Avatar,
    Image,
    Img,
    Stack,
    Text,
    Link,
    Flex,
    Heading,
    Box,
    LinkBox, LinkOverlay,
    Progress,
    VStack,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Tag,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    HStack,
    useRadioGroup
} from "@chakra-ui/react";
import { Button, Card, CustomCheckbox, TextInput, RadioCard } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { FiFlag, FiPlayCircle, FiClock, FiPlus } from "react-icons/fi";


export const ManageRoutine = () => {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "journey",
        defaultValue: "Standard",
        onChange: (nextValue) => { },
    });

    const group = getRootProps();
    const options = ["Standard", "Flexible"];
    return (
        <Stack gap={4} width="400px">
            <Box p="4">
                <Heading size="md" color="brand.secondary">Manage Routine</Heading>
                <Stack>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <TextInput
                            onChange={() => { }}
                            placeholder="e.g name@domain.com"
                            type="text"
                            value={""}
                            name="login"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Starting Date</FormLabel>
                        <TextInput
                            onChange={() => { }}
                            placeholder="e.g name@domain.com"
                            type="date"
                            value={""}
                            name="login"
                        />
                    </FormControl>
                    <Flex justifyContent="space-between" alignItems="center">
                        <Text>Routine Schedule</Text>
                    <HStack {...group}>
                        {options.map((value) => {
                            const radio = getRadioProps({ value });
                            return (
                                <RadioCard
                                    key={value}
                                    {...radio}
                                    bg="brand.white"
                                    checked={{
                                        bg: "brand.secondary",
                                        color: "brand.white",
                                    }}
                                    hover={{
                                        borderColor: "brand.highlight2",
                                    }}
                                    border="groove 0.10rem"
                                    borderColor="brand.secondary"
                                    name="journeyType"
                                >
                                    {value}
                                </RadioCard>
                            );
                        })}
                    </HStack>
                    </Flex>
                    <Flex gap="4">
                        <Stack>
                            <Text>Starts at</Text>
                            <Input type="time" id="appt" name="appt"
                                min="09:00" max="18:00" />
                        </Stack>
                        <Stack>
                            <Text>Ends at</Text>
                            <Input
                                type="time"
                                id="appt"
                                name="appt"
                                min="09:00"
                                max="18:00"
                            />
                        </Stack>
                    </Flex>
                </Stack>
            </Box>
            <Flex gap={2} bg="brand.highlight1" p="4" justifyContent="flex-end">
                <Button bg="brand.white" size="sm" >Cancel</Button>
                <Button size="sm">Save</Button>
            </Flex>
        </Stack>
    )
}