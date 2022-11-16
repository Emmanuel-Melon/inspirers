import { Stack, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Stack
      bg="brand.header"
      padding={["2rem", "3rem", "3.5rem", "4rem"]}
      as="header"
      marginTop={["2rem", "3rem", "4rem", "1rem"]}
    >
      <Text>Inspirers</Text>
    </Stack>
  );
};
