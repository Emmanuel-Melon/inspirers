import { Flex, Text, Heading } from "@chakra-ui/react";



export default function Index() {

    return (
        <Flex justifyContent="space-between" width="100%" gap={8}>
            <Flex
                bg="rgba(102, 73, 0, 0.01)"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                height="600px"
                borderRadius="1rem"
                p="4"
                flexGrow={1}
                direction="column"
            >
                <Text>Summarize journeys</Text>
            </Flex>
        </Flex>
    );
}