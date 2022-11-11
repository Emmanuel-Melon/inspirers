import { Heading, Stack, Switch, Flex, Text, Box } from "@chakra-ui/react";
import { Button, Card } from "ui";
import { FiCloud } from "react-icons/fi";

export const IntegrationOverview = ({ integration }) => {
    return (
        <Card>
            <Stack gap={4}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex gap={2}  alignItems="center">
                        <Box bg="brand.highlight1" borderRadius="50%" p={4} color="brand.secondary">
                            {integration.icon}
                        </Box>
                        <Heading size="sm">{integration.name}</Heading>
                    </Flex>
                    <Switch id='email-alerts' color="brand.primary" />
                </Flex>
                <Text color="brand.secondaryText">
                    {integration.description}
                </Text>
                <Flex alignItems="flex-end" width="100%">
                    <Button size="xs">Manage</Button>
                </Flex>
            </Stack>
        </Card>
    )
}