import {
  Avatar,
  Flex,
  Heading,
  IconButton,
  Text,
  Tag,
  VStack,
  Checkbox,
  Stack,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useMultiStyleConfig,
  useTab,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Button } from "ui";
import {
  FiPlus,
  FiSliders,
  FiList,
  FiInfo,
  FiBell,
  FiCopy,
  FiTrash,
  FiArrowDown,
  FiX,
  FiTag,
  FiUsers,
  FiActivity,
  FiClipboard,
  FiCompass,
  FiShoppingBag,
  FiLink2,
  FiClock,
} from "react-icons/fi";

import { buttonColors } from "utils/ui";

export const TaskDetailView = ({ deleteTask, item }) => {
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
        bg="brand.white"
        color="brand.primary"
        _hover={{
          bg: isSelected ? "brand.primary" : "brand.highlight1",
        }}
      >
        {tabProps.children}
      </Button>
    );
  });
  return (
    <Flex p="8" width="800px" gap={8} color="brand.primaryText">
      <Stack gap={2}>
        <Flex justifyContent="space-between" alignItems="center">
          <VStack alignItems="flex-start">
            <Heading size="md" color="brand.primaryText">
              {item.title}
            </Heading>
          </VStack>
        </Flex>
        <Divider />
        <Flex gap={2} direction="column">
          <Heading size="sm">Description</Heading>
          <Text>{item.description}</Text>
        </Flex>
        <Flex gap={16}>
          <Flex gap={2} alignItems="center">
            <FiTag />
            <Text>Labels</Text>
          </Flex>
          <Tag
            width="fit-content"
            bg={buttonColors[item.status]}
            color="brand.white"
            size="sm"
            borderRadius="1rem"
          >
            {item.status}
          </Tag>
        </Flex>
        <Flex gap={6}>
          <Flex gap={2} alignItems="center">
            <FiUsers />
            <Text>Assignees</Text>
          </Flex>
        </Flex>
        <Tabs width="100%" defaultIndex={1} isLazy variant="solid-rounded">
          <TabList gap={4}>
            <CustomTab icon={<FiActivity />}>Activity</CustomTab>
            <CustomTab icon={<FiUsers />}>Comments</CustomTab>
            <CustomTab icon={<FiShoppingBag />}>Backpacks</CustomTab>
          </TabList>

          <TabPanels>
            <TabPanel p="4">
              <Flex gap={16}>
                <Text>Items</Text>
                <Stack spacing={3}>
                  <Checkbox colorScheme="red" defaultChecked>
                    Checkbox
                  </Checkbox>
                  <Checkbox colorScheme="green" defaultChecked>
                    Checkbox
                  </Checkbox>
                </Stack>
              </Flex>
            </TabPanel>
            <TabPanel p="4">
              <Flex gap={16}>
                <Text>Items</Text>
                <Stack spacing={3}>
                  <Checkbox colorScheme="red" defaultChecked>
                    Checkbox
                  </Checkbox>
                  <Checkbox colorScheme="green" defaultChecked>
                    Checkbox
                  </Checkbox>
                </Stack>
              </Flex>
            </TabPanel>
            <TabPanel p="4">
              <Flex gap={16}>
                <Stack spacing={3}>
                  <Checkbox colorScheme="red" defaultChecked>
                    Checkbox
                  </Checkbox>
                  <Checkbox colorScheme="green" defaultChecked>
                    Checkbox
                  </Checkbox>
                </Stack>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
      <Stack width="150px" alignItems="flex-start">
        <Text>Manage Task</Text>
        <Flex gap={16}>
          <Flex gap={2} alignItems="center">
            <FiTag />
            <Text>Labels</Text>
          </Flex>
        </Flex>
        <Divider />
        <Button
          icon={<FiLink2 />}
          size="sm"
          bg="brand.highlight2"
          color="brand.primary"
        >
          Add Resources
        </Button>
        <Button
          icon={<FiUsers />}
          size="sm"
          bg="brand.highlight2"
          color="brand.primary"
        >
          Members
        </Button>
        <Button
          icon={<FiClock />}
          size="sm"
          bg="brand.highlight2"
          color="brand.primary"
          width="100%"
        >
          Dates
        </Button>
        <Button
          icon={<FiTrash />}
          size="sm"
          bg="brand.highlight2"
          color="brand.primary"
          width="100%"
          onClick={deleteTask}
        >
          Delete
        </Button>
      </Stack>
    </Flex>
  );
};
