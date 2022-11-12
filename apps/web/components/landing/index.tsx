import { VStack } from "@chakra-ui/react";
import { InterestForm } from "./InterestForm";
import { LandingPageHero } from "./LandingPageHero";
import { InspirationPane } from "./InspirationPane";
import { JourneyHighlights } from "./JourneyHighlights";
import { Differentiators } from "./Differentiators";
import { CompanionsHighlights } from "./CompanionsHighlights";
import { BackpackHighlights } from "./BackpackHighlights";
 
export const Landing = () => {
  return (
    <VStack height="100vh" overflowY="scroll">
      <LandingPageHero />
      <JourneyHighlights />
      <CompanionsHighlights />
      <BackpackHighlights />
      <Differentiators />
      <InspirationPane />
      <InterestForm />
    </VStack>
  );
}

