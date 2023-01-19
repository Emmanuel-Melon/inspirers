import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";
import { useFetch } from "hooks/useSwr";
import { useRouter } from "next/router";

import { AsyncDropdown, Button, IconButton, Input, Modal } from "ui";
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
  FiUploadCloud,
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

const LinkFolderButton = ({ control }) => {
  const generateUrl = () => {
    return "/backpacks/clcsb7g9w4289lfbtan3qgu6z/folders";
  };
  return (
    <Popover isLazy placement="right-start">
      <PopoverTrigger>
        <Button icon={<FiFolder />} bg="white">
          Folder
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Choose folder</PopoverHeader>
        <PopoverBody>
          <Controller
            name="folderId"
            control={control}
            render={({ field }) => (
              <AsyncDropdown
                optionsUrl={generateUrl()}
                {...field}
                placeholder="Choose a folder"
              />
            )}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const AddResourceForm = ({ addResource, toggleView, backpack }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [folderId, setFolderId] = useState<string>("clcsbfkxu4481lfbt56bcnbfo");
  const router = useRouter();


  const { control, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: "",
      resourceUrl: "",
      folderId,
      type: ResourceType.Video,
    },
  });

  const onSubmit = async (data) => {
    addResource({
      ...data,
      folderId: data.folderId.value
    });
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <IconButton label={""} colorScheme="teal" onClick={() => {}}>
                  <FiMaximize2 />
                </IconButton>
                <IconButton label={""} onClick={closeModal}>
                  <FiX />
                </IconButton>
              </Flex>
            </Flex>
            <Stack px="4" py="2">
              <FormControl>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter name" />
                  )}
                />
              </FormControl>
              <FormControl>
                <Controller
                  name="resourceUrl"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Resource Url" />
                  )}
                />
              </FormControl>
            </Stack>
            <Flex px="4" py="2" gap={2}>
              <LinkFolderButton control={control} />
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
