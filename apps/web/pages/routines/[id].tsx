import { useState } from "react";
import {
    Avatar,
    Image,
    Img,
    Stack,
    Text,
    Link,
    Flex,
    Heading,
    Box,
    LinkBox, LinkOverlay,
    Progress,
    VStack,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Tag,
    IconButton
} from "@chakra-ui/react";
import { useFetch } from "../../hooks/useSwr";
import { ListRoutines } from "../../Routines/ListRoutines";
import { Button, Card, CustomCheckbox, CustomModal } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { FiSettings, FiChevronsDown, FiShare2, FiPlus, FiMoreHorizontal } from "react-icons/fi";
import { RoutineStats } from "Routines/RoutineStats";
import { RoutineObjectives } from "Routines/RoutineObjectives";
import { RoutineResources } from "Routines/RoutineResources";
import { RoutineTasks } from "Routines/RoutineTasks";
import { ManageRoutine } from "Routines/ManageRoutine";
import { ViewNavigator } from "ui";


export default function Routine() {
    const router = useRouter();
    const { data: routine, isLoading, isError } = useFetch(`${router.asPath}`);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsOpen(true);

    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
                <Stack color="brand.primaryText" gap={4}>
            <Flex justifyContent="space-between" alignItems="flex-start">
                <Stack>
                    <Heading size="md">Emmanuel's {routine?.data?.title}</Heading>
                    <Text color="brand.secondaryText">{routine?.data?.description}</Text>
                </Stack>
                <Flex gap={4}>
                    <Button size="md" bg="brand.white" icon={<FiChevronsDown />}>Today</Button>
                    <Button size="md" bg="brand.white" icon={<FiShare2 />}>Share</Button>
                    <Button size="md" icon={<FiSettings />} onClick={openModal}>Manage Routine</Button>
                </Flex>
            </Flex>
            <Flex gap={8}>
                <Stack gap={4} width="100%" flex="2">
                    <RoutineStats routine={routine?.data} />
                    <RoutineObjectives routine={routine?.data} />
                </Stack>
                <Stack gap={2} width="100%" flex="1">
                    <Stack>
                    <Heading size="sm" color="brand.secondary">Active Objective</Heading>
                        <Card>

                        <Flex justifyContent="space-between">
                            <Stack>
                            
                            <Text>Invite companions</Text>
                            </Stack>
                            <IconButton size="sm" bg="brand.highlight2">
                                <FiMoreHorizontal />
                            </IconButton>
                        </Flex>
                        <Flex gap={1}>
                           {
                            [].map(() =>  <Avatar size="sm" src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg" />)
                           }
    
                            <Box
                                bg="brand.white"
                                p="2"
                                borderRadius="50%"
                                color="brand.secondary"
                                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <FiPlus size="1rem" />
                            </Box>
                        </Flex>
                        </Card>


                        
                    </Stack>
                    <RoutineResources routine={routine?.data} />
                    <RoutineTasks routine={routine?.data} />
                </Stack>
            </Flex>
        </Stack>
        <CustomModal show={isOpen} close={closeModal}>
                <ManageRoutine />
            </CustomModal>
        </>
    );
}
