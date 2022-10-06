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
import { Button, Modal } from "ui";
import { useFetch } from "../../hooks/useSwr";

import {
    FiDownloadCloud,
    FiUploadCloud
} from "react-icons/fi";

import { ListRecentlyAdded } from "../../Backpack/ListRecentlyAdded";
import { ListCategories } from 'Backpack/ListCategories';
import { QuickAccess } from 'Backpack/QuickAccess';
import { LayoutController } from "ui";
import { AddResource } from "Backpack/AddResource";
import {
    FiBarChart2,
    FiFilter,
    FiList,
    FiSettings,
    FiArrowDown,
    FiPlus,
    FiLayout,
    FiCalendar,
    FiLayers,
    FiGrid,
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

export default function Backpack() {
    const { data: resources, isLoading, isError } = useFetch(`/backpacks/cl8u2b5ci24107gbt0drlynhj`);

    const [show, setShow] = useState(false);
    function openModal() {
        setShow(true);
    }

    function closeModal() {
        setShow(false);
    }
    return (
        <>  
            <Stack gap={2}>
                <Flex justifyContent="space-between">
                    <Heading>Emmanuel's Backpack</Heading>
                    <Flex gap={2} alignItems="center">
                        <Button icon={<FiUploadCloud />} onClick={openModal}>Add Resource</Button>
                        <Button icon={<FiDownloadCloud />}>Import</Button>
                    </Flex>
                </Flex>
                <LayoutController layouts={layouts} />
                <Flex gap={8}>
                    <Stack gap={4} flex="2">
                        <ListCategories resources={resources} />
                        <ListRecentlyAdded resources={resources} />
                    </Stack>
                    <Stack flex="1" color='brand.secondaryText' height="fit-content">
                    <Heading size="md">Overview</Heading>
                        <Stat boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" color="brand.secondary" bg="brand.highlight1" p="4" borderRadius="1rem">
                            <StatLabel>Files Added</StatLabel>
                            <StatNumber>56</StatNumber>
                            <StatHelpText>Sep 12 - Sep 28</StatHelpText>
                        </Stat>
                        <Stat boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" color="brand.secondary" bg="brand.highlight2" p="4" borderRadius="1rem">
                            <StatLabel>Fils Viewed</StatLabel>
                            <StatNumber>34</StatNumber>
                            <StatHelpText>Sep 12 - Sep 28</StatHelpText>
                        </Stat>
                    </Stack>
                </Flex>
            </Stack>
            <Modal show={show} close={closeModal}>
                <AddResource closeModal={closeModal} />
            </Modal>
        </>
    );
}
