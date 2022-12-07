import {
  Box,
  Flex,
  Heading,
  VStack,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  FiActivity,
  FiInfo,
  FiClipboard,
  FiShoppingBag,
  FiUser,
  FiBell,
  FiPackage,
  FiLock,
} from "react-icons/fi";
import { Button, Card, gradientUnderline, CustomTab } from "ui";
import {
  RiSuitcase2Line,
  RiChromeLine,
  RiDownload2Line,
  RiFileCopy2Line,
  RiFoldersLine,
  RiShareLine,
  RiPictureInPictureLine,
  RiYoutubeLine,
  RiTwitterFill,
  RiMediumLine,
} from "react-icons/ri";
import { SectionWrapper } from "./SectionWrapper";

export const BackpackSection = () => {
  return (
    <SectionWrapper>
      <Stack gap={4}>
        <Stack flex="2" gap={4}>
          <Flex gap={4} alignItems="center">
            <Box
              boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              p="2"
              borderRadius="1rem"
              bg="brand.white"
              width="fit-content"
            >
              <RiFoldersLine size="2rem" />
            </Box>
            <Heading
              as="h3"
              size="lg"
              _after={gradientUnderline()}
              width="fit-content"
            >
              Stay Organized
            </Heading>
          </Flex>
          <Heading size="lg">
            Put an end to information clutter, no need for a bunch of redundant
            links and tabs. The key is to keep it simple.{" "}
          </Heading>
          {false ? (
            <Text>
              With your goals, gather the necessary resources and organize them
              accordingly for easy reach and future reference. The Inspirers
              Backpack is the ultimate resource feature that will allow you to
              have your books, articles, mood boards, tutorials, podcasts,
              videos, and more at your fingertips. You can sync your resources
              to your individual tasks to save time. Stay organized and put an
              end to information clutter.
            </Text>
          ) : null}
        </Stack>
        <Flex gap={4} flexDir={["column", "column", "row", "row"]}>
          <Stack width={["100%", "100%", "30%", "30%"]} gap={2}>
            <Card>
              <Flex gap={2} alignItems="center">
                <Heading
                  _after={gradientUnderline({
                    bg: "yellow.400",
                  })}
                  size="md"
                >
                  Organize
                </Heading>
              </Flex>
              <Text>
                Search, sort, tag, categorize, annotate, and export Twitter
                bookmarks.
              </Text>
            </Card>
          </Stack>
          <Stack width="30%" gap={2}>
            <Card>
              <Flex gap={2} alignItems="center">
                <Heading
                  size="md"
                  _after={gradientUnderline({
                    bg: "pink.400",
                  })}
                >
                  Curate
                </Heading>
              </Flex>
              <Text>
                Create collections of bookmarks along with your annotations so
                you remember why you saved them in the first place.
              </Text>
            </Card>
          </Stack>
          <Stack width="30%" gap={2}>
            <Card>
              <Flex gap={2} alignItems="center">
                <Heading
                  size="md"
                  _after={gradientUnderline({
                    bg: "purple.400",
                  })}
                >
                  Share
                </Heading>
              </Flex>
              <Text>
                Make your collection public and share them with your friends or
                the world. Others can subscribe to your collections and get a
                peak into how you think
              </Text>
            </Card>
          </Stack>
        </Flex>
        <Stack>
          <Heading size="md">Don’t Be Overwhelmed</Heading>
          <Text>
            Gather the necessary resources and organize them accordingly.
          </Text>
        </Stack>
        <Flex gap={4} flexDir={["column", "column", "row", "row"]}>
          <Tabs width="100%" defaultIndex={0} isLazy variant="solid-rounded">
            <TabList gap={4} borderRadius="1rem" marginBottom={4}>
              <CustomTab icon={<RiChromeLine />}>Chrome Extension</CustomTab>
              <CustomTab icon={<RiDownload2Line />}>Import your Data</CustomTab>
              <CustomTab icon={<RiFileCopy2Line />}>Fork</CustomTab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex gap={4} alignItems="center">
                  <Stack>
                    <Heading size="sm">Click and Save!</Heading>
                    <Text>
                      Gather the necessary resources and organize them
                      accordingly for easy reach and future reference.
                    </Text>
                    <Flex gap={4}>
                    <Button width="fit-content" bg="brand.white">Install for Chrome</Button>
                    <Button width="fit-content" bg="brand.white">Install for Firefox</Button>
                    </Flex>
                  </Stack>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Stack gap={4}>
                  <Heading size="sm">Take your data with you</Heading>
                  <Text>
                    Gather the necessary resources and organize them
                    accordingly.
                  </Text>
                  <Flex gap={4}>
                    <Tag
                      size="lg"
                      bg="brand.white"
                      borderRadius="1rem"
                      py="2"
                      px="4"
                      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    >
                      <TagLeftIcon as={RiYoutubeLine} color="maroon" />
                      <TagLabel>Youtube</TagLabel>
                    </Tag>
                    <Tag
                      size="lg"
                      bg="brand.white"
                      borderRadius="1rem"
                      py="2"
                      px="4"
                      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    >
                      <TagLeftIcon as={RiTwitterFill} color="blue" />
                      <TagLabel>Twitter Bookmarks</TagLabel>
                    </Tag>
                    <Tag
                      size="lg"
                      bg="brand.white"
                      borderRadius="1rem"
                      py="2"
                      px="4"
                      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    >
                      <TagLeftIcon as={RiMediumLine} color="maroon" />
                      <TagLabel>Medium Articles</TagLabel>
                    </Tag>
                  </Flex>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Text>Hello</Text>
              </TabPanel>
              <TabPanel>
                <Text>Hello</Text>
              </TabPanel>
              <TabPanel>
                <Text>Privacy</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Stack>
    </SectionWrapper>
  );
};
