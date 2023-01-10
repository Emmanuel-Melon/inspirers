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
  FiChevronsRight,
} from "react-icons/fi";
import { useRouter } from "next/router";
import { ListResources } from "core/Backpack/ListResources";

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
  },
];

// add automations for:
// domains: trigger events when a resource from a given domain is added
// or when a certain resource type such as auto download or cache for offline viewing on phone
export default function Folder(props) {
  console.log(props);
  const context = useContext(JourneyContext);
  const folderId = "clcqi2pq30168xabt5r03b3yg";
  const {
    data: resources,
    isLoading: journeyLoaded,
    isError: JourneyError,
  } = useFetch(`/backpacks/folders/${folderId}`);

  const router = useRouter();
  return (
    <Stack gap={2}>
      <Flex justifyContent="space-between" alignItems="cebter">
        <Breadcrumb
          separator={<FiChevronsRight />}
          bg="brand.highlight1"
          borderRadius="0.5rem"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="" textDecoration="none">
              My Backpack
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="">
              {router.query.folder?.toLocaleString().toUpperCase()}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex gap={2}>
          <Button>Automations</Button>
        </Flex>
      </Flex>
      <Flex gap={4}>
        <Text>Automations</Text>
        <Text>Users</Text>
        <Text>Views</Text>
        <Text>Share</Text>
      </Flex>
      <Flex gap={4}>
        <ListResources resources={resources} />
        <Stack>
          <Text>Up Next</Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
