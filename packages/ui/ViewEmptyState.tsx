import { Box, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import { Button, Card } from "ui";
import { FiPlus } from "react-icons/fi";

export type EmptyStateAction = {
    title: string;
    handler: () => void;
}
export interface EmptyStateProps {
    heading: string;
    description: string;
    icon: any;
    action?: EmptyStateAction;
}

export const EmptyState = ({ icon, heading, description, action }: EmptyStateProps) => {
    return (
        <Card bg="brand.white">
            <Flex>
                <Flex
                    gap={4}
                    alignItems="center"
                >
                    <Box
                        bg="brand.white"
                        width="fit-content"
                        p="4"
                        borderRadius="1rem"
                        color="brand.secondaryText"
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    >
                        {icon}
                    </Box>
                    <Stack>
                        <Heading size="md" as="h3" color="brand.primaryText">{heading}</Heading>
                        <Text color="brand.secondaryText">{description}</Text>
                    </Stack>
                </Flex>
                {
                    action && <Button
                        size="sm"
                        icon={<FiPlus />}
                        onClick={action.handler}
                    >
                        {action.title}
                    </Button>
                }
            </Flex>
        </Card>
    )
}