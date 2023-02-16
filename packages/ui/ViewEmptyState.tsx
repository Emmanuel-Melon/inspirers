import { Box, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import { Button, IconButton, Card } from "ui";
import { FiInfo } from "react-icons/fi";

export type EmptyStateAction = {
  title: string;
  handler: () => void;
};
export interface EmptyStateProps {
  heading: string;
  description: string;
  icon: any;
  action?: EmptyStateAction;
  children: any;
}

export const EmptyState = ({
  icon,
  heading,
  description,
  action,
  children,
}: EmptyStateProps) => {
  return (
    <Card bg="brand.white">
      <Stack>
      <Box
          bg="brand.accent"
          width="fit-content"
          p="2"
          borderRadius="1rem"
          color="brand.white"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        >
          {icon}
        </Box>
        <Stack flex="2">
          <Flex justifyContent="space-between">
            <Heading size="md" as="h3" color="brand.primaryText">
              {heading}
            </Heading>
            <IconButton color="brand.accent">
              <FiInfo />
            </IconButton>
          </Flex>
          <Text color="brand.secondaryText">{description}</Text>
          {children}
        </Stack>
      </Stack>
    </Card>
  );
};
