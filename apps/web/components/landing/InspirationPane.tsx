import {
  Flex,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { Button, Card } from "ui";
import { gradientUnderline } from "ui";
import { SectionWrapper } from "./SectionWrapper";
import {
  RiOpenArmLine,
  RiHandHeartLine,
  RiMagicLine,
  RiPlantLine,
} from "react-icons/ri";
import Image from "next/image";

export const InspirationPane = () => {
  return (
    <SectionWrapper>
      <Stack alignItems="center" justifyContent="center" gap={4}>
        <Heading>So let's pack up and head on a Journey, shall we?</Heading>
        <Text>
          Whether you're trying to lose weight, get promoted at work, learn a
          language, launch a startup, or something else-- we have everything you
          need to achieve it.
        </Text>
        <Flex
          flexDir={["column", "column", "row", "row"]}
          alignItems="center"
          justifyContent="center"
          gap="8"
        >
          <Flex flex="1">
          <Image
            width="250"
            height="250"
            src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg"
            alt="Banner"
          />
          </Flex>
          <Stack gap={4} height="350px" overflowY="scroll" flex="2">
            <RiOpenArmLine size="3rem" />
            <Heading size="md">Connect and Engage</Heading>
            <Text>
              Find companions with similar goals to hold each other accountable
              and celebrate wins together
            </Text>
            <Divider />
            <RiMagicLine size="3rem" />
            <Heading size="md">Reflect and improve</Heading>
            <Text>
              Reflect on your experience and highlight the your next area of
              improvement
            </Text>
            <Divider />
            <RiHandHeartLine size="3rem" />
            <Heading size="md">Gather resource</Heading>
            <Text>
              The Backpack will allow you to have your books, articles,
              tutorials, podcasts, videos, and more at your fingertips.
            </Text>
            <Divider />
            <RiPlantLine size="3rem" />
            <Heading size="md">Build Habits</Heading>
            <Text>
              Build habits that are aligned with your purpose, goals and daily
              objectives
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </SectionWrapper>
  );
};
