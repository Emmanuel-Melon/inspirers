import {
    Flex,
    Stack,
    Heading,
    Text,
    Box,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    useMultiStyleConfig,
    useTab,
    Button,
} from "@chakra-ui/react";
import { Card, CustomTab } from "ui";

export const JourneyOverview = () => {
    return (
        <div>
            <h1>JourneyOverview</h1>
            <Card>
                <Flex gap={4}>
                    <Flex>
                        <Stack>
                            <Heading size="md">Active Goal</Heading>
                            <Text>Build 5 front end applications.</Text>
                        </Stack>
                    </Flex>
                    <Flex>
                        <Stack>
                            <Heading size="md">Upcoming Goals</Heading>
                            <Text>Build 5 front end applications.</Text>
                        </Stack>
                    </Flex>
                </Flex>
            </Card>
        </div>
    );
}