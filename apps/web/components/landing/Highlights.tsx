import { Box, Flex, Heading, Stack, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiMap } from "react-icons/fi";
import { Card, gradientUnderline } from "ui";
import { RiRobotLine, RiBrush3Line } from "react-icons/ri";
import { SectionWrapper } from "./SectionWrapper";

export const Highlights = () => {
  return (
    <SectionWrapper>
      <Stack gap={8}>
        <Stack gap={8}>
          <Flex gap={8} alignItems="center">
            <Heading as="h1" size="2xl" _after={gradientUnderline()}>
              Are you ready to grow?
            </Heading>
          </Flex>
          <Heading size="lg">
            But before you head out the door, there are a few things you need to
            know.
          </Heading>
        </Stack>
        <Flex justifyContent="space-between" flexWrap="wrap" gap={4}>
          <Flex flex="1">
            <Card p="8">
              <Stack gap={8}>
                <Box>
                  <Image
                    width="150"
                    height="150"
                    src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1668705687/inspirers/avatars/AvatarBoy.svg"
                    alt="Banner"
                  />
                </Box>
                <Stack>
                  <Heading size="sm">Automation</Heading>
                  <Text color="brand.secondaryText">
                    We analyze your journey and encourage you.
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Flex>
          <Flex flex="1">
            <Card p="8">
              <Stack gap={8} alignItems="center">
                <Box>
                  <Image
                    width="150"
                    height="150"
                    src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1668705687/inspirers/avatars/AvatarBoy.svg"
                    alt="Banner"
                  />
                </Box>
                <Stack>
                  <Heading size="sm">Shortcuts</Heading>
                  <Text color="brand.secondaryText">
                    We analyze your journey and encourage you.
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Flex>
          <Flex flex="1">
            <Card p="8">
              <Stack gap={8} alignItems="center">
                <Box>
                  <Image
                    width="150"
                    height="150"
                    src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1668705687/inspirers/avatars/AvatarBoy.svg"
                    alt="Banner"
                  />
                </Box>
                <Stack>
                  <Heading size="sm">Customization</Heading>
                  <Text color="brand.secondaryText">
                    We analyze your journey and encourage you.
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Flex>
          <Flex flex="1">
            <Card p="8">
              <Stack gap={8} alignItems="center">
                <Box>
                  <Image
                    width="150"
                    height="150"
                    src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1668705687/inspirers/avatars/AvatarBoy.svg"
                    alt="Banner"
                  />
                </Box>
                <Stack>
                  <Heading size="sm">Recommendations</Heading>
                  <Text color="brand.secondaryText">
                    We analyze your journey and encourage you.
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Flex>
          
        </Flex>
      </Stack>
    </SectionWrapper>
  );
};
