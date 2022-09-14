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
import { useFetch } from "../../hooks/useSwr";
import { ListRoutines } from "../../Routines/ListRoutines";
import { Button, Card, CustomCheckbox } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { FiFlag, FiPlayCircle, FiClock, FiPlus } from "react-icons/fi";


export default function Routine() {
    const router = useRouter();
    const { data: routine, isLoading, isError } = useFetch(`${router.asPath}`);
    return (
        <Stack color="brand.primaryText" gap={4}>
            <Flex justifyContent="space-between" alignItems="flex-start">
                <Stack>
                    <Heading size="md">Emmanuel's {routine?.data?.title} Routine</Heading>
                    <Text color="brand.secondaryText">{routine?.data?.description}</Text>
                </Stack>
                <Flex gap={4}>
                    <Button>Manage Routine</Button>
                    <Button>Today</Button>
                    <Button>Share</Button>
                </Flex>
            </Flex>
            <Flex gap={4}>
                <Flex>
                    <Card>
                        <Heading>Boy you killing it!</Heading>
                    </Card>
                </Flex>
                <Card>
                    <Stack gap={2}>
                        <Heading size="sm">Boy you killing it!</Heading>
                        <Flex gap={4}>
                            <Card>
                                <Flex gap={4} alignItems="center">
                                    <Box
                                        bg="brand.highlight2"
                                        p="4"
                                        borderRadius="1rem"
                                        color="brand.secondary"
                                        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                                    >
                                        <FiClock size="2rem" />
                                    </Box>
                                    <Stack>
                                        <Text color="brand.secondaryText">Duration</Text>
                                        <Text fontWeight="700">{moment(routine?.data?.createdAt).format("hh:mm")} PM</Text>
                                    </Stack>
                                </Flex>
                            </Card>
                            <Card>
                                <Flex gap={4} alignItems="center">
                                    <Box
                                        bg="brand.highlight"
                                        p="4"
                                        borderRadius="1rem"
                                        color="brand.secondary"
                                        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                                    >
                                        <FiPlayCircle size="2rem" />
                                    </Box>
                                    <Stack>
                                        <Text color="brand.secondaryText">Starts</Text>
                                        <Text fontWeight="700">{moment(routine?.data?.createdAt).format("hh:mm")} PM</Text>
                                    </Stack>
                                </Flex>
                            </Card>
                            <Card>
                                <Flex gap={4} alignItems="center">
                                    <Box
                                        bg="brand.highlight1"
                                        p="4"
                                        borderRadius="1rem"
                                        color="brand.secondary"
                                        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                                    >
                                        <FiFlag size="2rem" />
                                    </Box>
                                    <Stack>
                                        <Text color="brand.secondaryText">Ends at</Text>
                                        <Text fontWeight="700">{moment(routine?.data?.createdAt).format("hh:mm")} PM</Text>
                                    </Stack>
                                </Flex>
                            </Card>
                        </Flex>
                    </Stack>
                    <Stack my="4">
                        <Heading size="xs">Members</Heading>
                        <Flex gap={1}>
                            <Avatar />
                            <Avatar />
                            <Avatar />
                            <Box
                                bg="brand.highlight3"
                                p="4"
                                borderRadius="1rem"
                                color="brand.secondary"
                                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                            >
                                <FiPlus size="1.5rem" />
                            </Box>
                        </Flex>
                    </Stack>
                </Card>
            </Flex>
            <Flex>
                <VStack width="800px" alignItems="flex-start">
                    <Flex gap={2} justifyContent="space-between" width="100%">
                        <Heading size="md">Objectives</Heading>
                        <Flex gap={2}>
                            <Button size="sm">Today</Button>
                            <Button size="sm">Edit</Button>
                        </Flex>
                    </Flex>
                    <VStack gap={4}>
                    <CustomCheckbox
                        key={"Read 3 articles"}
                        size="lg"
                        colorScheme="orange"
                        _hover={{
                            color: "brand.secondary",
                        }}
                        text={"Read 3 articles"}
                        value={"Read 3 articles"}
                    />
                    <CustomCheckbox
                        key={"Read 3 articles"}
                        size="lg"
                        colorScheme="orange"
                        _hover={{
                            color: "brand.secondary",
                        }}
                        text={"Read 3 articles"}
                        value={"Read 3 articles"}
                    />
                    <CustomCheckbox
                        key={"Read 3 articles"}
                        size="lg"
                        colorScheme="orange"
                        _hover={{
                            color: "brand.secondary",
                        }}
                        text={"Read 3 articles"}
                        value={"Read 3 articles"}
                    />
                    </VStack>

                </VStack>
            </Flex>
            <Flex gap={4}>
                <VStack alignItems="flex-start" gap={2} >
                    <Heading size="sm">Tasks</Heading>
                    <VStack width="400px" alignItems="flex-start">
                        <Card>
                            <Flex gap={2} justifyContent="space-between">
                                <Heading size="xs">Finish routines page</Heading>
                                <Button size="sm">Start</Button>
                            </Flex>
                        </Card>
                        <Card>
                            <Flex gap={2} justifyContent="space-between">
                                <Heading size="xs">Implement Optimistic UIs</Heading>
                                <Button size="sm">Start</Button>
                            </Flex>
                        </Card>
                        <Card>
                            <Flex gap={2} justifyContent="space-between">
                                <Heading size="xs">Deploy services to Google App Engine</Heading>
                                <Button size="sm">Start</Button>
                            </Flex>
                        </Card>
                    </VStack>
                </VStack>
                <VStack alignItems="flex-start" gap={2} >
                    <Heading size="sm">Backpack</Heading>
                    <VStack width="400px" alignItems="flex-start">
                        <Card>
                            <Flex gap={2} justifyContent="space-between">
                                <Heading size="xs">Anderew Mead - Node.js Course</Heading>
                                <Button size="sm">Start</Button>
                            </Flex>
                        </Card>
                        <Card>
                            <Flex gap={2} justifyContent="space-between">
                                <Heading size="xs">Cypress Testing - FrontEnd Masters</Heading>
                                <Button size="sm">Start</Button>
                            </Flex>
                        </Card>
                        <Card>
                            <Flex gap={2} justifyContent="space-between">
                                <Stack>
                                    <Heading size="xs">Calculu III - Youtube</Heading>
                                    <Tag
                                        size="sm"
                                        width="fit-content"
                                        bg="brand.highlight"
                                    >
                                        Video
                                    </Tag>
                                </Stack>
                                <Button size="sm">Start</Button>
                            </Flex>
                        </Card>
                    </VStack>
                </VStack>
            </Flex>
        </Stack>
    );
}
