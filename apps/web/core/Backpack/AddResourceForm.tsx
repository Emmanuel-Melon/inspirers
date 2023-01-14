import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Heading,
  Select,
  Stack,
  Tag,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";

import { Button, IconButton, Input, Modal } from "ui";
import {
  FiPlus,
  FiTrash,
  FiCheck,
  FiTag,
  FiUserPlus,
  FiLink2,
  FiClock,
  FiX,
  FiLink,
  FiImage,
  FiVideo,
  FiMoreHorizontal,
  FiEye,
  FiMaximize2,
  FiArrowRight,
  FiChevronsRight,
  FiFolder,
  FiRotateCw,
  FiUsers,
  FiUploadCloud
} from "react-icons/fi";
import { client } from "utils/client";
import { ResourceType } from "@prisma/client";

// clear form fields after submit
// add loading state
// add drag and drop for images/videos uploads
// pick links from the clipboard
// add tags
// add a preview of the link
// submit form on enter

export const AddResourceForm = ({ toggleView, backpack }) => {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addResource = (e: SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    client
      .post(`/backpacks/${backpack?.id}`, {
        title,
        resourceUrl: url,
        type: ResourceType.Video,
        folderId: "clcqi2pq30168xabt5r03b3yg"
      })
      .then((response) => {
        setIsLoading(false);
      })
      .then(() => closeModal());
  };

  const preventExit = () => {
    alert("Are you sure you want to exit? Your changes will be lost.");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Escape") {
        event.preventDefault();

        // 👇️ your logic here
        preventExit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  return (
    <>
      <Button icon={<FiUploadCloud />} onClick={openModal} bg="brand.white">
        Add Resource
      </Button>
      <Modal show={isModalOpen} close={closeModal}>
        <form onSubmit={addResource}>
          <Stack color="brand.primaryText">
            <Flex
              px="4"
              py="2"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex gap={1} alignItems="center" color="brand.secondaryText">
                <Tag
                  color="brand.secondaryText"
                  bg="brand.highlight1"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                >
                  Backpack
                </Tag>
                <FiChevronsRight />
                <Text size="sm">New resource</Text>
              </Flex>
              <Flex gap={2} alignItems="center">
                <IconButton label={""} onClick={() => {}}>
                  <FiMaximize2 />
                </IconButton>
                <IconButton label={""} onClick={closeModal}>
                  <FiX />
                </IconButton>
              </Flex>
            </Flex>
            <Stack px="4" py="2">
              <FormControl>
                <Input
                  type="text"
                  placeholder="Resource name (optional)"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  autoFocus={true}
                />
              </FormControl>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter a URL"
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                />
              </FormControl>
            </Stack>
            <Flex px="4" py="2" gap={2}>
              <Button
                size="sm"
                icon={<FiFolder />}
                onClick={() => {}}
                bg="brand.white"
                color="brand.secondaryText"
              >
                Folder
              </Button>
              <Button
                size="sm"
                icon={<FiClock />}
                onClick={() => {}}
                bg="brand.white"
                color="brand.secondaryText"
              >
                Due Date
              </Button>
              <Button
                size="sm"
                icon={<FiUsers />}
                onClick={() => {}}
                bg="brand.white"
                color="brand.secondaryText"
              >
                Companions
              </Button>
            </Flex>
            <Flex
              px="4"
              py="4"
              alignItems="center"
              justifyContent="space-between"
              bg="brand.highlight2"
            >
              <Flex gap={2}>
                <IconButton onClick={() => toggleView("image")} label={""}>
                  <FiImage />
                </IconButton>
                <IconButton onClick={() => toggleView("video")} label={""}>
                  <FiVideo />
                </IconButton>
                <IconButton onClick={() => toggleView("invite")} label={""}>
                  <FiUserPlus />
                </IconButton>
                <IconButton onClick={() => toggleView("expanded")} label={""}>
                  <FiMoreHorizontal />
                </IconButton>
              </Flex>
              <Flex gap={2}>
                <Select
                  borderRadius="0.5rem"
                  bg="brand.white"
                  placeholder="Anyone"
                  size="sm"
                  border="none"
                  color="brand.secondaryText"
                  boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Button isLoading={isLoading} type="submit">
                  Add Resource
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
