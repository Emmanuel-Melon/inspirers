import { Avatar, Flex, Heading, Text, IconButton } from "@chakra-ui/react";
import { Button } from "ui";
import { FiBarChart2, FiFilter, FiList, FiInfo, FiBell, FiPlus, FiLayout } from "react-icons/fi";

export const TaskViewMenu = ({ changeView, view }) => {
    return (
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
                        size="sm"
                        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"
                    />
                    <Heading size="md">Eman's FullStack Journey</Heading>
                </Flex>
                <Flex gap={4} >
                    <Button
                        icon={<FiPlus />}
                        size="sm"
                    >New Task</Button>
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
                        icon={<FiList />}
                        onClick={() => changeView("list")}
                        bg={view === "list" ? "brand.primary" : "brand.white"}
                        color={view === "list" ? "brand.white" : "brand.primary"}
                    >
                        List
                    </Button>
                </Flex>
                <Flex gap={4}>
                <Button
                    bg="brand.highlight2"
                    color="brand.primary"
                    aria-label={"info"}
                    size="sm"
                    icon={<FiFilter />}
                >
                    Filter
                </Button>
                <IconButton
                    bg="brand.white"
                    color="brand.primary"
                    aria-label={"info"}
                    size="sm"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                >
                    <FiInfo />
                </IconButton>
            </Flex>
            </Flex>
            
        </Flex>
    )
}