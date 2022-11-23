import { Box, Flex, Heading, Stack, Text, Container } from "@chakra-ui/react";
import { SectionWrapper } from "./SectionWrapper";

export const Footer = () => {
  return (
    <SectionWrapper height="fit-content">
      <Flex gap={32}>
        <Stack p="2" gap={4}>
          <Heading size="md">Socials</Heading>
          <Text>Facebook</Text>
          <Text>Twitter</Text>
          <Text>LinkedIn</Text>
        </Stack>
        <Stack p="2" gap={4}>
          <Heading size="md">Product</Heading>
          <Text>Features</Text>
          <Text>Twitter</Text>
          <Text>LinkedIn</Text>
        </Stack>
        <Stack p="2" gap={4}>
          <Heading size="md">Resources</Heading>
          <Text>Blog</Text>
          <Text>Support</Text>
          <Text>Feature Requests</Text>
        </Stack>
      </Flex>
    </SectionWrapper>
  );
};
