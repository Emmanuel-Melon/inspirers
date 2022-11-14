import { Container } from "@chakra-ui/react";
import { InterestForm } from "./InterestForm";
import { HeroSection } from "./HeroSection";
import { InspirationPane } from "./InspirationPane";
import { JourneyHighlights } from "./JourneyHighlights";
import { Differentiators } from "./Differentiators";
import { CompanionsHighlights } from "./CompanionsHighlights";
import { BackpackHighlights } from "./BackpackHighlights";
import { RoutinesSection } from "./RoutinesSection";
import Routine from "pages/routines/[id]";
 
export const Landing = () => {
  return (
    <Container maxW="container.lg">
      <HeroSection />
      <JourneyHighlights />
      <CompanionsHighlights />
      <BackpackHighlights />
      <RoutinesSection />
      <Differentiators />
      <InspirationPane />
      <InterestForm />
    </Container>
  );
}

