import {
  Flex,
  Stack,
  Heading,
  Text,
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useMultiStyleConfig,
  useTab,
  Button,
  Tag
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { Insights } from "../core/Journeys/components/Insights";
import { Timeline } from "../core/Journeys/components/Timeline";
import { JourneyOverviewCard } from "../core/Journeys/components/JourneyOverviewCard";
import { Milestones } from "../core/Journeys/components/Milestones";
import { Activities } from "../core/Journeys/components/Acitivites";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import { Card, CustomTab, IconButton } from "ui";
import {
  FiMap, 
  FiActivity,
  FiInfo,
  FiClipboard,
  FiShoppingBag,
  FiUser,
  FiBell,
  FiPackage,
  FiLock,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import { JourneyOverview, AboutJourney } from "Journeys";
import { RiTreasureMapLine } from "react-icons/ri";

const hours = [
  {
    id: 1,
    starts: "9:00",
  }
]

export default function Index(props) {
  // When rendering client side don't display anything until loading is complete

  const { data: session, status } = useSession();
  console.log(session?.user);
  return (
    <Stack width="100%" gap={4}>
      <Flex gap={4}>
        <Flex gap={4} alignItems="center">
          <Box bg="brand.white" p="4" borderRadius="1rem" boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px">
            <RiTreasureMapLine size="1.5rem" />
          </Box>
          <Heading>Getting Into Harvard</Heading>
          <Flex gap={4}>
            <Text>04 Jun 2019</Text>
            <Text>When you started the Journey</Text>
          </Flex>
          <Flex gap={4}>
            <Card>
              <Stack alignItems="center">
                <Text>1</Text>
                <Text>Companions</Text>
              </Stack>
            </Card>
            <Card>
              <Stack alignItems="center">
                <Text>198</Text>
                <Text>Resources</Text>
              </Stack>
            </Card>
            <Card>
              <Stack alignItems="center">
                <Text>1</Text>
                <Text>Tasks</Text>
              </Stack>
            </Card>
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Tag>04 Jun 2019</Tag>
        <Flex gap={4}>
          <Button>Today</Button>
          <IconButton>
            <FiChevronsLeft />
          </IconButton>
          <IconButton>
            <FiChevronsRight />
          </IconButton>
        </Flex>
      </Flex>
      <Stack>
        <Flex gap={4}>
          <Stack bg="brand.white">
            <Heading size="md">Morning Routine</Heading>
          </Stack>
          <Stack>
            <Heading size="md">Morning Routine</Heading>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
}


/**
 *       <Tabs width="100%" defaultIndex={0} isLazy variant="solid-rounded" >
        <TabList
          gap={4}
          bg="brand.highlight3"
          p="4"
          borderRadius="1rem"
          marginBottom={4}
        >
          <CustomTab icon={<FiUser />}>Overview</CustomTab>
          <CustomTab icon={<FiInfo />}>Community</CustomTab>
          <CustomTab icon={<FiLock />}>About</CustomTab>
        </TabList>
        <TabPanels>
          <TabPanel p="none">
            <JourneyOverview />
          </TabPanel>
          <TabPanel p="none">
            <Text>Hello</Text>
          </TabPanel>
          <TabPanel p="none">
            <AboutJourney />
          </TabPanel>
        </TabPanels>
      </Tabs>
 */