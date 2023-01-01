/* eslint-disable react/no-children-prop */
import { useContext, useState } from "react";
import {
  Stack,
  Flex,
  Heading,
  Text,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Kbd,
} from "@chakra-ui/react";
import { Button, IconButton, Input, Modal } from "ui";
import { useFetch } from "../../hooks/useSwr";
import { JourneyContext } from "providers/JourneyProvider";
import { Folder, ResourceType, Backpack } from "@prisma/client";

import {
  AddResource,
  QuickAccess,
  ListFolders,
  ListRecentlyAdded,
  AddNewFolder,
  ImportResources
} from "../../core/Backpack";
import { LayoutController } from "ui";

import {
  FiChevronsDown,
  FiZap,
  FiArchive,
  FiSearch,
} from "react-icons/fi";
import { HiOutlineFolder } from "react-icons/hi";

export default function BackpackPage() {
  // duplicated logic
  const context = useContext(JourneyContext);
  const {
    data: journeys,
    isLoading: journeyLoaded,
    isError: JourneyError,
  } = useFetch(`/journeys/${context.journey.id}`);
  const backpack = journeys?.backpacks.filter(
    (backpack: Backpack) => backpack.journeyId === context.journey.id
  )[0];

  const {
    data: resources,
    isLoading,
    isError,
  } = useFetch(`/backpacks/${backpack?.id}`);
  const [view, setView] = useState("list");

  const [show, setShow] = useState(false);
  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  // instead of listing out all the resources here
  // we can list recommended resources
  // resources that are trending

  // and then have a button to show all resources
  // and then have a button to show all categories
  // and then have a button to show all recently added
  // and then have a button to show all recently viewed
  // and then have a button to show all recently updated
  // move hero text to the left
  // landing: https://dribbble.com/shots/18241950-Cryptocurrency-Header
  // automatically paste url
  // pin folder to quick access
  // add folder capacity
  // as a mentor, I would like to set the folder capacity for a mentee.
  // mentee can upload what they like but the capacity cannot be exceeded
  // can't add content before current content is consumed/expired

  // routines are a way of blocking your calendar and automating
  // automate your calendars with Routines!!!!

  // assign labels to what something is for.
  //
  return (
    <>
      <Stack gap={2}>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Stack gap={4}>
            <Flex alignItems="center" gap={2}>
              <IconButton>
                <FiArchive />
              </IconButton>
              <Heading size="md">
                {backpack?.name || "Emmanuel's Backpack"}
              </Heading>
              <FiChevronsDown />
              <Flex gap={2} alignItems="center">
                <AddResource backpack={backpack}/>
                <AddNewFolder backpack={backpack} />
                <ImportResources />
                <Button icon={<FiZap />} bg="brand.white">
                  Automations
                </Button>
              </Flex>
            </Flex>
            <Text>
              Empower your growth journey with thousands of free resources from
              people just like you.
            </Text>
          </Stack>
        </Flex>
        <Flex gap={8}>
          <Stack gap={4} flex="2">
            <InputGroup>
              <InputLeftAddon
                children={<FiSearch />}
                bg="brand.white"
                outline="none"
                border="none"
              />
              <Input placeholder="Search Backpack" />
              <InputRightAddon
                children={
                  <Flex gap={1}>
                    <Kbd bg="brand.white">⌘</Kbd> <Kbd bg="brand.white">S</Kbd>
                  </Flex>
                }
                bg="brand.white"
                outline="none"
                border=""
              />
            </InputGroup>
            <ListFolders backpack={backpack} />
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
