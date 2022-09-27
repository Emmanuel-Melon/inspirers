import { Box, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import { Button } from "ui";
import { FiPlus } from "react-icons/fi";

export type EmptyStateAction = {
    title: string;
    handler: () => void;
}
export interface EmptyStateProps {
    heading: string;
    description: string;
    icon: any;
    action: EmptyStateAction;
}

export const EmptyState = ({ icon, heading, description, action }: EmptyStateProps) => {
    return (
        <Flex
            bg="brand.highlight1"
            p="4"
            gap={4}
            alignItems="center"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            color="brand.primaryText"
        >
            <Flex
                gap={4}
                alignItems="center"
            >
                <Box
                    bg="brand.white"
                    width="fit-content"
                    p="2"
                    borderRadius="1rem"
                    color="brand.secondary"
                >
                    {icon}
                </Box>
                <Stack>
                    <Heading size="md">{heading}</Heading>
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
    )
}