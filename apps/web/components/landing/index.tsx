import { Box, Container, Stack } from "@chakra-ui/react";
import { InterestForm } from "./InterestForm";
import { HeroSection } from "./HeroSection";
import { InspirationPane } from "./InspirationPane";
import { JourneySection } from "./JourneySection";
import { Highlights } from "./Highlights";
import { CompanionsSection } from "./CompanionsSection";
import { BackpackSection } from "./BackpackSection";
import { RoutinesSection } from "./RoutinesSection";
import { Header } from "./Header";
import { ReflectionsSection } from "./ReflectionsSection";
import Image from "next/image";
import { Footer } from "./Footer";

export const Landing = () => {
  return (
    <Box as="main" width="100%" justifyContent="center" alignItems="center">
      <Header />
      <Stack
        p={["1rem", "1rem", "1rem", "1rem"]}
        justifyContent="center"
        alignItems="center"
        width={["100%", "100%", "100%", "65%"]}
        margin="0 auto"
        gap={32}
      >
        <HeroSection />
        <JourneySection />
        <InspirationPane />
        <BackpackSection />
        <RoutinesSection />
        <CompanionsSection />
        <ReflectionsSection />

        <Highlights />
        
        <InterestForm />
        <Footer />
      </Stack>
    </Box>
  );
};

