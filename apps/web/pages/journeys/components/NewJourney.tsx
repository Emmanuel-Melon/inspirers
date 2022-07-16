import { JourneySteps } from "./Steps";
import { FirstStep, FirstStepGuide } from "./FirstStep";
import { SecondStep, SecondStepGuide } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";
import { FourthStep } from "./FourthStep";
import { FifthStep } from "./FifthStep";
import {
    Flex,
    Text
} from "@chakra-ui/react";
import { JourneyOnboardingConsumer, JourneyOnboardingProvider } from "../../../providers/JourneyOnboardingProvider";

export const NewJourney = () => {
    return (
        <JourneyOnboardingProvider>
            <JourneyOnboardingConsumer>
                {
                    value => (
                        <Flex width="100%" gap={4}>
                            <Flex width="35%" direction="column">
                                {value.currentStep.id === 1 ? <FirstStepGuide guide={value.currentStep} /> : null}
                                {value.currentStep.id === 2 ? <SecondStepGuide guide={value.currentStep} /> : null}
                                {value.currentStep.id === 3 ? <SecondStepGuide guide={value.currentStep} /> : null}
                                <JourneySteps steps={value.steps} />
                            </Flex>
                            <Flex
                                direction="column"
                                width="65%" 
                            >
                                
                                <Flex>
                                    {value.currentStep.id === 1 ? <FirstStep /> : null}
                                    {value.currentStep.id === 2 ? <SecondStep /> : null}
                                    {value.currentStep.id === 3 ? <ThirdStep /> : null}
                                    {value.currentStep.id === 4 ? <FourthStep /> : null}
                                    {value.currentStep.id === 5 ? <FifthStep /> : null}
                                </Flex>
                                
                            </Flex>
                        </Flex>
                    )
                }
            </JourneyOnboardingConsumer>
        </JourneyOnboardingProvider>
    );
}

