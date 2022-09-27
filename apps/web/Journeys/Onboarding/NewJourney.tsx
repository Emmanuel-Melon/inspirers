import { FirstStep, FirstStepGuide } from "./JourneyType";
import { SecondStep, SecondStepGuide } from "./JourneyInfo";
import { ThirdStep, ThirdStepGuide } from "./JourneyGoals";
import { Flex, Stack } from "@chakra-ui/react";
import {
  JourneyOnboardingConsumer,
  JourneyOnboardingProvider,
} from "../../providers/JourneyOnboardingProvider";

// use this template https://dribbble.com/shots/18615057-Scheduling-tool
export const NewJourney = ({ user }) => {
  return (
    <JourneyOnboardingProvider>
      <JourneyOnboardingConsumer>
        {(value) => (
          <Flex width="100%" gap={4} height="100%">
            <Flex gap={4} width="35%">
              {value.currentStep.id === 1 ? (
                <FirstStepGuide user={user} guide={value.currentStep} />
              ) : null}
              {value.currentStep.id === 2 ? (
                <SecondStepGuide user={user} guide={value.currentStep} />
              ) : null}
              {value.currentStep.id === 3 ? (
                <ThirdStepGuide user={user} guide={value.currentStep} />
              ) : null}
            </Flex>
            <Stack width="45%">
                {value.currentStep.id === 1 ? <FirstStep user={user} /> : null}
                {value.currentStep.id === 2 ? <SecondStep user={user} /> : null}
                {value.currentStep.id === 3 ? <ThirdStep user={user} /> : null}
            </Stack>
          </Flex>
        )}
      </JourneyOnboardingConsumer>
    </JourneyOnboardingProvider>
  );
};
