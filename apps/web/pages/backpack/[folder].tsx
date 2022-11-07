import { useContext, useState } from "react";
import {
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
import { Button, IconButton, Input, Modal } from "ui";
import { useFetch } from "../../hooks/useSwr";
import { JourneyContext } from "providers/JourneyProvider";

import { ListRecentlyAdded } from "../../Backpack/ListRecentlyAdded";
import { ListFolders } from 'Backpack/ListFolders';
import { QuickAccess } from 'Backpack/QuickAccess';
import { LayoutController } from "ui";
import { AddResource } from "Backpack/AddResource";
import { AddNewFolder } from "Backpack/AddNewFolder";
import {
  FiBarChart2,
  FiFilter,
  FiList,
  FiSettings,
  FiChevronsDown,
  FiPlus,
  FiLayout,
  FiCalendar,
  FiLayers,
  FiGrid,
  FiZap,
  FiArchive,
  FiDownloadCloud,
  FiEdit,
  FiUploadCloud,
  FiTrash,
  FiHeart,
  FiMessageCircle,
  FiFolderPlus,
  FiChevronsRight
} from "react-icons/fi";
import { useRouter } from "next/router";


const layouts = [
  {
    id: 1,
    title: "List",
    icon: <FiList />,
    active: true,
  },
  {
    id: 1,
    title: "Grid",
    icon: <FiGrid />,
    active: false,
  },
  {
    id: 1,
    title: "Timeline",
    icon: <FiCalendar />,
    active: false,
  }
];

// add automations for:
// domains: trigger events when a resource from a given domain is added
// or when a certain resource type such as auto download or cache for offline viewing on phone
export default function Folder() {
  const context = useContext(JourneyContext);
  const { data: journeys, isLoading: journeyLoaded, isError: JourneyError } = useFetch(`/journeys/${context.journey.id}`);
  const backpack = journeys?.backpacks.filter(backpack => backpack.journeyId === context.journey.id)[0];
  const { data: resources, isLoading, isError } = useFetch(`/backpacks/${backpack?.id}`);

  const router = useRouter();
  return (
    <Stack gap={2}>
      <Breadcrumb separator={<FiChevronsRight />} bg="brand.highlight1" p="2" borderRadius="0.5rem">
        <BreadcrumbItem>
          <BreadcrumbLink href='' textDecoration="none">My Backpack</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href=''>Thoughts</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex gap={2}>
        <Button>Automations</Button>
        <Button>Import</Button>
        <Button>Add Resources</Button>
      </Flex>
    </Stack>
  );
}
