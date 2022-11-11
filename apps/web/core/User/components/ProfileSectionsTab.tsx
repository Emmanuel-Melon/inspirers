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
import { ResourceList } from "core/User/ResourcesList";
import { UserCompanions } from "core/User/Companions";
import { UserActivity } from "core/User/Activity";
import { CurrentJourney } from "core/User/CurrentJourney";

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
        bg={isSelected ? "brand.accent" : "transparent"}
        color={isSelected ? "brand.white" : "brand.primaryText"}
        _hover={{
          bg: isSelected ? "brand.hovered" : "brand.highlight3",
          color: isSelected ? "brand.primaryText" : "brand.primaryText",
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
      width="100%"
    >
      <Tabs width="100%" defaultIndex={0} isLazy variant="unstyled">
        <TabList
          gap={4}
          bg="brand.highlight3"
          p="4"
          borderRadius="1rem"
          marginBottom={4}
        >
          <CustomTab icon={<FiCompass />}>Journey</CustomTab>
          <CustomTab icon={<FiActivity />}>Activity</CustomTab>
          <CustomTab icon={<FiUsers />}>Companions</CustomTab>
          <CustomTab icon={<FiClipboard />}>Tasks</CustomTab>
          <CustomTab icon={<FiShoppingBag />}>Backpacks</CustomTab>
        </TabList>

        <TabPanels>
          <TabPanel p="none">
            {/* Below here status "on" will show what will render the data present if the data exists while "off" will render the empty state */}
            <WhatToDisplay
              status="on"
              panelTitle="Journey"
              url={EmptyStateImages.JourneyEmptyStateImage}
              input={<CurrentJourney />}
              getStarted={getStarted}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="on"
              panelTitle="Activity"
              url={EmptyStateImages.ActivityEmptyStateImage}
              input={<UserActivity />}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="on"
              panelTitle="Companions"
              url={EmptyStateImages.MenteesEmptyStateImage}
              input={<UserCompanions />}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="on"
              panelTitle="Tasks"
              url={EmptyStateImages.TasksEmptyStateImage}
              input={<TaskList tasks={[]} />}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="on"
              panelTitle="Backpacks"
              url={EmptyStateImages.BackpacksEmptyStateImage}
              input={<ResourceList />}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
