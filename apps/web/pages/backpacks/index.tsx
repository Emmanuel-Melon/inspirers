/* eslint-disable react/no-children-prop */
import { FC, useContext, useState } from "react";
import {
  Box,
  Stack,
  Flex,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Textarea,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { Button, Card, EmptyState, IconButton, Input, Modal } from "ui";
import { useFetch } from "../../hooks/useSwr";
import { JourneyContext } from "providers/JourneyProvider";
import { Backpack } from "@prisma/client";
import { client } from "utils/client";
import NextLink from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  FiArchive,
  FiSearch,
  FiPlus,
  FiShare,
  FiLock,
  FiZap,
  FiFolder
} from "react-icons/fi";
import {
  AddResource,
  QuickAccess,
  ListFolders,
  ListRecentlyAdded,
  AddNewFolder,
  ImportResources,
} from "core/Backpack";

type ListBackpacksProps = {
  backpacks: Backpack[];
  isLoading?: boolean;
  isError?: boolean;
};

const BackpacksList = () => {
  const context = useContext(JourneyContext);

  const { data: backpack, isLoading, isError } = useFetch(`/backpacks`);
  const [animationParentRef] = useAutoAnimate<HTMLDivElement>();
  console.log(backpack);

  if (isError) {
    return <Text>Failed to Load Backpacks</Text>;
  }

  if (isLoading) {
    return <Text>Loading Backpacks</Text>;
  }

  if (backpack === null) {
    return (
      <EmptyState
        heading="Don't Forget Your Supplies!"
        description="Gather all the resources you need to achieve your goals and keep them organized in one place."
        icon={<FiArchive />}
      >
        <Button icon={<FiSearch />}>Start Packing</Button>
      </EmptyState>
    );
  }

  return (
    <Flex
      gap={2}
      ref={animationParentRef}
      width="100%"
      direction={["column", "column", "row", "row"]}
      as="div"
      justifyContent="space-between"
    >
      <NextLink
        href={{
          pathname: `/backpacks/${backpack?.id}`,
          query: {
            backpackName: backpack?.name,
          },
        }}
        passHref
      >
        <LinkBox flex="1">
          <Card>
            <Stack gap={2}>
              <Flex gap={4} alignItems="center" justifyContent="space-between">
                <Stack>
                <Box
          bg="brand.accent"
          width="fit-content"
          p="2"
          borderRadius="1rem"
          color="brand.white"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        >
          <FiFolder />
        </Box>
                  <LinkOverlay>
                    <Heading size="md">{backpack?.name}</Heading>
                  </LinkOverlay>
                  <Text size="md">{backpack?.description}</Text>
                </Stack>
              </Flex>
              <Flex gap={2} color="brand.accent">
                <Tag gap={2} alignItems="center" color="brand.accent">
                  <TagLeftIcon as={FiLock} />
                  <TagLabel>Private</TagLabel>
                </Tag>
                <Tag gap={2} alignItems="center" color="brand.accent">
                  <TagLeftIcon as={FiFolder} />
                  <TagLabel>Folders</TagLabel>
                </Tag>
              </Flex>
            </Stack>
          </Card>
        </LinkBox>
      </NextLink>
    </Flex>
  );
};

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

export default function BackpackPage() {
  const { data: backpack, isLoading, isError } = useFetch(`/backpacks`);
  const { data: folders } = useFetch(`/backpacks/${backpack?.id}/folders`);

  console.log(backpack);
  return (
    <>
      <Stack gap={2}>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Stack gap={2} width="100%">
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Flex gap={2} alignItems="center">
                <IconButton>
                  <FiArchive />
                </IconButton>
              </Flex>
              <Flex gap={2} alignItems="center">
                <AddResource />
                <AddNewFolder />
                <ImportResources />
                <Button icon={<FiZap />} bg="brand.white">
                  Automations
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </Flex>
        <Flex gap={2}>
          <Stack flex="1">
            <BackpacksList />
            <Flex gap={2}>
              <Card>
                <Stack>
                  <Heading size="sm">Automations</Heading>
                </Stack>
              </Card>
              <Card>
                <Stack>
                  <Heading size="sm">Automations</Heading>
                </Stack>
              </Card>
            </Flex>
          </Stack>
          <Stack flex="2">
            <ListFolders folders={folders} isLoading={false} isError={false} />
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
