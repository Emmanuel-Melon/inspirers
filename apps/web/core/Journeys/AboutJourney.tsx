import {
    Flex,
    Stack,
    Heading,
    Text,
    Box,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    useMultiStyleConfig,
    useTab,
    Button,
} from "@chakra-ui/react";
import { Card, CustomTab } from "ui";
import {
    FiMap, FiActivity,
    FiInfo,
    FiClipboard,
    FiShoppingBag,
    FiUser,
    FiBell,
    FiPackage,
    FiLock
  } from "react-icons/fi";

const Highlight = ({ highlight }) => {
    return (
        <Flex gap={4} alignItems="center">
            <Box bg="brand.white" p="4" borderRadius="1rem">
                <FiMap />
            </Box>
            <Stack>
                <Heading size="sm">{highlight.title}</Heading>
                <Text>Get the skills of tomorrow, learn to learn efficiently and take control of your career for good.</Text>
            </Stack>
        </Flex>
    )
}

const highlights = [
    {
        id: 1,
        title: "Joined FreelyFormd"
    },
    {
        id: 2,
        title: "Joined GitStart"
    },
    {
        id: 3,
        title: "Launched Project"
    }
]

// clone to personal or teams account!
// clone goals to Journey X or Y
// deselect goals from Journey X or Y
// deselect resources when cloning a backpack

export const AboutJourney = () => {
    return (
        <Flex gap={4}>
            <Stack gap={4}>
                <Stack gap={4}>
                    <Heading size="md">About Journey</Heading>
                    <Text>Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. It aims to bring modern language design and an advanced type system to systems programming. Rust does not use a garbage collector, using advanced static analysis to provide deterministic drops instead. </Text>
                </Stack>
                <Stack gap={4}>
                    <Heading size="md">Highlights</Heading>
                    <Stack gap={8}>
                        {highlights.map((highlight) => <Highlight key={highlight.id} highlight={highlight} />)}
                    </Stack>
                </Stack>
                <Stack gap={4}>
                    <Heading size="md">Lessons Learned</Heading>
                    <Text>Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. It aims to bring modern language design and an advanced type system to systems programming. Rust does not use a garbage collector, using advanced static analysis to provide deterministic drops instead. </Text>
                </Stack>
                <Stack gap={4}>
                    <Heading size="md">What I would do differently?</Heading>
                    <Stack gap={8}>
                        {highlights.map((highlight) => <Highlight key={highlight.id} highlight={highlight} />)}
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    );
}