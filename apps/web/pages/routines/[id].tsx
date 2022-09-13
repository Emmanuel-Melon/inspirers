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
} from "@chakra-ui/react";
import { useFetch } from "../../hooks/useSwr";
import { ListRoutines } from "../../Routines/ListRoutines";
import { Button } from "ui";
import { useRouter } from "next/router";

export default function Routine() {
    const router = useRouter();
    const { data: routine, isLoading, isError } = useFetch(`${router.asPath}`);
    return (
        <Stack color="brand.primaryText">
            <Flex justifyContent="space-between">
                <Heading>{routine?.data?.title}</Heading>
            </Flex>
            <Flex gap={4}>
                <Button>Starts</Button>
                <Button>Finishes</Button>
            </Flex>
            <Flex>
                <Progress hasStripe value={64} colorScheme='green' size='md' />
            </Flex>
            <Flex gap={8}>
                <VStack alignItems="flex-start" gap={4} >
                    <Heading>Items</Heading>
                    <VStack width="400px" alignItems="flex-start">
                        <Flex>
                            <Text>Hello, World</Text>
                        </Flex>
                        <Flex>
                            <Text>Hello, World</Text>
                        </Flex>
                        <Flex>
                            <Text>Hello, World</Text>
                        </Flex>
                        <Flex>
                            <Text>Hello, World</Text>
                        </Flex>
                    </VStack>
                </VStack>
                <VStack alignItems="flex-start">
                    <Flex>
                        <Stat bg="brand.white" borderRadius="1rem" p="4" height="fit-content">
                            <StatLabel>Collected Fees</StatLabel>
                            <StatNumber>£0.00</StatNumber>
                            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                        </Stat>
                    </Flex>
                    <Flex>
                        <StatGroup gap={4}>
                            <Stat  bg="brand.white" borderRadius="1rem" p="4" height="fit-content">
                                <StatLabel>Sent</StatLabel>
                                <StatNumber>345,670</StatNumber>
                                <StatHelpText>
                                    <StatArrow type='increase' />
                                    23.36%
                                </StatHelpText>
                            </Stat>

                            <Stat  bg="brand.white" borderRadius="1rem" p="4" height="fit-content">
                                <StatLabel>Clicked</StatLabel>
                                <StatNumber>45</StatNumber>
                                <StatHelpText>
                                    <StatArrow type='decrease' />
                                    9.05%
                                </StatHelpText>
                            </Stat>
                        </StatGroup>
                    </Flex>
                </VStack>
            </Flex>
        </Stack>
    );
}
