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
import { client } from "utils/client";
import { Resource } from "@prisma/client";
import toast, { Toaster } from "react-hot-toast";

export default function Backpack() {
  const router = useRouter();
  const errorToast = (message: string) => toast.error(message);
  const successToast = (message: string) => toast.success(message);
  const {
    data: folders,
    isLoading,
    isError,
  } = useFetch(`/backpacks/${router.query.backpack}/folders`);

  const addResource = (data: Resource) => {
    return client
      .post(`/backpacks/resources`, {
        ...data,
        backpackId: router.query.backpack
      })
      .then((response) => {
        successToast("Resource created");
      })
      .catch((err) => {
        errorToast(err.message);
      });
  };

  return (
    <>
      <Flex gap={2} direction={["row", "column", "column", "column"]}>
        <Flex
          justifyContent="space-between"
          direction={["row", "row", "row", "row"]}
        >
          <Flex gap={2} alignItems="center">
            <IconButton onClick={() => router.back()}>
              <FiChevronLeft />
            </IconButton>
            <Heading size="md">{router.query.backpackName}</Heading>
          </Flex>
          <Flex gap={2} alignItems="center">
            <AddResource addResource={addResource} />
            <AddNewFolder />
            <ImportResources />
            <Button icon={<FiZap />} bg="brand.white">
              Automations
            </Button>
          </Flex>
        </Flex>
        <Flex gap={4} direction={["row", "column", "column", "column"]}>
          <Stack flex="2">
            <ListFolders
              folders={folders}
              isLoading={isLoading}
              isError={isError}
            />
          </Stack>
        </Flex>
      </Flex>
      <Toaster position="bottom-center" />
    </>
  );
}
