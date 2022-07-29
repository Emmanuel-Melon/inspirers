import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const PersonalJourney = ({ journey }) => {
  console.log(journey);
  return (
    <Box color="brand.primaryText">
      <Heading>{journey.title}</Heading>
    </Box>
  );
};
