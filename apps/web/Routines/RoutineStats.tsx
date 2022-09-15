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
    Tag
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
                <Card bg="brand.secondary">
                    <Flex gap={4} alignItems="center" color="brand.white">
                        <Box
                            bg="brand.highlight3"
                            p="2"
                            borderRadius="1rem"
                            color="brand.grey"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        >
                            <FiClock size="1rem" />
                        </Box>
                        <Stack>
                            <Text color="brand.grey">Duration</Text>
                            <Text fontWeight="700">2 hours</Text>
                        </Stack>
                    </Flex>
                </Card>
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
                            <Text fontWeight="700">{moment(routine?.createdAt).format("hh:mm")} PM</Text>
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
                            <Text fontWeight="700">{moment(routine?.createdAt).add(2, "hours").format("hh:mm")} PM</Text>
                        </Stack>
                    </Flex>
                </Card>
            </Flex>
        </Stack>
    )
}