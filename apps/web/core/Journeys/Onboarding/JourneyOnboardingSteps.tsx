import { JourneySourceSelector, JourneySourceSelectorGuide } from "./JourneySourceSelector";
import { JourneyInfo, JourneyInfoGuide } from "./JourneyInfo";
import { JourneyGoals, JourneyGoalsGuide } from "./JourneyGoals";
import { Flex, Stack } from "@chakra-ui/react";
import {
  JourneyOnboardingConsumer,
  JourneyOnboardingProvider,
} from "providers/JourneyOnboardingProvider";

export const JourneyOnboardingSteps = () => {


  return (
    <JourneyOnboardingProvider>
      <JourneyOnboardingConsumer>
        {(value) => (
          <Flex width="100%" gap={4}>
            <Stack flex="2">
              {value.currentStep.id === 1 ? <JourneySourceSelector /> : null}
              {value.currentStep.id === 2 ? <JourneyInfo /> : null}
              {value.currentStep.id === 3 ? <JourneyGoals /> : null}
            </Stack>
            <Flex gap={4} flex="1">
              {value.currentStep.id === 1 ? (
                <JourneySourceSelectorGuide guide={value.currentStep} />
              ) : null}
              {value.currentStep.id === 2 ? (
                <JourneyInfoGuide guide={value.currentStep} />
              ) : null}
              {value.currentStep.id === 3 ? (
                <JourneyGoalsGuide guide={value.currentStep} />
              ) : null}
            </Flex>
          </Flex>
        )}
      </JourneyOnboardingConsumer>
    </JourneyOnboardingProvider>
  );
};

/**
 *   const handleNext = () => {
    if (context.journey.title === "") {
      setLoading(true);
      client
        .post("/journeys", {
          blueprint: context.blueprint,
          title: journey.title,
          userId: "user.id",
          journeyType: journey.journeyType,
          active: true,
        })
        .then((res) => {
          setLoading(false);
          successToast("Created journey");
          context.updateJourney(res.data.data);
          context.moveForward(context.currentStep.id + 1, res.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
          errorToast("something went wrong, try again later");
        });
    } else {
      context.moveForward(context.currentStep.id + 1, {});
    }
  };
 */