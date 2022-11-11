import { useState } from "react";
import {
    Stack,
    Text,
    Flex,
    Heading,
    Box,
    FormControl,
    FormLabel,
    HStack,
    useRadioGroup
} from "@chakra-ui/react";
import { Button, Card, CustomCheckbox, Input, RadioCard } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { FiFlag, FiPlayCircle, FiClock, FiPlus } from "react-icons/fi";
import { client } from "../../utils/client";


export const ManageRoutine = ({ closeModal }) => {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "journey",
        defaultValue: "Standard",
        onChange: (nextValue) => { },
    });

    const [startTime, setStartTime] = useState("");
    const [finishTime, setFinishTime] = useState("");
    const [startDay, setStartDay] = useState("");
    const [title, setTitle] = useState("");
    const router = useRouter();

    const group = getRootProps();
    const options = ["Standard", "Flexible"];
    const onSave = () => {
        client.put(router.asPath, {
            title,
            startsAt: moment(startTime, 'HH:mm'),
            finishesAt: moment(finishTime, 'HH:mm')
        })
            .then(res => {
                console.log(res);
                closeModal();
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <Stack gap={4} width="400px">
            <Box p="8">
                <Heading size="md" color="brand.secondary" my="4">Manage Routine</Heading>
                <Stack gap={2}>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input
                            onChange={e => setTitle(e.target.value)}
                            placeholder="e.g name@domain.com"
                            type="text"
                            value={title}
                            name="login"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Starting Date</FormLabel>
                        <Input
                            onChange={e => setStartDay(e.target.value)}
                            placeholder="e.g name@domain.com"
                            type="date"
                            value={startDay}
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
                            <Input
                                type="time"
                                id="appt"
                                name="appt"
                                min="09:00"
                                max="18:00"
                                value={startTime}
                                onChange={e => setStartTime(e.target.value)}
                            />
                        </Stack>
                        <Stack>
                            <Text>Ends at</Text>
                            <Input
                                type="time"
                                id="appt"
                                name="appt"
                                min="09:00"
                                max="18:00"
                                value={finishTime}
                                onChange={e => setFinishTime(e.target.value)}
                            />
                        </Stack>
                    </Flex>
                </Stack>
            </Box>
            <Flex gap={2} bg="brand.highlight1" p="4" justifyContent="flex-end">
                <Button bg="brand.white" size="sm" onClick={closeModal}>Cancel</Button>
                <Button size="sm" onClick={onSave}>Save</Button>
            </Flex>
        </Stack>
    )
}