import React from "react";
import {
  Avatar,
  Flex,
  Text,
  Heading,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useMultiStyleConfig,
  useTab,
  Button,
} from "@chakra-ui/react";
import { TaskList } from "../../Tasks/components/TaskList";
import { ListUsers } from "./ListUsers";
import { EmptyState } from "./EmptyState";
import { EmptyStateImages } from "./EmptyState";
import { WhatToDisplay } from "./EmptyState";

import {
  FiActivity,
  FiUsers,
  FiClipboard,
  FiShoppingBag,
  FiCompass,
} from "react-icons/fi";

export const ProfileSectionsTab = () => {
  const CustomTab = React.forwardRef(function InnerComponent(props, ref) {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Button
        {...tabProps}
        size="sm"
        alignItems="center"
        borderRadius="1rem"
        leftIcon={props.icon}
        bg={isSelected ? "brand.primary" : "transparent"}
        color={isSelected ? "brand.white" : "brand.primary"}
        _hover={{
          bg: isSelected ? "brand.primary" : "brand.highlight1",
        }}
      >
        {tabProps.children}
      </Button>
    );
  });

  const getStarted = () => {};
  return (
    <Flex
      direction="column"
      color="brand.primaryText"
      alignItems="center"
      width="65%"
    >
      <Tabs width="100%" defaultIndex={0} isLazy variant="unstyled">
        <TabList
          gap={4}
          bg="brand.highlight2"
          p="4"
          borderRadius="1rem"
          marginBottom={4}
        >
          <CustomTab icon={<FiCompass />}>Journeys</CustomTab>
          <CustomTab icon={<FiActivity />}>Activity</CustomTab>
          <CustomTab icon={<FiUsers />}>Companions</CustomTab>
          <CustomTab icon={<FiClipboard />}>Tasks</CustomTab>
          <CustomTab icon={<FiShoppingBag />}>Backpacks</CustomTab>
        </TabList>

        <TabPanels>
          <TabPanel p="none">
            {/* Below here status "on" will show what will render the data present if the data exists while "off" will render the empty state */}
            <WhatToDisplay
              status="off"
              panelTitle="Journeys"
              url={EmptyStateImages.JourneyEmptyStateImage}
              input={<Text>Success</Text>}
              getStarted={getStarted}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="off"
              panelTitle="Activity"
              url={EmptyStateImages.ActivityEmptyStateImage}
              input={<ListUsers users={[]} />}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="off"
              panelTitle="Companions"
              url={EmptyStateImages.MenteesEmptyStateImage}
              input={<ListUsers users={[]} />}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="off"
              panelTitle="Tasks"
              url={EmptyStateImages.TasksEmptyStateImage}
              input={<TaskList tasks={[]} />}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="off"
              panelTitle="Backpacks"
              url={EmptyStateImages.BackpacksEmptyStateImage}
              input={<TaskList tasks={[]} />}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
