import { Box, Flex, Heading, Stack, Text, Container } from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "ui";
import { gradientUnderline } from "ui";
import { SectionWrapper } from "./SectionWrapper";

export const HeroSection = () => {
  return (
    <SectionWrapper>
      <Stack gap={4} textAlign="center" width="100%" height="100%" alignItems="center" justifyContent="center">
      <Image
        width="350"
        height="350"
        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1665846497/Hero-illustrationNew.png"
        alt="Banner"
      />
        <Heading as="h1" size="2xl" fontWeight="800">
          Achieve your dreams and{" "}
          <Box _after={gradientUnderline({
                      bg: "brand.secondary",
                    })} display="inline-block">
            inspire
          </Box>{" "}
          others.
        </Heading>
        <Heading color="brand.secondaryText" as="h2" size="md">
        The Inspirers app is a community of experts from diverse countries and fields of knowledge, who are sharing how they got their success and achieved their goals. You can get inspiration from their "stories", methods, and tools; then apply them to your life!
        </Heading>
        <Button width="fit-content">Get Inspired</Button>
        
      </Stack>
    </SectionWrapper>
  );
};

/**
 *         <Image
        width="500"
        height="500"
        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1665846507/Illustration_Mobile.svg"
        alt="Banner"
      />
 */
