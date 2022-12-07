import { Box, Flex, Heading, Stack, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { RiTeamLine } from "react-icons/ri";
import { Card } from "ui";
import { gradientUnderline } from "ui";
import { SectionWrapper } from "./SectionWrapper";

export const CompanionsSection = () => {
  return (
    <SectionWrapper>
      <Stack flex="2" gap={4}>
        <Flex gap={4} alignItems="center">
          <Box
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            p="2"
            borderRadius="1rem"
            bg="brand.white"
            width="fit-content"
          >
            <RiTeamLine size="2rem" />
          </Box>
          <Heading
            width="fit-content"
            as="h3"
            size="lg"
            _after={gradientUnderline()}
          >
            Find Companions
          </Heading>
        </Flex>
        <Heading size="lg">
          Inspirer is a way of saying, "I'm going to be OK on my own, but when I
          need help, here are the people and places to go to."
        </Heading>
        <Text size="lg" color="brand.secondaryText">
          Discover and learn from those who share your aspirations, then stay
          connected to grow together. Collaborate in real-time using Inspirers.
        </Text>
        <Stack gap={2}>
          <Flex gap={4} justifyContent="center">
            <Stack flex="1">
            <Card >
            <Stack justifyContent="center" alignItems="center" p="8">
              <Image
                width="200"
                height="200"
                src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"
                alt="Banner"
              />
              <Heading size="lg">Share Everything</Heading>
              <Text textAlign="center">
                You can join with other like-minded individuals, learn from each
                other and share experiences.
              </Text>
            </Stack>
            </Card>
            </Stack>

            <Stack gap={4}>
              <Card>
                <Stack gap={4}>
                  <Stack gap={2}>
                    <Heading
                      size="lg"
                      width="fit-content"
                      _after={gradientUnderline({
                        bg: "brand.primary",
                      })}
                      transform="rotate(-2deg)"
                    >
                      Collaborate
                    </Heading>
                    <Text>
                      Build on each other’s thoughts and ideas, and share your
                      own.
                    </Text>
                  </Stack>
                </Stack>
              </Card>
              <Card>
                <Stack gap={4}>
                  <Stack gap={2}>
                    <Heading
                      size="lg"
                      width="fit-content"
                      _after={gradientUnderline({
                        bg: "yellow.100",
                      })}
                      transform="rotate(2deg)"
                    >
                      Empower
                    </Heading>
                    <Text>
                      Grow, earn and share with the people who make you better.
                    </Text>
                  </Stack>
                </Stack>
              </Card>
              <Card>
                <Stack gap={4}>
                  <Stack gap={2}>
                    <Heading
                      size="lg"
                      width="fit-content"
                      _after={gradientUnderline({
                        bg: "blue.100",
                      })}
                      transform="rotate(4deg)"
                    >
                      Engage
                    </Heading>
                    <Text>
                      Share your progress, give feedback and hold each other
                      accountable.
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};
