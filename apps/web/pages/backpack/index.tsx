import {
    Stack,
    Text,
    Link,
    Flex,
    Heading,
    Box,
    List,
    ListItem,
    ListIcon,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
} from "@chakra-ui/react";
import { Button, Card } from "ui";
import { useFetch } from "../../hooks/useSwr";

import {
    FiSettings,
    FiShoppingBag,
    FiDownloadCloud,
    FiUploadCloud
} from "react-icons/fi";

import { ListRecentlyAdded } from "../../Backpack/ListRecentlyAdded";
import { ListCategories } from 'Backpack/ListCategories';
import { QuickAccess } from 'Backpack/QuickAccess';

export default function Backpack() {
    const { data: resources, isLoading, isError } = useFetch(`/backpacks/cl8bqg96n14593e1bt8hzr0u1e`);
    
    return (
        <>
            <Stack gap={4}>
                <Flex justifyContent="space-between">
                    <Heading>Emmanuel's Backpack</Heading>
                    <Flex  gap={2} alignItems="center">
                    <Button icon={<FiUploadCloud />}>Add Resource</Button>
                    <Button icon={<FiDownloadCloud />}>Import</Button>
                    </Flex>
                </Flex>
                <Flex gap={16}>
                    <Stack color='brand.secondaryText' height="fit-content">
                        <Stat boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" color="brand.secondary" bg="brand.highlight1" p="4" borderRadius="1rem">
                            <StatLabel>Files Added</StatLabel>
                            <StatNumber>56</StatNumber>
                            <StatHelpText>Sep 12 - Sep 28</StatHelpText>
                        </Stat>
                        <Stat  boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" color="brand.secondary" bg="brand.highlight2" p="4" borderRadius="1rem">
                            <StatLabel>Fils Viewed</StatLabel>
                            <StatNumber>34</StatNumber>
                            <StatHelpText>Sep 12 - Sep 28</StatHelpText>
                        </Stat>
                    </Stack>
                    <Stack gap={4}>
                        <ListCategories resources={resources}/>
                        <ListRecentlyAdded resources={resources}/>
                    </Stack>
                </Flex>
            </Stack>
        </>
    );
}
