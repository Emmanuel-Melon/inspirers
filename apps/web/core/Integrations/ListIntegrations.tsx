import { Heading, Stack, Flex, Text } from "@chakra-ui/react";
import { IntegrationOverview } from "./IntegrationOverview";



export const ListIntegrations = ({ integrations }) => {
    return (
        <Stack>

            <Flex gap={4}>
                {integrations.map((integration) => (<IntegrationOverview integration={integration} />))}
            </Flex>
        </Stack>
    )
}