import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
import { JourneyCard } from "./components/JourneyCard";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useFetch } from "../../hooks/useSwr";
import { JourneyBluePrint } from "./components/JourneyBluePrint";



export default function Index(props) {
    const { data, isLoading, isError } = useFetch("/journeys/blueprints");

    return (
        <Flex justifyContent="space-between" width="100%" gap={8}>
            <VStack width="30%" alignItems="flex-start">
                <>
                    <Heading size="md" color="brand.primary">Browse templates</Heading>
                    <VStack
                        alignItems="flex-start"
                        p="4"
                        borderRadius="1rem"
                        bg="brand.highlight2"
                        color="brand.primaryText"
                        width="100%"
                    >
                        <Text>Accounting</Text>
                        <Text>Software Engineering</Text>
                        <Text>Cooking</Text>
                        <Text>Poetry</Text>
                        <Text
                            color="brand.primaryText"
                            bg="brand.highlight2"
                            fontWeight="700"
                            borderRadius="1rem"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                            fontSize="12px"
                            px="2"
                            py="1px"
                            width="fit-content"
                        >Show More</Text>
                    </VStack>
                </>
                <>
                    <Heading size="md" color="brand.primary">Filter Journeys</Heading>
                    <VStack
                        alignItems="flex-start"
                        p="4"
                        borderRadius="1rem"
                        bg="brand.highlight2"
                        color="brand.primaryText"
                        width="100%"
                    >
                        <Text>Experience</Text>
                        <Text>Physical</Text>
                        <Text
                            color="brand.primaryText"
                            bg="brand.highlight2"
                            fontWeight="700"
                            borderRadius="1rem"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                            fontSize="12px"
                            px="2"
                            py="1px"
                            width="fit-content"
                        >Show More</Text>
                    </VStack>
                </>
            </VStack>
            <VStack width="70%" gap={8}>

                <JourneyCard user={props.user} />
                <VStack alignItems="flex-start" width="100%">
                    <Flex justifyContent="space-between" width="100%" alignItems="center">
                        <Heading size="md">Career</Heading>
                        <Text
                            color="brand.primaryText"
                            bg="brand.highlight2"
                            fontWeight="700"
                            borderRadius="1rem"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                            fontSize="12px"
                            px="2"
                            py="1px"
                        >
                            View More
                        </Text>
                    </Flex>
                    <Flex gap={4} flexWrap="wrap">
                        {
                            data?.data?.map(bluePrint => <JourneyBluePrint bluePrint={bluePrint} key={bluePrint.id} />)
                        }
                    </Flex>
                </VStack>
                <VStack alignItems="flex-start" width="100%">
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Heading size="md">Career</Heading>
                        <Text
                            color="brand.primaryText"
                            bg="brand.highlight2"
                            fontWeight="700"
                            borderRadius="1rem"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                            fontSize="12px"
                            px="2"
                            py="1px"
                        >
                            View More
                        </Text>
                    </Flex>
                    <Flex gap={4} flexWrap="wrap">
                        {
                            data?.data?.map(bluePrint => <JourneyBluePrint bluePrint={bluePrint} key={bluePrint.id} />)
                        }
                    </Flex>
                </VStack>
            </VStack>
        </Flex>
    );
}

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)
    const { id, email, name, image, bio } = session?.user || {};

    return {
        props: {
            user: {
                id: id || null,
                email: email || null,
                name: name || null,
                bio: bio || null,
                image: image || null
            }
        },
    }
}