import { FC } from "react";
import {
  Flex,
  Heading,
  Stack,
  Box,
  Tag,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";
import { Card } from "ui";
import { FiMap } from "react-icons/fi";
import { Journey } from "@prisma/client";

export type JourneyCardProps = {
  journey: Journey;
}

// has completed onboarding vs detect page visit for the first time
// show a list of things to do when yo visit a Journey's page for the first time
// use this design for the onboarding: https://dribbble.com/shots/9830577-Guided-onboarding
// use small dots to indicate progress during onboarding
export const JourneyCard: FC<JourneyCardProps> = ({ journey }) => {
  return (
    <LinkBox>
        <Card>
      <Flex gap={4} alignItems="center">
        <Box
          bg="brand.highlight1"
          p="4"
          color="brand.secondaryText"
          borderRadius="1rem"
        >
          <FiMap />
        </Box>
        <Stack gap={2} color="brand.primaryText">
          <LinkOverlay href={`journeys/${journey.id}`}>
          <Heading size="md">{journey.title}</Heading>
          </LinkOverlay>
          <Flex gap={4} justifyContent="space-between" direction="column">
            <Stack alignItems="flex-start" width="100%">
              <Flex gap={2} flexWrap="wrap">
                <Tag bg="brand.highlight2">Tech</Tag>
                <Tag bg="brand.highlight1">Software</Tag>
                <Tag bg="brand.highlight2">Mentorship</Tag>
              </Flex>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </Card>
    </LinkBox>
  );
};
