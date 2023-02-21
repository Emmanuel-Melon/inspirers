import { FC } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Badge,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { HiChartPie, HiUserGroup, HiOutlineShare } from "react-icons/hi";
import { Button, Card, EmptyState, IconButton } from "ui";

type Activity = {
  id: string;
  title: string;
  description: string;
};

type ActivityListProps = {
  activities?: Activity[];
};

type ActivityProps = {
  activity: Activity;
};

const AcitivityCard: FC<ActivityProps> = ({ activity }) => {
  return (
    <Flex
      borderRadius="1rem"
      direction="column"
      color="brand.primaryText"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      bg="#fff"
      p="4"
      width="100%"
    >
      <Flex gap={4} direction="column">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="sm" color="brand.primaryeText" fontWeight="700">
            {activity.title}
          </Heading>
          <FiMoreVertical />
        </Flex>
        <Text>{activity.description}</Text>
      </Flex>
    </Flex>
  );
};

export const Activities: FC<ActivityListProps> = ({ activities = [] }) => {
  const home = true;
  if (home) {
    return (
      <EmptyState
        heading="Recent Activity"
        description="Don't let your day fly by without making the most of it! Create your
            first routine now."
        icon={<HiChartPie />}
      >
        <Flex gap={2}>
        <Button icon={<HiOutlineShare />} bg="brand.white" color="brand.accent">Invite Friends</Button>
        <Button icon={<HiUserGroup />}>Find Companions</Button>
        </Flex>
      </EmptyState>
    );
  }
  return (
    <Stack gap={4}>
      <Heading size="md">Recent Activity</Heading>
      <Stack>
        <Flex alignItems="center" gap={2}>
          <Avatar
            name="Oshigaki Kisame"
            src="https://bit.ly/broken-link"
            size="sm"
          />
          <Flex alignItems="center" gap={2}>
            <Heading size="sm">Cheben Mimi</Heading>
            <Text>5 minutes ago</Text>
          </Flex>
        </Flex>
        <Card>
          <Stack>
            <Flex alignItems="center" gap={2}>
              <HiMap />
              <Text>Started a new Journey</Text>
            </Flex>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
};
