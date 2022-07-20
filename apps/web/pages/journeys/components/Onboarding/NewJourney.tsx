import { JourneySteps } from "./Steps";
import { FirstStep, FirstStepGuide } from "./JourneyType";
import { SecondStep, SecondStepGuide } from "./JourneyInfo";
import { ThirdStep, ThirdStepGuide } from "./JourneyGoals";
import { FourthStep, FourthStepGuide } from "./CompleteOnboarding";
import {
    Flex,
    Text
} from "@chakra-ui/react";
import { JourneyOnboardingConsumer, JourneyOnboardingProvider } from "../../../../providers/JourneyOnboardingProvider";

export const NewJourney = () => {
    return (
        <JourneyOnboardingProvider>
            <JourneyOnboardingConsumer>
                {
                    value => (
                        <Flex width="100%" gap={4} height="100%">
                            <Flex width="10%">
                                <JourneySteps steps={value.steps} />
                            </Flex>
                            <Flex gap={4} width="35%">
                                {value.currentStep.id === 1 ? <FirstStepGuide guide={value.currentStep} /> : null}
                                {value.currentStep.id === 2 ? <SecondStepGuide guide={value.currentStep} /> : null}
                                {value.currentStep.id === 3 ? <ThirdStepGuide guide={value.currentStep} /> : null}
                                {value.currentStep.id === 4 ? <FourthStepGuide guide={value.currentStep} /> : null}
                            </Flex>
                            <Flex
                                direction="column"
                                width="45%"
                            >
                                <Flex>
                                    {value.currentStep.id === 1 ? <FirstStep /> : null}
                                    {value.currentStep.id === 2 ? <SecondStep /> : null}
                                    {value.currentStep.id === 3 ? <ThirdStep /> : null}
                                    {value.currentStep.id === 4 ? <FourthStep /> : null}
                                </Flex>

                            </Flex>
                        </Flex>
                    )
                }
            </JourneyOnboardingConsumer>
        </JourneyOnboardingProvider>
    );
}

