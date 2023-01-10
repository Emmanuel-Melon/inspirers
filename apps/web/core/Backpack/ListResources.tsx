import { FC } from "react";
import {
  Box,
  Stack,
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  CheckboxGroup,
  Checkbox,
  Tag
} from "@chakra-ui/react";
import { Button, Card, IconButton, Input, Modal } from "ui";
import { Folder, ResourceType, Backpack, Resource } from "@prisma/client";
import { FiMoreHorizontal } from "react-icons/fi";
import moment from "moment";

type ResourceCardProps = {
  resource: Resource;
};

const ResourceCard: FC<ResourceCardProps> = ({ resource }) => {
  console.log(resource);
  return (
    <Card>
      <Flex alignItems="center" gap={2}>
        <Checkbox bgColor="brand.accent" />
        <Heading size="sm">{resource.title}</Heading>
        <Text>{moment(resource.createdAt).fromNow()}</Text>
        <IconButton>
          <FiMoreHorizontal />
        </IconButton>
      </Flex>
      <Flex gap={2}>
        <Tag>{resource.type}</Tag>
        <Tag>{resource.origin}</Tag>
      </Flex>
    </Card>
  );
};

type ListResourceProps = {
  resources: Resource[];
};

export const ListResources: FC<ListResourceProps> = ({ resources }) => {
  return (
    <Stack gap={2}>
      <Heading size="md">
        Resources{" "}
        <Box as="span" color="brand.accent">
          4
        </Box>
      </Heading>
      {resources?.map((resource) => (
        <ResourceCard resource={resource} key={resource.id} />
      ))}
    </Stack>
  );
};
