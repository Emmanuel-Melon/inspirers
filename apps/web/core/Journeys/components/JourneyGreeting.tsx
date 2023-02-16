import { FC, useContext } from "react";
import { Box, Stack, Text, Flex, Heading } from "@chakra-ui/react";
import { Button, Card, IconButton } from "ui";
import moment from "moment";
import { FiSunset, FiShare, FiHelpCircle } from "react-icons/fi";
import { useRouter } from "next/router";
import { GoalsOverview } from "../JourneyOverview";


type JourneyGreeting = {
  // rest of the props
};

export const JourneyGreeting: FC<JourneyGreeting> = ({ children }) => {
  // make sure you account for query strings
  const router = useRouter();
  const isHome = router.asPath === "/";
  return (
    <>
      <Stack width="100%">
        {isHome ? (
          <Flex gap={4} width="100%">
            <Card>
              <Stack>
                <Flex gap={2} alignItems="center">
                  <Box>
                    <FiSunset size="1rem" />
                  </Box>
                  <Heading size="md">Good afternoon, Emmanuel</Heading>
                </Flex>
                <Text color="brand.secondaryText">
                  Welcome to Inspirers! Today is a new day to achieve your
                  goals.
                </Text>
              </Stack>
            </Card>
          </Flex>
        ) : null}
      </Stack>
    </>
  );
};

/**
 *           <Card bg="brand.primary">
          <Stack width="100%">
                <Heading size="md">Launching Inspirers</Heading>
                <Heading size="sm">
                  Wednesday, {moment(new Date()).format("MMM Do YY")}
                </Heading>
                {
                  false ? <Flex py="2" gap={2}>
                  <Button
                    color="brand.accent"
                    bg="brand.white"
                    icon={<FiHelpCircle />}
                  >
                    Support
                  </Button>
                  <Button
                    color="brand.accent"
                    bg="brand.white"
                    icon={<FiShare />}
                  >
                    Share
                  </Button>
                </Flex> : null
                }
                              
              </Stack>
          </Card>

          */