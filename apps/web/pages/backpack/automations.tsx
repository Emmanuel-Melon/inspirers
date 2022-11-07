import { useState } from "react";
import {
    Stack,
    Flex,
    Heading,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Text
} from "@chakra-ui/react";
import { Button, IconButton, Input, Modal } from "ui";
import { useFetch } from "../../hooks/useSwr";

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
    FiFolderPlus
} from "react-icons/fi";


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
  
  export default function Automations() {
    return (
      <Stack>
        <Heading>Automate your folders!</Heading>
        <Flex gap={2}>
          <Button>Automations</Button>
          <Button>Import</Button>
          <Button>Add Resources</Button>
        </Flex>
      </Stack>
    );
  }
  