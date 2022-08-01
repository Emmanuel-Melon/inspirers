import { useFetch } from "../../../hooks/useSwr";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { JourneyBluePrint } from "./JourneyBluePrint";

export const ListBluePrints = () => {
  const { data, isLoading, isError } = useFetch("/journeys/blueprints");

  if (isError) {
    return <Heading>So sad</Heading>;
  }

  return (
    <Flex direction="column" gap={4} color="brand.primary" width="100%">
      <Flex direction="column" gap={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="md">Career</Heading>
          <Text
            color="brand.primaryText"
            bg="brand.highlight2"
            fontWeight="700"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            fontSize="12px"
            px="2"
            py="1px"
          >
            View More
          </Text>
        </Flex>
        <Flex gap={4} flexWrap="wrap">
          {data?.data?.map((bluePrint) => (
            <JourneyBluePrint bluePrint={bluePrint} key={bluePrint.id} />
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" gap={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="md">Product/ Business</Heading>
          <Text
            color="brand.primaryText"
            bg="brand.highlight2"
            fontWeight="700"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            fontSize="12px"
            px="2"
            py="1px"
          >
            View More
          </Text>
        </Flex>
        <Flex gap={4} flexWrap="wrap">
          {data?.data?.map((bluePrint) => (
            <JourneyBluePrint bluePrint={bluePrint} key={bluePrint.id} />
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" gap={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="md">Education</Heading>
          <Text
            color="brand.primaryText"
            bg="brand.highlight2"
            fontWeight="700"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            fontSize="12px"
            px="2"
            py="1px"
          >
            View More
          </Text>
        </Flex>
        <Flex gap={4} flexWrap="wrap">
          {data?.data?.map((bluePrint) => (
            <JourneyBluePrint bluePrint={bluePrint} key={bluePrint.id} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
