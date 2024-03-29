import { Heading, Stack, Flex, Text } from "@chakra-ui/react";
import { IntegrationOverview } from "./IntegrationOverview";
import { Button, EmptyState } from "ui";
import { FiGithub, FiCalendar, FiHardDrive, FiPackage } from "react-icons/fi";

export const ListIntegrations = ({ integrations }) => {
  if (integrations.length === 0) {
    return (
      <EmptyState
        heading="Installed Apps"
        description="Install apps to supercharge your journey."
        icon={<FiPackage />}
      >
        <Button>Learn More</Button>
      </EmptyState>
    );
  }
  return (
    <Flex gap={4} direction={["row", "column", "column", "column"]}>
      {integrations.map((integration) => (
        <IntegrationOverview integration={integration} />
      ))}
    </Flex>
  );
};
