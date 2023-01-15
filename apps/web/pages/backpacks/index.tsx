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
}

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
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  const onSave = () => {
    setIsLoading(true);
    client
      .post(`/backpacks/${journeyId}`, {
        name,
        userId,
        journeyId,
      })
      .then((response) => {
        successToast("Folder created successfully.")
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

  const onCancel = () => {
    setClicked(false);
    // cancel any http requests
  };
  return (
    <>
      {!clicked ? (
        <Flex>
          <Button onClick={() => setClicked(true)}>{label}</Button>
        </Flex>
      ) : (
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

const BackpacksList: FC<ListBackpacksProps> = ({
  backpacks,
  isError,
  isLoading,
}) => {
  const [parent]: any = useAutoAnimate();
  if (isError) {
    return <Text>Failed to Load Backpacks</Text>;
  }

  if (isLoading) {
    return <Text>Loading Backpacks</Text>;
  }
  return (
    <Flex gap={4}>
      <Stack gap={2} ref={parent} width="100%">
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
            <LinkBox>
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
                  <Flex gap={2} alignItems="center">
                    <Text>1/ {backpack.maxFolders} Folders</Text>
                    <Flex gap={2} alignItems="center">
                      <FiLock />
                      <Text>Private</Text>
                    </Flex>
                  </Flex>
                </Stack>
              </Card>
            </LinkBox>
          </NextLink>
        ))}
      </Stack>
    </Flex>
  );
};

const EmptyBackpacks = () => {
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
      <Card>
        <Stack gap={2}>
          <Heading size="md">You don&apos;t have a Backpack ready.</Heading>
          <Text>
            This version of inspirers will allow you to create up to 3
            Backpacks.
          </Text>
          <Flex gap={4}>
            <CreateNewBack
              label="Create Backpack"
              journeyId="clcqvy7g90011dabtsv8rnzh4"
              userId="cla6zxzxy098694btiqwmaixd"
            />
            <Button bg="brand.white">Learn More</Button>
          </Flex>
        </Stack>
      </Card>
      <Flex gap={2} justifyContent="space-between">
        <Card bg="brand.highlight2">
          <Stack>
            <Heading size="sm">Organize</Heading>
            <Text color="brand.secondaryText">
              This version of inspirers will allow you to create up to 3
              Backpacks.
            </Text>
          </Stack>
        </Card>
        <Card bg="brand.highlight2">
          <Stack>
            <Heading size="sm">Import Data</Heading>
            <Text color="brand.secondaryText">
              This version of inspirers will allow you to create up to 3
              Backpacks.
            </Text>
          </Stack>
        </Card>
        <Card bg="brand.highlight2">
          <Stack>
            <Heading size="sm">Automate</Heading>
            <Text color="brand.secondaryText">
              This version of inspirers will allow you to create up to 3
              Backpacks.
            </Text>
          </Stack>
        </Card>
      </Flex>
    </>
  );
};

export default function BackpackPage() {
  const context = useContext(JourneyContext);
  const {
    data: backpacks,
    isLoading: backpacksLoaded,
    isError: backpacksError,
  } = useFetch(`/backpacks`);

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
              <CreateNewBack
                journeyId={context.journey.id}
                userId={context.journey.userId}
              />
            </Flex>
            <Text>
              Empower your growth journey with thousands of free resources from
              people just like you.
            </Text>
          </Stack>
        </Flex>
        <Flex gap={8}>
          <Stack gap={4} flex="2">
            {backpacks && backpacks?.length === 0 ? (
              <EmptyBackpacks />
            ) : (
              <BackpacksList
                backpacks={backpacks}
                isLoading={backpacksLoaded}
                isError={backpacksError}
              />
            )}
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
