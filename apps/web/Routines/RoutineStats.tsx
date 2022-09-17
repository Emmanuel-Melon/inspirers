import {
    Stack,
    Text,
    Flex,
    Heading,
    Box,
} from "@chakra-ui/react";
import { Button, Card, CustomCheckbox } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { FiFlag, FiPlayCircle, FiClock, FiPlus } from "react-icons/fi";

export const RoutineStats = ({ routine }) => {
    return (
        <Stack gap={2}>
            <Heading size="sm" color="brand.secondary">Overview</Heading>
            <Flex gap={4}>
                <Card>
                    <Flex gap={2} alignItems="center">
                        <Box
                            bg="brand.highlight"
                            p="2"
                            borderRadius="1rem"
                            color="brand.secondary"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        >
                            <FiPlayCircle size="1rem" />
                        </Box>
                        <Stack>
                            <Text color="brand.secondaryText">Starts</Text>
                            <Text fontWeight="700">{moment(routine?.startsAt).format("hh:mm A")}</Text>
                        </Stack>
                    </Flex>
                </Card>
                <Card>
                    <Flex gap={2} alignItems="center">
                        <Box
                            bg="brand.highlight1"
                            p="2"
                            borderRadius="1rem"
                            color="brand.secondary"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        >
                            <FiFlag size="1rem" />
                        </Box>
                        <Stack>
                            <Text color="brand.secondaryText">Ends at</Text>
                            <Text fontWeight="700">{moment(routine?.finishesAt).format("hh:mm A")}</Text>
                        </Stack>
                    </Flex>
                </Card>
            </Flex>
        </Stack>
    )
}