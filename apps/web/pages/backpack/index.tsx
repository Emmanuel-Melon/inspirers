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
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    IconButton
} from "@chakra-ui/react";
import { Button, Card } from "ui";

import {
    FiHome,
    FiSettings,
    FiUser,
    FiBell,
    FiCheckCircle,
    FiRotateCw,
    FiTrendingUp,
    FiMap,
    FiMonitor,
    FiClipboard,
    FiShoppingBag,
    FiPaperclip,
    FiMusic,
    FiVideo,
    FiImage,
    FiMoreHorizontal,
    FiDownloadCloud
} from "react-icons/fi";


export default function Backpac() {
    return (
        <>
            <Stack gap={4}>
                <Flex justifyContent="space-between">
                    <Heading>Emmanuel's Backpack</Heading>
                    <Button icon={<FiDownloadCloud />}>Import</Button>
                </Flex>
                <Flex gap={16}>
                    <Stack color='brand.secondaryText'>
                        <Stat>
                            <StatLabel>Collected Fees</StatLabel>
                            <StatNumber>£0.00</StatNumber>
                            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Collected Fees</StatLabel>
                            <StatNumber>£0.00</StatNumber>
                            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                        </Stat>
                        <List spacing={3}>
                            <ListItem color='brand.secondaryText'>
                                <ListIcon as={FiShoppingBag} color='brand.secondaryText' />
                                Lorem ipsum
                            </ListItem>
                            <ListItem color='brand.secondaryText'>
                                <ListIcon as={FiShoppingBag} color='brand.secondaryText' />
                                Assumenda
                            </ListItem>
                            <ListItem color='brand.secondaryText'>
                                <ListIcon as={FiShoppingBag} color='brand.secondaryText' />
                                Quidem
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem color='brand.secondaryText'>
                                <ListIcon as={FiSettings} color='brand.secondaryText' />
                                Quidem
                            </ListItem>
                        </List>
                    </Stack>
                    <Stack gap={4}>
                        <Stack>
                            <Heading size="md">Quick Access</Heading>
                            <Flex gap={4}>
                                <Card>
                                    <Text>Hello</Text>
                                </Card>
                                <Card>
                                    <Text>Hello</Text>
                                </Card>
                                <Card>
                                    <Text>Hello</Text>
                                </Card>
                            </Flex>
                        </Stack>
                        <Stack color='brand.primaryText'>
                            <Flex justifyContent="space-between">
                                <Heading size="md">Categories</Heading>
                                <IconButton>
                                    <FiMoreHorizontal />
                                </IconButton>
                            </Flex>
                            <Flex gap={4}>
                                <Card>
                                    <Flex gap={4} alignItems="center" p="4" justifyContent="flex-start">
                                        <Box bg="brand.highlight1" p="2" borderRadius="1rem">
                                            <FiPaperclip />
                                        </Box>
                                        <Stack>
                                            <Heading size="sm">Documents</Heading>
                                            <Text color='brand.secondaryText'>156 files</Text>
                                        </Stack>
                                    </Flex>
                                </Card>
                                <Card>
                                    <Flex gap={4} alignItems="center" p="4" justifyContent="center">
                                        <Box bg="brand.highlight1" p="2" borderRadius="1rem">
                                            <FiMusic />
                                        </Box>
                                        <Stack>
                                            <Heading size="sm">Music</Heading>
                                            <Text color='brand.secondaryText'>156 files</Text>
                                        </Stack>
                                    </Flex>
                                </Card>
                                <Card>
                                    <Flex gap={4} alignItems="center" p="4" justifyContent="center">
                                        <Box bg="brand.highlight1" p="2" borderRadius="1rem">
                                            <FiVideo />
                                        </Box>
                                        <Stack>
                                            <Heading size="sm">Videos</Heading>
                                            <Text color='brand.secondaryText'>156 files</Text>
                                        </Stack>
                                    </Flex>
                                </Card>
                                <Card>
                                    <Flex gap={4} alignItems="center" p="4" justifyContent="center">
                                        <Box bg="brand.highlight1" p="2" borderRadius="1rem">
                                            <FiImage />
                                        </Box>
                                        <Stack>
                                            <Heading size="sm">Images</Heading>
                                            <Text color='brand.secondaryText'>156 files</Text>
                                        </Stack>
                                    </Flex>
                                </Card>

                            </Flex>
                        </Stack>
                        <Stack>
                            <Heading size="md">Recently Added</Heading>
                            <Card>
                                <Text>Hello</Text>
                            </Card>
                            <Card>
                                <Text>Hello</Text>
                            </Card>
                            <Card>
                                <Text>Hello</Text>
                            </Card>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
        </>
    );
}
