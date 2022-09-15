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

export const RoutineObjectives = ({ routine }) => {
    return (
        <Stack alignItems="flex-start" width="100%">
            <Flex gap={2} justifyContent="space-between" width="100%">
                <Stack>
                    <Heading size="sm" color="brand.secondary">Objectives</Heading>
                    <Text color="brand.secondaryText">You can organize your days and weeks with some routines</Text>
                </Stack>
                <Flex gap={2}>
                    <Button size="sm" bg="brand.white">Today</Button>
                    <Button size="sm" bg="brand.white">Edit</Button>
                </Flex>
            </Flex>
            <Stack gap={2} width="100%">
                <Card>
                    <Flex gap={2} alignItems="center" justifyContent="space-between">
                        <Flex>
                            <Heading size="sm">Read 3 articles</Heading>
                        </Flex>
                        <Flex>
                            <Text>Read 3 articles</Text>
                        </Flex>
                        <Stack>
                            <Text color="brand.secondaryText">%60 completed</Text>
                            <Progress
                                value={60}
                                hasStripe
                                size="sm"
                                colorScheme="green"
                                borderRadius="1rem"
                            />
                        </Stack>
                        <Flex>
                            <Button size="sm">Continue</Button>
                        </Flex>
                    </Flex>
                </Card>
                <Card>
                    <Flex gap={2} alignItems="center" justifyContent="space-between">
                        <Flex>
                            <Heading size="xs">Review Pull Requests</Heading>
                        </Flex>
                        <Flex><Text>Read 3 articles</Text>
                        </Flex>
                        <Stack>
                            <Text color="brand.secondaryText">%0 completed</Text>
                            <Progress
                                value={0}
                                hasStripe
                                size="sm"
                                colorScheme="grey"
                                borderRadius="1rem"
                            />
                        </Stack>
                        <Flex>
                            <Button size="sm" bg="brand.highlight2">Start</Button>
                        </Flex>
                    </Flex>
                </Card>
                <Card>
                    <Flex gap={2} alignItems="center" justifyContent="space-between">
                        <Flex>
                            <Heading size="sm">Reply to emails</Heading>
                        </Flex>
                        <Flex>
                        <Text>Read 3 articles</Text>
                        </Flex>
                        <Stack>
                            <Text color="brand.secondaryText">%0 completed</Text>
                            <Progress
                                value={0}
                                hasStripe
                                size="sm"
                                colorScheme="green"
                                borderRadius="1rem"
                            />
                        </Stack>
                        <Flex>
                            <Button size="sm"  bg="brand.highlight2">Start</Button>
                        </Flex>
                    </Flex>
                </Card>
            </Stack>
        </Stack>
    )
}