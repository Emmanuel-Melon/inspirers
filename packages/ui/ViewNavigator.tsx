import {
    Avatar,
    Flex,
    Heading,
    Text,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { Button } from "ui";
import {
    FiBarChart2,
    FiFilter,
    FiList,
    FiInfo,
    FiArrowDown,
    FiPlus,
    FiLayout,
    FiCalendar,
    FiLayers,
    FiGrid,
} from "react-icons/fi";

export const ViewNavigator = ({ changeView, openModal, view }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Flex
                borderRadius="1rem"
                gap={4}
                color="brand.primaryText"
                justifyContent="space-between"
            >
                <Flex gap={4} p="4" justifyContent="space-between">
                    <Flex gap={4}>
                        <Flex alignItems="center" gap={2}>
                            <FiLayout />
                            <Text>Layout</Text>
                        </Flex>
                        <Button
                            size="sm"
                            icon={<FiGrid />}
                            onClick={() => changeView("list")}
                            bg={view === "list" ? "brand.primary" : "brand.white"}
                            color={view === "list" ? "brand.white" : "brand.primary"}
                        >
                            Grid
                        </Button>
                        <Button
                            size="sm"
                            icon={<FiList />}
                            onClick={() => changeView("list")}
                            bg={view === "board" ? "brand.primary" : "brand.white"}
                            color={view === "list" ? "brand.white" : "brand.primary"}
                        >
                            List
                        </Button>
                        <Button
                            size="sm"
                            icon={<FiLayers />}
                            onClick={() => changeView("list")}
                            bg={view === "grid" ? "brand.primary" : "brand.white"}
                            color={view === "list" ? "brand.white" : "brand.primary"}
                        >
                            Timeline
                        </Button>
                        <Button
                            size="sm"
                            icon={<FiCalendar />}
                            onClick={() => changeView("list")}
                            bg={view === "calendar" ? "brand.primary" : "brand.white"}
                            color={view === "list" ? "brand.white" : "brand.primary"}
                        >
                            Calendar
                        </Button>
                    </Flex>
                </Flex>
                <Flex alignItems="center" gap={4} justifyContent="space-between">
                    <Flex gap={2}>
                        <IconButton
                            bg="brand.white"
                            color="brand.secondary"
                            aria-label={"info"}
                            size="sm"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        >
                            <FiInfo />
                        </IconButton>
                        <Button icon={<FiPlus />} size="sm" onClick={openModal}>
                            New Routine
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};
