import {
  Flex,
  Heading,
  Text,
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

export const TaskViewMenu = ({ openModal, addNewJourney, changeView, view }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        direction="column"
        borderRadius="1rem"
        gap={4}
        color="brand.primaryText"
      >
        <Flex alignItems="center" gap={4} justifyContent="space-between">
          <Flex alignItems="center" gap={2} color="brand.primaryText">

            <Heading size="md">Tasks</Heading>
          </Flex>
          <Flex gap={4}>
            <Button icon={<FiPlus />} size="sm" onClick={openModal}>
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
              icon={<FiList />}
              onClick={() => changeView("list")}
              bg={view === "list" ? "brand.primary" : "brand.white"}
              color={view === "list" ? "brand.white" : "brand.primary"}
            >
              List
            </Button>
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
        </Flex>
      </Flex>
    </>
  );
};
