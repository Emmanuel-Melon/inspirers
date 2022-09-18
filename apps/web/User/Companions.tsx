import React, { useState, useCallback } from "react";
import {
    Avatar,
    Image,
    Img,
    Text,
    Link,
    Flex,
    Heading,
    Box,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    useMultiStyleConfig,
    useTab,
    FormControl,
    FormLabel,
    Stack,
    RadioGroup,
    HStack,
    Radio,
    FormHelperText,
    Checkbox,
    Textarea,
    IconButton,
} from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/react";
import { Navbar, Spinner } from "ui";
import { useFetch } from "../hooks/useSwr";

export const UserCompanions = () => {
    const { data: session, status } = useSession();
    const { data: companions, isLoading, isError } = useFetch(`/connections/${session?.user?.id}`);

    if (status === "loading") {
      return (
        <Flex minHeight="100vh" align="center" justify="center">
          <Spinner />
        </Flex>
      );
    }

    console.log(companions?.data);
    return (
        <Stack>hey</Stack>
    )
}