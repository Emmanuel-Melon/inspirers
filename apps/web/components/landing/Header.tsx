import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { RiRocket2Fill, RiMenu4Line } from "react-icons/ri";
import { IconButton } from "ui";

export const Header = () => {
  return (
    <Flex
      bg="brand.header"
      padding={["1rem", "1rem", "1rem", "1rem"]}
      as="header"
      marginTop={["2rem", "3rem", "4rem", "1rem"]}
      width="100%"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap={1}>
        <Box
          transform={"rotate(25deg)"}
        >
          <RiRocket2Fill size="1.5rem" />
        </Box>
        <Heading size="md">Inspirers</Heading>
      </Flex>
      <Flex gap={4}>
        <IconButton>
          <RiMenu4Line />
        </IconButton>
      </Flex>
    </Flex>
  );
};
