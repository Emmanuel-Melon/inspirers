import { useState } from "react";
import {
    Stack,
    Flex,
    Heading,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Text,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Kbd
} from "@chakra-ui/react";
import { Input } from "./Input";

export const Navbar = () => {

  function handleTitleChange() { }

  return (
    <Flex
      as="header"
      width="100%"
      px="8"
      gap={8}
      justifyContent="space-between"
    >
      <Flex>
        <Input
          onChange={handleTitleChange}
          placeholder="Search inspirers..."
          type="text"
          value={""}
        />
      </Flex>
    </Flex>
  );
};
