import React from "react";
import {
    Image,
    Avatar,
    Flex,
    Text,
    Heading,
    VStack,
    Tabs, TabList, TabPanels, Tab, TabPanel, Box, useMultiStyleConfig, useTab,
    Button
} from "@chakra-ui/react";
import { TaskList } from "../../Tasks/components/TaskList";
import { ListUsers } from "./ListUsers";

import {
    FiActivity,
    FiUsers,
    FiClipboard,
    FiShoppingBag,
    FiCompass
} from "react-icons/fi";

const tasks = [
    {
        "id": 14,
        "title": "Throw Some D's",
        "userId": 1,
        "description": "Rich boy selling crack",
        "completed": false,
        "createdAt": "2022-07-05T09:40:16.053Z"
    },
    {
        "id": 15,
        "title": "Out Here Grinding",
        "userId": 1,
        "description": "Making things look great",
        "completed": false,
        "createdAt": "2022-07-05T09:42:40.739Z"
    },
    {
        "id": 16,
        "title": "Hustler's Ambition",
        "userId": 1,
        "description": "Out here on a mission",
        "completed": false,
        "createdAt": "2022-07-05T09:43:32.044Z"
    },
    {
        "id": 17,
        "title": "Pimpin",
        "userId": 1,
        "description": "Chilling and smoking here",
        "completed": false,
        "createdAt": "2022-07-05T09:44:21.664Z"
    }
];

const users = [
    {
        "id": 14,
        "name": "Throw Some D's",
        "image": "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"
    },
    {
        "id": 15,
        "name": "Out Here Grinding",
        "image": "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"
    },
    {
        "id": 16,
        "name": "Hustler's Ambition",
        "image": "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"
    },
    {
        "id": 17,
        "name": "Pimpin",
        "image": "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"
    }
];

export const ProfileSectionsTab = () => {

    const CustomTab = React.forwardRef(function InnerComponent(props, ref) {
        // 1. Reuse the `useTab` hook
        const tabProps = useTab({ ...props, ref })
        const isSelected = !!tabProps['aria-selected']

        // 2. Hook into the Tabs `size`, `variant`, props
        const styles = useMultiStyleConfig('Tabs', tabProps)

        return (
            <Button
                {...tabProps}
                size="sm"
                alignItems="center"
                borderRadius="1rem"
                leftIcon={props.icon}
                bg={isSelected ? "brand.primary" : "transparent"}
                color={isSelected ? "brand.white" : "brand.primary"}
                _hover={{
                    bg: isSelected ? "brand.primary" : "brand.highlight1"
                }}
            >
                {tabProps.children}
            </Button>
        )
    })
    return (
        <Flex
            direction="column"
            color="brand.primaryText"

            alignItems="center"
            width="65%"
        >
            <Tabs
                width="100%"
                defaultIndex={1}
                isLazy
                variant='unstyled'
            >
                <TabList
                    gap={4}
                    bg="brand.highlight2"
                    p="4"
                    borderRadius="1rem"
                    marginBottom={4}
                >
                    <CustomTab icon={<FiCompass />}>Journeys</CustomTab>
                    <CustomTab icon={<FiActivity />}>Activity</CustomTab>
                    <CustomTab icon={<FiUsers />}>Mentees</CustomTab>
                    <CustomTab icon={<FiClipboard />}>Tasks</CustomTab>
                    <CustomTab icon={<FiShoppingBag />}>Backpacks</CustomTab>
                </TabList>

                <TabPanels>
                    <TabPanel p="none">
                        <VStack gap='8' justifyContent='center' alignItems='center'><Image src='https://res.cloudinary.com/dwacr3zpp/image/upload/v1658951639/inspirers/images/9094bc98-b99d-4474-9803-13eaaaccc383.png' /><Text>Oops! no journeys yet.</Text><Button bg='brand.primary' color='brand.white' size='md' width='fit-content'>Click Me!</Button></VStack>
                    </TabPanel>
                    <TabPanel p="none">
                        <VStack gap='8' justifyContent='center' alignItems='center'><Image src='https://res.cloudinary.com/dwacr3zpp/image/upload/v1658951299/inspirers/images/729a0ff0-9727-4b73-b2b5-26d23f5e442d.png' /><Text>Oops! no activity yet.</Text><Button bg='brand.primary' color='brand.white' size='md' width='fit-content'>Click Me!</Button></VStack>
                    </TabPanel>
                    <TabPanel p="none">
                        <VStack gap='8' justifyContent='center' alignItems='center'><Image src='https://res.cloudinary.com/dwacr3zpp/image/upload/v1658951330/inspirers/images/8a6a6be1-df6c-482e-8f05-2e089ab083f5.png' /><Text>Oops! no mentees yet.</Text><Button bg='brand.primary' color='brand.white' size='md' width='fit-content'>Click Me!</Button></VStack>
                    </TabPanel>
                    <TabPanel p="none">
                        <VStack gap='8' justifyContent='center' alignItems='center'><Image src='https://res.cloudinary.com/dwacr3zpp/image/upload/v1658951972/inspirers/images/3ef610d9-84ff-4ab3-b809-4fda743dceee.png' /><Text>Oops! no tasks yet.</Text><Button bg='brand.primary' color='brand.white' size='md' width='fit-content'>Click Me!</Button></VStack>
                    </TabPanel>
                    <TabPanel p="none">
                        <VStack gap='8' justifyContent='center' alignItems='center'><Image src='https://res.cloudinary.com/dwacr3zpp/image/upload/v1658952252/inspirers/images/3072ccca-26d9-4b94-9b1b-979661a6da7f.png' /><Text>Oops! no backpacks yet.</Text><Button bg='brand.primary' color='brand.white' size='md' width='fit-content'>Click Me!</Button></VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
}