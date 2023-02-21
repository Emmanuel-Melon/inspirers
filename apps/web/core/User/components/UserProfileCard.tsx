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
import { useRouter } from "next/router";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const CompanionView = () => {};
const UserView = () => {};

const ProfileCardActions = ({ children }) => {
  return (
    <Flex gap={4} alignItems="center">
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
const FollowUserButton = ({ createConnectionRequest, isUser, user, connection }) => {
  if (isUser) {
    return null;
  }

  console.log(connection)

  

  /**
   *   let classes = "btn btn-sm action-btn";
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

   */
  return (
    <Button onClick={createConnectionRequest}>
      {connection?.status ? "Unfollow" : "Follow"}
    </Button>
  );
};

const MessageUserButton = ({ isUser, user }) => {
  if (isUser) {
    return null;
  }

  return (
    <Button>
      {true ? "Message" : "Message"} {user?.username}
    </Button>
  );
};

export const UserProfileCard = ({ user }) => {
  const [labels, _setLabels] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const { mutate } = useSWRConfig();
  const [isLoading, setLoading] = useState<boolean>();
  const { data: connection } = useFetch(`/connections/${user?.id}/status`);
  const router = useRouter();
  console.log(router);

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
<Stack gap={2}>
          <Avatar name={user?.name} src={user?.image} size="xl" />
          <Stack>
            <Heading color="brand.primaryText" size="md">
              {user?.name}
            </Heading>
            <Text color="brand.accent">
              @{user?.username}
            </Text>
          </Stack>
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

          <FollowUserButton createConnectionRequest={createConnectionRequest} connection={connection} isUser={session?.user?.id === router.query.username} />
          <MessageUserButton  connection={connection} isUser={session?.user?.id === router.query.username} />
        </ProfileCardActions>
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
