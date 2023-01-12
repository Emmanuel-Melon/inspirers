import { useContext, useState } from "react";
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
  Tag,
} from "@chakra-ui/react";
import { Button, Card, IconButton, Input, Modal } from "ui";
import { useFetch } from "hooks/useSwr";
import { JourneyContext } from "providers/JourneyProvider";
import NextLink from "next/link";

import { FiChevronsRight } from "react-icons/fi";
import { useRouter } from "next/router";
import {
  ListResources,
  AddResource,
  QuickAccess,
  ListFolders,
  ListRecentlyAdded,
  AddNewFolder,
  ImportResources,
} from "core/Backpack";

// add automations for:
// domains: trigger events when a resource from a given domain is added
// or when a certain resource type such as auto download or cache for offline viewing on phone
export default function Folder() {
  const router = useRouter();

  const {
    data: folder,
    isLoading: folderLoaded,
    isError: folderError,
  } = useFetch(`/backpacks/folders/${router.query.folderId}`);

  console.log(router);

  return (
    <Stack gap={2}>
      <Flex justifyContent="space-between" alignItems="cebter">
        <Breadcrumb separator={<FiChevronsRight />} borderRadius="0.5rem">
          <BreadcrumbItem>
            <BreadcrumbLink href="" textDecoration="none">
              My Backpack
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="">{folder?.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex gap={4} justifyContent="space-between">
        <Heading size="md">
          Resources{" "}
          <Box as="span" color="brand.accent">
            4
          </Box>
        </Heading>
        <Flex gap={2}>
          <Button>Automations</Button>
          <Button>Views</Button>
          <Button>Share</Button>
        </Flex>
      </Flex>
      <Flex></Flex>
      <Flex gap={4}>
        <Stack flex="2">
          <ListResources resources={folder?.resources} />
        </Stack>
        <Stack flex="1" gap={4}>
          <Heading size="sm">About</Heading>
          <Text>{folder?.description}</Text>
          <Flex gap={2}>
            <Tag bg="brand.accent">YouTube</Tag>
            <Tag bg="brand.secondary">Psychology</Tag>
            <Tag bg="brand.highlight3">Productivity</Tag>
          </Flex>
          <Stack>
            <Flex justifyContent="space-between">
              <Heading size="sm">Up Next</Heading>
              <NextLink href="/queue">View All</NextLink>
            </Flex>
            <Card>
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm">Up Next</Heading>
                <IconButton>
                  <FiChevronsRight />
                </IconButton>
              </Flex>
            </Card>
            <Card>
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm">Up Next</Heading>
                <IconButton>
                  <FiChevronsRight />
                </IconButton>
              </Flex>
            </Card>
            <Card>
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm">Up Next</Heading>
                <IconButton>
                  <FiChevronsRight />
                </IconButton>
              </Flex>
            </Card>
            <Card>
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm">Up Next</Heading>
                <IconButton>
                  <FiChevronsRight />
                </IconButton>
              </Flex>
            </Card>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
