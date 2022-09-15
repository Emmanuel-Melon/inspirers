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
    IconButton
} from "@chakra-ui/react";
import { Button, Card, CustomCheckbox } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { FiFlag, FiPlayCircle, FiClock, FiMoreHorizontal, FiArrowRight } from "react-icons/fi";

export const RoutineTasks = ({ routine }) => {
    return (
        <Stack alignItems="flex-start">
            <Flex justifyContent="space-between" width="100%">
            <Stack>
                    <Heading size="sm" color="brand.secondary">Tasks</Heading>
                    <Text color="brand.secondaryText">You can organize your days and weeks with some routines</Text>
                </Stack>
                <IconButton size="sm" bg="brand.highlight2" aria-label={""}>
                    <FiMoreHorizontal />
                </IconButton>
            </Flex>
            <Card  onClick={() => {}} bg={""}>
                <Flex gap={2} justifyContent="space-between">
                    <Stack>
                        <Heading size="xs">Finish routines page</Heading>
                        <Flex gap={2}>
                            <Tag
                                size="sm"
                                width="fit-content"
                                bg="brand.highlight2"
                            >
                                Inspirers
                            </Tag>
                            <Tag
                                size="sm"
                                width="fit-content"
                                bg="brand.highlight3"
                            >
                                Inspirers
                            </Tag>
                            <Tag
                                size="sm"
                                width="fit-content"
                                bg="brand.highlight1"
                            >
                                Inspirers
                            </Tag>
                        </Flex>
                    </Stack>
                    <IconButton size="sm" bg="brand.primary" aria-label={""}>
                        <FiArrowRight />
                    </IconButton>
                </Flex>
            </Card>
            <Card children={undefined} onClick={undefined} bg={""}>
                <Flex gap={2} justifyContent="space-between">
                    <Stack>
                        <Heading size="xs">Implement Optimistic UIs</Heading>
                        <Flex gap={2}>
                            <Tag
                                size="sm"
                                width="fit-content"
                                bg="brand.highlight2"
                            >
                                Inspirers
                            </Tag>
                            <Tag
                                size="sm"
                                width="fit-content"
                                bg="brand.highlight1"
                            >
                                Inspirers
                            </Tag>
                            <Tag
                                size="sm"
                                width="fit-content"
                                bg="brand.highlight3"
                            >
                                Inspirers
                            </Tag>
                        </Flex>
                    </Stack>
                    <IconButton size="sm" bg="brand.highlight2" aria-label={""}>
                        <FiArrowRight />
                    </IconButton>
                </Flex>
            </Card>
            <Card children={undefined} onClick={undefined} bg={""}>
                <Flex gap={2} justifyContent="space-between">
                    <Stack>
                        <Heading size="xs">Deploy services to Google App Engine</Heading>
                        <Flex gap={2}>
                            <Tag
                                size="sm"
                                width="fit-content"
                                bg="brand.highlight1"
                            >
                                Inspirers
                            </Tag>
                            <Tag
                                size="sm"
                                width="fit-content"
                                bg="brand.highlight2"
                            >
                                Inspirers
                            </Tag>
                            <Tag
                                size="sm"
                                width="fit-content"
                                bg="brand.highlight3"
                            >
                                Inspirers
                            </Tag>
                        </Flex>
                    </Stack>
                    <IconButton size="sm" bg="brand.highlight2" aria-label={""}>
                        <FiArrowRight />
                    </IconButton>
                </Flex>
            </Card>
        </Stack>
    )
}