import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Stack,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiMap } from "react-icons/fi";
import { RiCamera3Line, RiCodeLine, RiMusic2Line, RiArtboard2Line, RiBook3Line, RiTranslate2, RiBasketballLine } from "react-icons/ri";
import { Card } from "ui";
import { gradientUnderline } from "ui";

export const JourneyTags = () => {
  return (
    <Flex flex="1" gap={4} flexWrap="wrap" justifyContent="center">
      <Tag
        size="lg"
        bg="brand.white"
        borderRadius="1rem"
        py="2"
        px="4"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      >
        <TagLeftIcon as={RiBasketballLine} color="brand.accent" />
        <TagLabel>Sports & Fitness</TagLabel>
      </Tag>
      <Tag
        size="lg"
        bg="brand.white"
        borderRadius="1rem"
        py="2"
        px="4"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      >
        <TagLeftIcon as={RiMusic2Line} color="pink" />
        <TagLabel>Art & Music</TagLabel>
      </Tag>
      <Tag
        size="lg"
        bg="brand.white"
        borderRadius="1rem"
        py="2"
        px="4"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      >
        <TagLeftIcon as={RiCamera3Line} color="green" />
        <TagLabel>Photography</TagLabel>
      </Tag>
      <Tag
        size="lg"
        bg="brand.white"
        borderRadius="1rem"
        py="2"
        px="4"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      >
        <TagLeftIcon as={RiCodeLine} color="maroon" />
        <TagLabel>Software Engineering</TagLabel>
      </Tag>
      <Tag
        size="lg"
        bg="brand.white"
        borderRadius="1rem"
        py="2"
        px="4"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      >
        <TagLeftIcon as={RiBook3Line} color="blue" />
        <TagLabel>Writing</TagLabel>
      </Tag>
      <Tag
        size="lg"
        bg="brand.white"
        borderRadius="1rem"
        py="2"
        px="4"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      >
        <TagLeftIcon as={RiArtboard2Line} color="purple" />
        <TagLabel>Graphic Design</TagLabel>
      </Tag>
      <Tag
        size="lg"
        bg="brand.white"
        borderRadius="1rem"
        py="2"
        px="4"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      >
        <TagLeftIcon as={RiTranslate2} color="brand.secondary" />
        <TagLabel>Languages</TagLabel>
      </Tag>
    </Flex>
  );
};
