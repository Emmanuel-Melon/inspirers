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
} from "@chakra-ui/react";
import { Button, Card, IconButton, Input, Modal } from "ui";
import { Folder, ResourceType, Backpack, Resource } from "@prisma/client";

type ResourceCardProps = {
    resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
    console.log(resource)
    return (
        <Card>
            <Heading size="sm">{resource.title}</Heading>
        </Card>
    )
}

type ListResourceProps = {
    resources: Resource[];
}

export const ListResources = ({ resources }: ListResourceProps) => {
  return (
    <Stack gap={2}>
        <Heading size="sm">Resources <Box as="span" color="brand.accent">4</Box></Heading>
      {resources?.map((resource) => (
        <ResourceCard resource={resource} key={resource.id} />
      ))}
    </Stack>
  );
};
