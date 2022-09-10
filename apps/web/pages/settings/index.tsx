import React, { useCallback } from "react";
import {
  Avatar,
  Image,
  Img,
  Stack,
  Text,
  Link,
  Flex,
  Heading,
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useMultiStyleConfig,
  useTab,
  Button,
  FormControl,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import {
  FiActivity,
  FiUsers,
  FiClipboard,
  FiShoppingBag,
  FiCompass,
} from "react-icons/fi";
import { TextInput } from "ui";

export default function Settings() {
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
        borderRadius="1rem"
        leftIcon={props.icon}
        bg={isSelected ? "brand.primary" : "brand.highlight1"}
        color={isSelected ? "brand.primaryText" : "brand.primaryText"}
        _hover={{
          bg: isSelected ? "brand.hovered" : "brand.highlight2",
        }}
      >
        {tabProps.children}
      </Button>
    );
  });

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

  }, []);

  return (
    <Stack>
      <Heading size="md">Settings</Heading>
      <Flex
        direction="column"
        color="brand.primaryText"
        alignItems="center"
        width="65%"
      >
        <Tabs width="100%" defaultIndex={0} isLazy variant="unstyled">
          <TabList
            gap={4}
            bg="brand.highlight1"
            p="4"
            borderRadius="1rem"
            marginBottom={4}
          >
            <CustomTab icon={<FiCompass />}>Profile</CustomTab>
            <CustomTab icon={<FiActivity />}>Notifications</CustomTab>
            <CustomTab icon={<FiUsers />}>Account</CustomTab>
          </TabList>

          <TabPanels>
            <TabPanel p="none">
              <VStack alignItems="flex-start" width="100%">
                <FormControl>
                  <FormLabel>Display Name</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="John Doe"
                    type="text"
                    value={""}
                    name="name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="Must be unique"
                    type="text"
                    value={""}
                    name="username"
                  />
                </FormControl>
                <Button onClick={() => { }}>Save</Button>
              </VStack>
            </TabPanel>
            <TabPanel p="none">
              <VStack alignItems="flex-start" width="100%">
                <FormControl>
                  <FormLabel>Display Name</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="John Doe"
                    type="text"
                    value={""}
                    name="name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="Must be unique"
                    type="text"
                    value={""}
                    name="username"
                  />
                </FormControl>
                <Button onClick={() => { }}>Save</Button>
              </VStack>
            </TabPanel>
            <TabPanel p="none">
              <VStack alignItems="flex-start" width="100%">
                <FormControl>
                  <FormLabel>Display Name</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="John Doe"
                    type="text"
                    value={""}
                    name="name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="Must be unique"
                    type="text"
                    value={""}
                    name="username"
                  />
                </FormControl>
                <Button onClick={() => { }}>Save</Button>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Stack>
  );
}
