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
    useDisclosure
} from "@chakra-ui/react";
import { Button } from "ui";
import { FiBarChart2, FiFilter, FiList, FiInfo, FiArrowDown, FiPlus, FiLayout, FiCalendar, FiLayers, FiGrid } from "react-icons/fi";

export const TaskViewMenu = ({ addNewJourney, changeView, view }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Flex
                direction="column"
                borderRadius="1rem"
                gap={4}
                color="brand.primaryText"
            >
                <Flex
                    alignItems="center"
                    gap={4}
                    justifyContent="space-between"
                >
                    <Flex alignItems="center" gap={2} color="brand.primary">
                        <Avatar
                            size="md"
                            src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"
                        />
                        <Heading size="md">Getting Into Harvard</Heading>
                    </Flex>
                    <Flex gap={4} >
                        <IconButton
                            bg="brand.white"
                            color="brand.primary"
                            aria-label={"info"}
                            size="sm"
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                        >
                            <FiInfo />
                        </IconButton>
                        <Flex gap={4}>
                            <Button
                                bg="brand.white"
                                color="brand.primary"
                                aria-label={"info"}
                                size="sm"
                                icon={<FiArrowDown />}
                            >
                                Sort
                            </Button>
                        </Flex>
                        <Button
                            icon={<FiPlus />}
                            size="sm"
                            onClick={addNewJourney}
                        >
                            New Task
                        </Button>
                    </Flex>
                </Flex>
                <Flex gap={4} p="4" justifyContent="space-between">
                    <Flex gap={4}>
                        <Flex alignItems="center" gap={2}>
                            <FiLayout />
                            <Text>Tasks View</Text>
                        </Flex>
                        <Button
                            size="sm"
                            icon={<FiBarChart2 />}
                            onClick={() => changeView("kanban")}
                            bg={view === "kanban" ? "brand.primary" : "brand.white"}
                            color={view === "kanban" ? "brand.white" : "brand.primary"}
                        >
                            Board
                        </Button>
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
                            bg={view === "list" ? "brand.primary" : "brand.white"}
                            color={view === "list" ? "brand.white" : "brand.primary"}
                        >
                            List
                        </Button>
                        <Button
                            size="sm"
                            icon={<FiLayers />}
                            onClick={() => changeView("list")}
                            bg={view === "list" ? "brand.primary" : "brand.white"}
                            color={view === "list" ? "brand.white" : "brand.primary"}
                        >
                            Timeline
                        </Button>
                        <Button
                            size="sm"
                            icon={<FiCalendar />}
                            onClick={() => changeView("list")}
                            bg={view === "list" ? "brand.primary" : "brand.white"}
                            color={view === "list" ? "brand.white" : "brand.primary"}
                        >
                            Calendar
                        </Button>
                    </Flex>
                    <Flex gap={1}>
                    <Avatar
                        size="sm"
                        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"
                    />
                    <Avatar
                        size="sm"
                        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"
                    />
                    <Avatar
                        size="sm"
                        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189711/neno/avatars/icons8-walter-white.svg"
                    />
                </Flex>
                </Flex>

            </Flex>
        </>
    )
}