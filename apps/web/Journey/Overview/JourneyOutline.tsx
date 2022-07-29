import { Flex, Stack, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { FiBarChart2, FiCalendar, FiGrid, FiLayers, FiLayout, FiList, FiMapPin } from "react-icons/fi";
import { Button } from "ui";

export const JourneyOutline = ({ journey }) => {
    const view = "list";
    return (
        <Stack>
            <Heading size="md">Journey Outline</Heading>
            <Flex gap={4}>
                <Flex alignItems="center" gap={2}>
                    <FiLayout />
                    <Text>Tasks View</Text>
                </Flex>
                <Button
                    size="sm"
                    icon={<FiBarChart2 />}
                    onClick={() => {}}
                    bg={view === "kanban" ? "brand.primary" : "brand.white"}
                    color={view === "kanban" ? "brand.white" : "brand.primary"}
                >
                    Board
                </Button>
                <Button
                    size="sm"
                    icon={<FiGrid />}
                    onClick={() => {}}
                    bg={view === "list" ? "brand.primary" : "brand.white"}
                    color={view === "list" ? "brand.white" : "brand.primary"}
                >
                    Grid
                </Button>
                <Button
                    size="sm"
                    icon={<FiList />}
                    onClick={() => {}}
                    bg={view === "list" ? "brand.primary" : "brand.white"}
                    color={view === "list" ? "brand.white" : "brand.primary"}
                >
                    List
                </Button>
                <Button
                    size="sm"
                    icon={<FiLayers />}
                    onClick={() => {}}
                    bg={view === "list" ? "brand.primary" : "brand.white"}
                    color={view === "list" ? "brand.white" : "brand.primary"}
                >
                    Timeline
                </Button>
                <Button
                    size="sm"
                    icon={<FiCalendar />}
                    onClick={() => {}}
                    bg={view === "list" ? "brand.primary" : "brand.white"}
                    color={view === "list" ? "brand.white" : "brand.primary"}
                >
                    Calendar
                </Button>
            </Flex>
            <List
                alignItems="flex-start"
                spacing={4}
                paddingLeft="4"

                borderRadius="1rem"
            >
                {
                    journey.chapters && journey.chapters.map(chapter => (
                        <ListItem color="brand.primaryText" fontWeight="700" key={chapter.id}>
                            <ListIcon as={FiMapPin} color='brand.accent' />
                            {chapter.title}
                            {
                                chapter.subChapters.length > 0 ? <List paddingLeft="8" spacing={2}>
                                    {
                                        chapter.subChapters.map(subChapter => (
                                            <ListItem color="brand.primaryText" key={subChapter.id}>

                                                <ListIcon as={FiMapPin} color='brand.secondary' />
                                                {subChapter.title}
                                            </ListItem>
                                        ))
                                    }
                                </List> : null
                            }
                        </ListItem>
                    ))
                }
            </List>
        </Stack>
    )
}