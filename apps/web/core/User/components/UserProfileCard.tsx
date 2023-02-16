import React, { ReactChild, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import {
  Flex,
  Text,
  Heading,
  VStack,
  Box,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { Avatar, Button, IconButton, Modal, Card } from "ui";
import {
  FiFacebook,
  FiCode,
  FiBriefcase,
  FiFolder,
  FiCreditCard,
  FiTwitter,
  FiLinkedin,
  FiEdit3,
  FiUserPlus,
  FiMoreHorizontal,
  FiMessageSquare,
} from "react-icons/fi";
import { useFetch, usePost } from "hooks/useSwr";
import { client } from "utils/client";
import { useSession, signIn, signOut } from "next-auth/react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const CompanionView = () => {};
const UserView = () => {};

const ProfileCardActions = ({ children }) => {
  return (
    <Flex gap={4} justifyContent="flex-end" alignItems="center">
      {children}
    </Flex>
  );
};

const ProfileCardActionButton = ({ icon, onClick, text }) => {
  return (
    <Button onClick={onClick} icon={icon} size="sm">
      {text}
    </Button>
  );
};

/**
 *           {connection?.data?.status === null && session?.user?.id !== user?.id ? <ProfileCardActionButton
            onClick={createConnectionRequest}
            icon={<FiUserPlus />}
            text="Make Companion"
          /> : null}

          {connection?.data?.status === "Pending" ? <ProfileCardActionButton
            onClick={acceptConnectionRequest}
            icon={<FiUserPlus />}
            text="Pending"
          /> : null
          }
 */
const FollowUserButton = (props) => {
  if (props.isUser) {
    return null;
  }

  let classes = "btn btn-sm action-btn";
  if (props.user.following) {
    classes += " btn-secondary";
  } else {
    classes += " btn-outline-secondary";
  }

  const handleClick = (ev) => {
    ev.preventDefault();
    if (props.user.following) {
      props.unfollow(props.user.username);
    } else {
      props.follow(props.user.username);
    }
  };

  return (
    <Button className={classes} onClick={handleClick}>
      <i className="ion-plus-round"></i>
      &nbsp;
      {props.user.following ? "Unfollow" : "Follow"} {props.user.username}
    </Button>
  );
};

export const UserProfileCard = ({ user }) => {
  const [labels, _setLabels] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const { mutate } = useSWRConfig();
  const [isLoading, setLoading] = useState<boolean>();
  const { data: connection } = useFetch(`/connections/${user?.id}/status`);
  console.log(user);

  const createConnectionRequest = () => {
    client
      .post("/connections/request", {
        requesterId: session?.user?.id,
        recepientId: user?.id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancelConnectionRequest = () => {};

  const acceptConnectionRequest = () => {
    client.post("/connections/accept", {
      requesterId: user?.id,
    });
  };

  console.log(user);

  return (
    <>
      <Stack
        bg="brand.white"
        borderRadius="1rem"
        p="4"
        direction="column"
        color="brand.primaryText"
        width="100%"
      >
        <Flex gap={4} alignItems="flex-start">
          <Avatar name={user?.name} src={user?.image} size="lg" />
          <Stack alignItems="flex-start">
            <Heading color="brand.primaryText" size="sm">
              {user?.name}
            </Heading>
            <Text color="brand.secondary" size="sm">
              @{user?.username}
            </Text>
          </Stack>
        </Flex>
        <ProfileCardActions>
          {session?.user?.id === user?.id ? (
            <Button
              onClick={() => setIsModalOpen(true)}
              icon={<FiEdit3 />}
              size="sm"
            >
              Edit Profile
            </Button>
          ) : null}
          <IconButton
            borderRadius="50%"
            bg="brand.highlight1"
            aria-label={""}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
          >
            <FiMoreHorizontal />
          </IconButton>
          {false ? (
            <IconButton
              borderRadius="50%"
              bg="brand.highlight1"
              aria-label={""}
              boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
              _hover={{
                bg: "brand.hovered",
              }}
            >
              <FiMessageSquare />
            </IconButton>
          ) : null}
        </ProfileCardActions>
        <Flex>
          <Text my="8">{user?.bio}</Text>
        </Flex>
      </Stack>
    </>
  );
};

/**
 *       

      modal renders page unresponsive
            <Modal show={isModalOpen} close={closeModal}>
        <Stack p="8" direction="column" color="brand.primaryText">
            <Heading size="md">Labels</Heading>
          </Stack>
      </Modal>
 */
