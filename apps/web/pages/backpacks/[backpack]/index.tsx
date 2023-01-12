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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  AddResource,
  QuickAccess,
  ListFolders,
  ListRecentlyAdded,
  AddNewFolder,
  ImportResources,
} from "core/Backpack";
import { Button, Card, IconButton, Input, Modal } from "ui";
import { FiChevronLeft, FiZap, FiArchive, FiSearch } from "react-icons/fi";
import { useFetch } from "hooks/useSwr";

export default function Backpack() {
  const router = useRouter();
  const {
    data: folders,
    isLoading,
    isError,
  } = useFetch(`/backpacks/${router.query.backpack}/folders`);

  return (
    <Stack>
      <Flex justifyContent="space-between">
        <Flex gap={2} alignItems="center">
          <IconButton onClick={() => router.back()}>
            <FiChevronLeft />
          </IconButton>
          <Heading size="md">{router.query.backpackName}</Heading>
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
      <Flex gap={4}>
        <Stack flex="2">
          <ListFolders
            folders={folders}
            isLoading={isLoading}
            isError={isError}
          />
          <Flex>
            <Card>
              <Heading size="sm">Organize</Heading>
            </Card>
          </Flex>
        </Stack>
        <Stack flex="1">
          <Heading size="sm">Folder Activity</Heading>
        </Stack>
      </Flex>
    </Stack>
  );
}
