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
    useRadioGroup,
    Tag
} from "@chakra-ui/react";
import { Button, Card, CustomCheckbox, IconButton, Input, RadioCard } from "ui";
import { useRouter } from "next/router";
import moment from "moment";

import {
    FiPlus,
    FiTrash,
    FiCheck,
    FiTag,
    FiUserPlus,
    FiLink2,
    FiClock,
    FiX,
    FiLink,
    FiImage,
    FiVideo,
    FiMoreHorizontal,
    FiEye,
    FiMaximize2,
    FiArrowRight,
    FiChevronsRight,
    FiFolder,
    FiRotateCw,
    FiUsers
} from "react-icons/fi";
import { client } from "utils/client";


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
        <Stack gap={4}>
            <Box>
            <Flex px="4" py="2" justifyContent="space-between" alignItems="center">
                    <Flex gap={1} alignItems="center"  color="brand.secondaryText">
                        <Tag
                            color="brand.secondaryText"
                            bg="brand.highlight2"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        >
                            Another Routine
                        </Tag>
                        <FiChevronsRight />
                        <Text size="sm">Manage</Text>
                    </Flex>
                    <Flex gap={2} alignItems="center">
                        <IconButton label={""} onClick={() => { }}>
                            <FiMaximize2 />
                        </IconButton>
                        <IconButton label={""} onClick={closeModal}>
                            <FiX />
                        </IconButton>
                    </Flex>
                </Flex>
                <Stack gap={2}  px="4" py="2">
                    <FormControl>
                        <Input
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Routine Name"
                            type="text"
                            value={title}
                            name="title"
                            autoFocus={true}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Starting Date</FormLabel>
                        <Input
                            onChange={e => setStartDay(e.target.value)}
                            placeholder="e.g name@domain.com"
                            type="date"
                            value={startDay}
                            name="title"

                        />
                    </FormControl>
                    <Flex gap={4} alignItems="center">
                        <Text>Schedule</Text>
                        <HStack {...group}>
                            {options.map((value) => {
                                const radio = getRadioProps({ value });
                                return (
                                    <RadioCard
                                        key={value}
                                        {...radio}
                                        bg="brand.white"
                                        checked={{
                                            bg: "brand.secondaryText",
                                            color: "brand.white",
                                        }}
                                        hover={{
                                            borderColor: "brand.highlight2",
                                        }}
                                        border="groove 0.10rem"
                                        borderColor="brand.secondaryText"
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