import { Box, Heading, Stack } from "@chakra-ui/react";
import { FiLock } from "react-icons/fi";
import { Button } from "./Button";

export const UnAuthorized = ({ onClick }) => {
  return (
    <Box p="8">
      <Stack gap={2} width="400px" p="8" bg="brand.white" borderRadius="1rem">
        <Heading size="md">Not signed in</Heading>
        <Button onClick={() => onClick()} size="sm" icon={<FiLock />}>
          Sign in
        </Button>
      </Stack>
    </Box>
  );
};
