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
} from "@chakra-ui/react";
import { Button, Card, IconButton, Input, Modal } from "ui";
import { useFetch } from "../../hooks/useSwr";
import { JourneyContext } from "providers/JourneyProvider";

import {
  FiBarChart2,
  FiFilter,
  FiList,
  FiCalendar,
  FiLayers,
  FiGrid,
  FiChevronsRight,
} from "react-icons/fi";
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
            <BreadcrumbLink href="">
              {folder?.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex gap={2}>
          <Button>Automations</Button>
        </Flex>
      </Flex>
      <Flex gap={4}>
      <Heading size="md">
        Resources{" "}
        <Box as="span" color="brand.accent">
          4
        </Box>
      </Heading>
        <Text>Automations</Text>
        <Text>Users</Text>
        <Text>Views</Text>
        <Text>Share</Text>
      </Flex>
      <Flex gap={4}>
        <Stack flex="2">
        <ListResources resources={folder?.resources} />
        </Stack>
        <Stack flex="1">
          <Card>
            <Text>{folder?.description}</Text>
          </Card>
        </Stack>
      </Flex>
    </Stack>
  );
}
