import React, { useContext, useCallback, useState } from "react";
import {
  Flex,
  Avatar,
  Heading,
  VStack,
  Text,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { TextInput } from "ui/Input";
import { Button } from "ui";
import toast, { Toaster } from "react-hot-toast";
import { client } from "../../utils/client";
import Router, { useRouter } from "next/router";

/**
 * 
export default function NewUserPage() {
  if (typeof window !== "undefined") {
    window.location.assign(process.env.NEXT_PUBLIC_WEBAPP_URL || "https://app.cal.com");
  }
  return null;
}

 */
export default function NewUser(props) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const errorToast = (message: string) => toast.error(message);
  const successToast = (message: string) => toast.success(message);
  const router = useRouter();

  const [info, setUserInfo] = useState({
    username: "",
    name: ""
  });

  const updateUserInfo = () => {
    setLoading(true);
    return client
      .put(`/users/${props.user.id}`, {
        name: info.name,
        username: info.username
      })
      .then((res) => {
        setLoading(false);
        successToast("Created info");
      })
      .then(() => router.push(`/user/${props.user.id}`))
      .catch((err) => {
        setLoading(false);
        setError(true);
        errorToast("something went wrong, try again later");
      });
  }

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((currentState) => {
      return {
        ...currentState,
        [name]: value,
      };
    });
  }, []);
  return (
    <>
      <Flex width="100%" gap={8}>
        <VStack flex="1" alignItems="flex-start">
          <Flex gap={2} alignItems="center">
            <Avatar src={props.user.image} />
            <Heading size="md">Welcome, {props.user.name}</Heading>
          </Flex>
          <Text>Inspirers is a platform where you can share your passions with your peers. We encourage you to grow into a better version of yourself. You will never be alone on this journey to self-development.</Text>
        </VStack>

        <VStack alignItems="flex-start" bg="brand.white" flex="2" p="4">
          <FormControl>
            <FormLabel>What should we call you?</FormLabel>
            <TextInput
              onChange={onChange}
              placeholder="John Doe"
              type="text"
              value={info.name}
              name="name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <TextInput
              onChange={onChange}
              placeholder="Must be unique"
              type="text"
              value={info.username}
              name="username"
            />
          </FormControl>
          <Button onClick={updateUserInfo} isLoading={isLoading}>Done</Button>
        </VStack>
      </Flex>
      <Toaster position="bottom-center" />
    </>

  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const { id, email, name, bio, image } = session?.user;

  return {
    props: {
      user: {
        id: id || null,
        email: email || null,
        name: name || null,
        bio: bio || null,
        image: image || null,
      },
    },
  };
}
