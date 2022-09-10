import React, { ReactChild, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import {
  Avatar,
  Flex,
  IconButton,
  Text,
  Heading,
  VStack,
  Box,
  Tag,
  TagLabel
} from "@chakra-ui/react";
import { Button } from "ui";
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin, FiEdit3, FiUserPlus, FiMoreHorizontal, FiMessageSquare
} from "react-icons/fi";
import { useFetch, usePost } from "hooks/useSwr";
import { client } from "utils/client";
import { useSession, signIn, signOut } from "next-auth/react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const CompanionView = () => { }
const UserView = () => { }

const ProfileCardActions = ({ children }) => {
  return (
    <Flex gap={4} justifyContent="flex-end" width="100%" alignItems="center">
      {children}
    </Flex>
  )
}

const ProfileCardActionButton = ({ icon, onClick, text }) => {
  return (<Button
    onClick={onClick}
    icon={icon}
    size="sm"
  >
    {text}
  </Button>)
}

export const UserProfileCard = ({ user }) => {
  const [labels, _setLabels] = useState<boolean>(false);
  const { data: session, status } = useSession();
  // const { data, mutate } = usePost("/connections/request");
  const { mutate } = useSWRConfig();
  const [isLoading, setLoading] = useState<boolean>();
  const { data: connection } = useFetch(`/connections/${user?.id}/status`);
  console.log(connection?.data?.status);

  const createConnectionRequest = () => {
    // mutate(`http://localhost:5000/api/connections/request`)
    client.post("/connections/request", {
      requesterId: session?.user?.id,
      recepientId: user?.id
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  const cancelConnectionRequest = () => {

  }

  const acceptConnectionRequest = () => {

  }
  return (
    <>
      <Flex
        bg="brand.white"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        borderRadius="1rem"
        p="8"
        direction="column"
        color="brand.primaryText"
        width="100%"
      >
        <Flex gap={4} justifyContent="space-between" direction="column">
          <Flex gap={2} justifyContent="space-between" alignItems="center">
            <Flex gap={2} alignItems="center">
              <Avatar
                src={
                  user?.image ||
                  "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"
                }
              />
              <VStack alignItems="flex-start">
                <Heading color="brand.primaryText" size="sm">
                  {user?.name}
                </Heading>
                <Text color="brand.accent" size="sm">@{user?.username}</Text>
              </VStack>
            </Flex>
          </Flex>

          <VStack alignItems="flex-start" width="100%" gap={4}>
            <ProfileCardActions>
              {
                session?.user?.id === user?.id ?
                  <Button
                    onClick={() => { }}
                    icon={<FiEdit3 />}
                    size="sm"
                  >
                    Edit Profile
                  </Button> : null}
              <IconButton
                borderRadius="50%"
                bg="brand.highlight1"
                aria-label={""}
                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              >
                <FiMoreHorizontal />
              </IconButton>
              <IconButton
                borderRadius="50%"
                bg="brand.highlight1"
                aria-label={""}
                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                _hover={{
                  bg: "brand.hovered"
                }}
              >
                <FiMessageSquare />
              </IconButton>

              {connection?.data?.status === null && session?.user?.id !== user?.id ? <ProfileCardActionButton
                onClick={createConnectionRequest}
                icon={<FiUserPlus />}
                text="Make Companion"
              /> : null }

              {connection?.data?.status === "Pending" ? <ProfileCardActionButton
                onClick={acceptConnectionRequest}
                icon={<FiUserPlus />}
                text="Pending"
              /> : null
              }

            </ProfileCardActions>
            <Flex gap={4}>
              <Text>{user?.bio}</Text>
            </Flex>
            <Flex gap={2} flexWrap="wrap">
              <Tag
                bg="brand.highlight"
                borderRadius='full'
                size="lg"
                _hover={{
                  bg: "brand.hovered"
                }}
                cursor="pointer"
              >
                <Avatar
                  src='https://bit.ly/sage-adebayo'
                  size='xs'
                  name='Segun Adebayo'
                  ml={-1}
                  mr={2}
                />
                <TagLabel>Finance</TagLabel>
              </Tag>
              <Tag
                bg="brand.highlight1"
                borderRadius='full'
                size="lg"
                _hover={{
                  bg: "brand.hovered"
                }}
                cursor="pointer"
              >
                <Avatar
                  src='https://bit.ly/sage-adebayo'
                  size='xs'
                  name='Segun Adebayo'
                  ml={-1}
                  mr={2}
                />
                <TagLabel>Software Engineering</TagLabel>
              </Tag>
              <Tag
                bg="brand.highlight2"
                borderRadius='full'
                size="lg"
                _hover={{
                  bg: "brand.hovered"
                }}
                cursor="pointer"
              >
                <Avatar
                  src='https://bit.ly/sage-adebayo'
                  size='xs'
                  name='Segun Adebayo'
                  ml={-1}
                  mr={2}
                />
                <TagLabel>Startups</TagLabel>
              </Tag>
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </>
  )
};
