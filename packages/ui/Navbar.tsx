import {
  Flex, Input, Box, IconButton, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import Link from "next/link";
import { TextInput } from "./Input";
import { Button } from "./Button";
import { FiBell, FiMoon, FiLogOut, FiArrowDown } from "react-icons/fi";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  function handleTitleChange() { }

  return (
    <Flex
      as="header"
      width="100%"
      px="8"
      gap={8}
      my="4"
      justifyContent="space-between"
    >
      <Flex>
        <TextInput
          onChange={handleTitleChange}
          placeholder="Search inspirers..."
          type="text"
          value={""}
        />
      </Flex>
    </Flex>
  );
};
