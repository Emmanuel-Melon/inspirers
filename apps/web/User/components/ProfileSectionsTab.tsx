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

const tasks = [
  {
    id: 14,
    title: "Throw Some D's",
    userId: 1,
    description: "Rich boy selling crack",
    completed: false,
    createdAt: "2022-07-05T09:40:16.053Z",
  },
  {
    id: 15,
    title: "Out Here Grinding",
    userId: 1,
    description: "Making things look great",
    completed: false,
    createdAt: "2022-07-05T09:42:40.739Z",
  },
  {
    id: 16,
    title: "Hustler's Ambition",
    userId: 1,
    description: "Out here on a mission",
    completed: false,
    createdAt: "2022-07-05T09:43:32.044Z",
  },
  {
    id: 17,
    title: "Pimpin",
    userId: 1,
    description: "Chilling and smoking here",
    completed: false,
    createdAt: "2022-07-05T09:44:21.664Z",
  },
];

const users = [
  {
    id: 14,
    name: "Throw Some D's",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg",
  },
  {
    id: 15,
    name: "Out Here Grinding",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg",
  },
  {
    id: 16,
    name: "Hustler's Ambition",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg",
  },
  {
    id: 17,
    name: "Pimpin",
    image:
      "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg",
  },
];

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
  return (
    <Flex
      direction="column"
      color="brand.primaryText"
      alignItems="center"
      width="65%"
    >
      <Tabs width="100%" defaultIndex={1} isLazy variant="unstyled">
        <TabList
          gap={4}
          bg="brand.highlight2"
          p="4"
          borderRadius="1rem"
          marginBottom={4}
        >
          <CustomTab icon={<FiCompass />}>Journeys</CustomTab>
          <CustomTab icon={<FiActivity />}>Activity</CustomTab>
          <CustomTab icon={<FiUsers />}>Mentees</CustomTab>
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
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="off"
              panelTitle="Activity"
              url={EmptyStateImages.ActivityEmptyStateImage}
              input={<ListUsers users={users} />}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="off"
              panelTitle="Mentees"
              url={EmptyStateImages.MenteesEmptyStateImage}
              input={<ListUsers users={users} />}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="off"
              panelTitle="Tasks"
              url={EmptyStateImages.TasksEmptyStateImage}
              input={<TaskList tasks={tasks} />}
            />
          </TabPanel>
          <TabPanel p="none">
            <WhatToDisplay
              status="off"
              panelTitle="Backpacks"
              url={EmptyStateImages.BackpacksEmptyStateImage}
              input={<TaskList tasks={tasks} />}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
