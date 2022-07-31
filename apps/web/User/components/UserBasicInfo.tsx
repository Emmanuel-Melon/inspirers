import { Avatar, Flex, Text, Heading, VStack } from "@chakra-ui/react";
import { Button } from "ui";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

export const UserBasicInfo = ({ user }) => {
  let flip: boolean = true;
  // set flip to true to observe empty state and to false to observe the default data. 
  return(flip)?
  (
    <Flex
      bg="brand.white"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      borderRadius="1rem"
      p="8"
      direction="column"
      color="brand.primaryText"
      gap={8}
      width="100%"
    >
      <VStack alignItems="flex-start">
        <Flex alignItems="center" gap={2}>
          <FiBriefcase />
          <Text color="brand.primary" fontWeight="700">
            
          </Text>
        </Flex>
        <Text></Text>
        <Flex alignItems="center" gap={2}>
          <FiCalendar />
          <Text color="brand.primary" fontWeight="700">
            
          </Text>
        </Flex>
        <Text></Text>
        <Flex alignItems="center" gap={2}>
          <FiMapPin />
          <Text color="brand.primary" fontWeight="700">
            
          </Text>
        </Flex>
        <Text></Text>
      </VStack>
    </Flex>
  ) 
  :(
    <Flex
      bg="brand.white"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      borderRadius="1rem"
      p="8"
      direction="column"
      color="brand.primaryText"
      gap={8}
      width="100%"
    >
      <VStack alignItems="flex-start">
        <Flex alignItems="center" gap={2}>
          <FiBriefcase />
          <Text color="brand.primary" fontWeight="700">
            Work
          </Text>
        </Flex>
        <Text>Software Developer</Text>
        <Flex alignItems="center" gap={2}>
          <FiCalendar />
          <Text color="brand.primary" fontWeight="700">
            Joined
          </Text>
        </Flex>
        <Text>July 2022</Text>
        <Flex alignItems="center" gap={2}>
          <FiMapPin />
          <Text color="brand.primary" fontWeight="700">
            Location
          </Text>
        </Flex>
        <Text>South Sudan</Text>
      </VStack>
    </Flex>
  );
};
