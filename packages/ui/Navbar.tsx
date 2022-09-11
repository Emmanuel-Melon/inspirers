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
      <Flex width="30%">
        <TextInput
          onChange={handleTitleChange}
          placeholder="Search inspirers..."
          type="text"
          value={""}
        />
      </Flex>
      <Flex gap={4}>
        <Menu>
          <MenuButton as={Button} rightIcon={<FiArrowDown />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Flex
          borderRadius="1rem"
          alignItems="center"
          px="2"
          justifyContent="center"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          cursor="pointer"
          _hover={{
            background: "brand.hovered",
            color: "brand.primaryText",
          }}
        >
          <FiMoon size="1.5rem" />
        </Flex>
      </Flex>
    </Flex>
  );
};
