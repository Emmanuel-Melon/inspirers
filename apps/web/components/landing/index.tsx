import { VStack } from "@chakra-ui/react";
import { InterestForm } from "./InterestForm";
import { LandingPageHero } from "./LandingPageHero";
import { InspirationPane } from "./InspirationPane";
import { JourneyHighlights } from "./JourneyHighlights";
import { Differentiators } from "./Differentiators";
 
export const Landing = (props: any) => {
  return (
    <VStack p="8">
      <LandingPageHero />
      <JourneyHighlights />
      <Differentiators />
      <InspirationPane />
      <InterestForm />
    </VStack>
  );
}

