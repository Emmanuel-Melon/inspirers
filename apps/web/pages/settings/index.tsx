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
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import {
  FiActivity,
  FiInfo,
  FiClipboard,
  FiShoppingBag,
  FiUser,
  FiBell,
  FiPackage,
  FiLock
} from "react-icons/fi";
import { CustomTab, Input } from "ui";
import { useFetch } from "../../hooks/useSwr";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { UserInfo } from "Settings/UserInfo";
import { IntegrationSettings } from "Settings/IntegrationSettings";
import { NotificationSettings } from "Settings/NotificationSettings";
import { AccountSettings } from "Settings/AccountSettings";



export default function Settings(props) {
  const { data: user, isError } = useFetch(`/users/${props?.user?.id}`);


  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

  }, []);


  return (
    <Stack width="100%">
      <Heading size="md">Settings</Heading>
      <Flex
        direction="column"
        color="brand.primaryText"
        alignItems="flex-start"
        width="100%"
      >
        <Tabs width="100%" defaultIndex={0} isLazy variant="solid-rounded" >
          <TabList
            gap={4}
            bg="brand.highlight3"
            p="4"
            borderRadius="1rem"
            marginBottom={4}
          >
            <CustomTab icon={<FiUser />}>Profile</CustomTab>
            <CustomTab icon={<FiBell />}>Notifications</CustomTab>
            <CustomTab icon={<FiInfo />}>Account</CustomTab>
            <CustomTab icon={<FiPackage />}>Integrations</CustomTab>
            <CustomTab icon={<FiLock />}>Privacy</CustomTab>
          </TabList>

          <TabPanels>
            <TabPanel p="none"
            >
              <UserInfo user={user} />
            </TabPanel>
            <TabPanel p="none"
            >
              <NotificationSettings user={user} />
            </TabPanel>
            <TabPanel p="none"
            >
              <AccountSettings user={user} />
            </TabPanel>
            <TabPanel p="none"

            >
              <IntegrationSettings user={user} />
            </TabPanel>
            <TabPanel p="none"

            >
              <Text>Privacy</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Stack>
  );
}

export async function getServerSideProps(context) {
  const { session, user } = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const { email, name, image, bio } = session?.user || {};
  const { id } = user || {};

  return {
    props: {
      user: {
        id: id || null,
        email: email || null,
        name: name || null,
        bio: bio || null,
        image: image || null,
      },
    },
  };
}
