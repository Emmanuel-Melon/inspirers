import React, { useContext, useCallback, useState } from "react";
import {
  Flex,
  Avatar,
  Heading,
  VStack,
  Text,
  Stack,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "ui/Input";
import { Button, Card } from "ui";
import toast, { Toaster } from "react-hot-toast";
import { client } from "../../utils/client";
import Router, { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

/**
 * 
export default function NewUserPage() {
  if (typeof window !== "undefined") {
    window.location.assign(process.env.NEXT_PUBLIC_WEBAPP_URL || "https://app.cal.com");
  }
  return null;
}

 */

type UserInfoInput = {
  name: string;
  username?: string;
  bio?: string;
};

export default function NewUser() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const errorToast = (message: string) => toast.error(message);
  const successToast = (message: string) => toast.success(message);
  const router = useRouter();
  const { data: session } = useSession();

  const defaultFormValues = () => {
    return {
      username: session?.user.name,
      name: "",
      bio: "",
    };
  };

  const userForm = useForm({
    defaultValues: defaultFormValues(),
    // resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = userForm;


  const onSubmit: SubmitHandler<UserInfoInput> = (data) => {
    client
      .put(`/users/${session?.user?.id}`, {
        ...data,
      })
      .then(({ data: { user } }) => {
        // setGoalInfo({ ...goal, title: "" });

        console.log(user);
        router.push("/")
      })
      .catch((err) => {
        // alert("err");
        console.log(err);
      });
  };


  return (
    <>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={8} width="50%">
            <VStack flex="1" alignItems="flex-start">
              <Flex gap={2} alignItems="center">
                <Heading size="md">Hi there, {session?.user.name}</Heading>
              </Flex>
            </VStack>

            <Stack alignItems="flex-start" flex="2">
              <FormControl>
                <FormLabel color="brand.secondaryText">
                  What should we call you?
                </FormLabel>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder={session?.user.name}
                      type="text"
                      autoFocus={true}
                      id="name"
                      {...field}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="brand.secondaryText">Username</FormLabel>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder={session?.user.username}
                      type="text"
                      autoFocus={true}
                      id="username"
                      {...field}
                    />
                  )}
                />
              </FormControl>
              <FormControl>
                <Flex gap={2} alignItems="center">
                  <FormLabel color="brand.secondaryText" htmlFor="title">
                    Bio
                  </FormLabel>
                </Flex>

                <Controller
                  name="bio"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      placeholder="Tell us about yourself"
                      bg="brand.grey"
                      id="bio"
                      _placeholder={{ color: "brand.secondaryText" }}
                      {...field}
                    />
                  )}
                />
                {errors.title && <p>Hello</p>}
              </FormControl>
              <Flex justifyContent="flex-end">
                <Button type="submit" isLoading={isLoading}>
                  Done
                </Button>
              </Flex>
            </Stack>
          </Stack>
        </form>
      </Card>
      <Toaster position="bottom-center" />
    </>
  );
}
