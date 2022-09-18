import { Box, Heading, Text, Stack } from "@chakra-ui/react";

export interface ErrorStateProps {
    heading: string;
    description: string;
    icon: any;
}

export const ErrorState = ({ icon, heading, description }: ErrorStateProps) => {
    return (
        <Stack
            bg="brand.highlight1"
            p="8"
            gap={4}
            alignItems="center"
            borderRadius="1rem"
            textAlign="center"
        >
            <Box
                bg="brand.white"
                width="fit-content"
                p="4"
                borderRadius="1rem"
                color="brand.secondary"
            >
                {icon}
            </Box>
            <Heading size="sm">{heading}</Heading>
            <Text textAlign="center">{description}</Text>
        </Stack>)
}