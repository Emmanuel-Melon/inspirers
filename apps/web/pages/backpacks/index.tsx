/* eslint-disable react/no-children-prop */
import { FC, useContext, useState } from "react";
import {
  Stack,
  Flex,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Textarea,
} from "@chakra-ui/react";
import { Button, Card, IconButton, Input, Modal } from "ui";
import { useFetch } from "../../hooks/useSwr";
import { JourneyContext } from "providers/JourneyProvider";
import { Backpack } from "@prisma/client";
import { client } from "utils/client";
import NextLink from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import toast, { Toaster } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

import { FiArchive, FiSearch, FiPlus, FiShare, FiLock } from "react-icons/fi";

type CreateNewBackProps = {
  journeyId: string;
  label?: string;
  userId: string;
};

type FormValues = {
  name: string;
  description?: string;
};

const CreateNewBack: FC<CreateNewBackProps> = ({
  journeyId,
  label = "New",
  userId,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const errorToast = (message: string) => toast.error(message);
  const successToast = (message: string) => toast.success(message);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  const onSave = () => {
    setIsLoading(true);
    client
      .post(`/backpacks/${journeyId}`, {
        name,
        userId,
        journeyId,
      })
      .then((response) => {
        successToast("Folder created successfully.");
        setIsLoading(false);
        setClicked((currentState) => !currentState);
        setName("");
      })
      .catch((err) => {
        setIsLoading(false);
        setName("");
        setClicked((currentState) => !currentState);
        errorToast(err.message);
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const onCancel = () => {
    setClicked(false);
    // cancel any http requests
  };
  return (
    <>
      {!clicked ? (
        <Flex>
          <Button onClick={() => setIsModalOpen(true)}>{label}</Button>
        </Flex>
      ) : (
        <Modal show={isModalOpen} close={closeModal}>
          <Stack>
          <Input
            placeholder="Backpack Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            bg="brand.white"
            color="brand.secondaryText"
          />
          <Flex justifyContent="flex-end" gap={2}>
            <Button onClick={onCancel} bg="brand.white">
              Cancel
            </Button>
            <Button onClick={onSubmit} isLoading={isLoading}>
              Save
            </Button>
          </Flex>
        </Stack>
        </Modal>
        
      )}
      <Toaster position="bottom-center" />
    </>
  );
};

type ListBackpacksProps = {
  backpacks: Backpack[];
  isLoading?: boolean;
  isError?: boolean;
};

const BackpacksList = () => {
  const context = useContext(JourneyContext);
  const { data: backpacks, isLoading, isError } = useFetch(`/backpacks`);
  const [animationParentRef] = useAutoAnimate<HTMLDivElement>();
  if (isError) {
    return <Text>Failed to Load Backpacks</Text>;
  }

  if (isLoading) {
    return <Text>Loading Backpacks</Text>;
  }

  const createNewBack = () => {};
  return (
    <Flex
      gap={2}
      ref={animationParentRef}
      width="100%"
      direction={["column", "column", "row", "row"]}
      as="div"
      justifyContent="space-between"
    >
      {backpacks?.map((backpack) => (
        <NextLink
          href={{
            pathname: `/backpacks/${backpack.id}`,
            query: {
              backpackName: backpack.name,
            },
          }}
          passHref
        >
          <LinkBox flex="1">
            <Card key={backpack.id}>
              <Stack gap={2}>
                <Flex
                  gap={4}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack>
                    <LinkOverlay>
                      <Heading size="sm">{backpack.name}</Heading>
                    </LinkOverlay>
                  </Stack>
                  <Flex gap={2}>
                    <IconButton>
                      <FiShare />
                    </IconButton>
                  </Flex>
                </Flex>
                <Stack gap={2}>
                  <Text>1/ {backpack.maxFolders} Folders</Text>
                  <Flex gap={2} alignItems="center">
                    <FiLock />
                    <Text>Private</Text>
                  </Flex>
                </Stack>
              </Stack>
            </Card>
          </LinkBox>
        </NextLink>
      ))}
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
                <Heading size="md">Emmanuel&apos;s Backpacks</Heading>
              </Flex>
              <CreateNewBack />
            </Flex>
            <Text>
              Empower your growth journey with thousands of free resources from
              people just like you.
            </Text>
          </Stack>
        </Flex>
        <Flex gap={8}>
          <BackpacksList />
        </Flex>
      </Stack>
    </>
  );
}
