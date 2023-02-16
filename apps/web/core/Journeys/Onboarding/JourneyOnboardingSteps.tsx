import { JourneySourceSelector, JourneySourceSelectorGuide } from "./JourneySourceSelector";
import { JourneyInfo, JourneyInfoGuide } from "./JourneyInfo";
import { BackpackStep, BackpackStepGuide } from "./BackpackStep";
import { RoutinesStep } from "./RoutinesStep";
import { CompanionsStep } from "./CompanionsStep";
import { Stack, Grid, GridItem } from "@chakra-ui/react";
import {
  JourneyOnboardingConsumer,
  JourneyOnboardingProvider,
} from "providers/JourneyOnboardingProvider";

export const JourneyOnboardingSteps = () => {
  return (
    <JourneyOnboardingProvider>
      <JourneyOnboardingConsumer>
        {(value) => (
          <Grid width="100%" gap={4}>
            <GridItem colSpan={2}>
              {value.currentStep.id === 1 ? <JourneySourceSelector /> : null}
              {value.currentStep.id === 2 ? <JourneyInfo /> : null}
              {value.currentStep.id === 3 ? <BackpackStep /> : null}
              {value.currentStep.id === 4 ? <RoutinesStep /> : null}
              {value.currentStep.id === 5 ? <CompanionsStep /> : null}
            </GridItem>
          </Grid>
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