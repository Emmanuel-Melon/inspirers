import { Flex, Input, Box, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { TextInput } from "./Input";
import { Button } from "./Button";
import { FiBell, FiMoon, FiLogOut } from "react-icons/fi";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  function handleTitleChange() {}

  return (
    <Flex
      as="header"
      width="100%"
      px="8"
      gap={8}
      my="4"
      justifyContent="space-between"
    >
      <Flex width="30%">
        <TextInput
          onChange={handleTitleChange}
          placeholder="Search inspirers..."
          type="text"
          value={""}
        />
      </Flex>
      <Flex gap={4}>
        <Flex
          borderRadius="1rem"
          alignItems="center"
          px="2"
          justifyContent="center"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          cursor="pointer"
          _hover={{
            background: "brand.secondary",
            color: "brand.white",
          }}
        >
          <FiMoon size="1.5rem" />
        </Flex>

        <IconButton
          onClick={() => {
            signOut().then(() => {
              router.push("/auth");
            });
          }}
          icon={<FiLogOut size="1.5rem" />}
          bg="brand.secondary"
          color="brand.white"
          borderRadius="1rem"
          alignItems="center"
          px="2"
          justifyContent="center"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          cursor="pointer"
          _hover={{
            background: "brand.secondary",
            color: "brand.white",
          }}
        ></IconButton>
      </Flex>
    </Flex>
  );
};
