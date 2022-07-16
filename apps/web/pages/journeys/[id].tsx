import { Flex, Text, Heading } from "@chakra-ui/react";

export default function Journey() {

    return (
        <Flex justifyContent="space-between" width="100%" gap={8}>
            <Text>Journey</Text>
        </Flex>
    );
}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { } }
      ],
      fallback: true 
    };
  }