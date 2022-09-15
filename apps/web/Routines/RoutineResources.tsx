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
    IconButton,

} from "@chakra-ui/react";
import { Button, Card, CustomCheckbox } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { FiFlag, FiPlayCircle, FiClock, FiPlus, FiArrowRight, FiMoreHorizontal } from "react-icons/fi";

export const RoutineResources = ({ routine }) => {
    return (
        <Stack alignItems="flex-start" >
            <Flex justifyContent="space-between" width="100%">
            <Stack>
                    <Heading size="sm" color="brand.secondary">Backpack</Heading>
                    <Text color="brand.secondaryText">You can organize your days and weeks with some routines</Text>
                </Stack>
                <IconButton size="sm" bg="brand.highlight2" aria-label={""}>
                    <FiMoreHorizontal />
                </IconButton>
            </Flex>
            <Card>
                    <Flex gap={2} justifyContent="space-between">
                        <Stack>
                            <Heading size="xs">Anderew Mead - Node.js Course</Heading>
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
                        <IconButton size="sm" bg="brand.primary">
                            <FiArrowRight />
                        </IconButton>
                    </Flex>
                </Card>
                <Card>
                    <Flex gap={2} justifyContent="space-between">
                        <Stack>
                            <Heading size="xs">Cypress Testing - FrontEnd Masters</Heading>
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
                        <IconButton size="sm" bg="brand.highlight2">
                            <FiArrowRight />
                        </IconButton>
                    </Flex>
                </Card>
                <Card>
                    <Flex gap={2} justifyContent="space-between">
                        <Stack>
                            <Heading size="xs">Calculu III - Youtube</Heading>
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
                        <IconButton size="sm" bg="brand.highlight2">
                            <FiArrowRight />
                        </IconButton>
                    </Flex>
                </Card>
        </Stack>
    )
}