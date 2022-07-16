import { JourneySteps } from "./Steps";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";
import { FourthStep } from "./FourthStep";
import { FifthStep } from "./FifthStep";

import { JourneyOnboardingConsumer, JourneyOnboardingProvider } from "../providers/JourneyOnboardingProvider";

export const NewJourney = () => {
    return (
        <JourneyOnboardingProvider>
            <JourneyOnboardingConsumer>
                {
                    value => (
                        <>
                            {value.currentStep.id === 1 ? <FirstStep /> : null}
                            {value.currentStep.id === 2 ? <SecondStep /> : null}
                            {value.currentStep.id === 3 ? <ThirdStep /> : null}
                            {value.currentStep.id === 4 ? <FourthStep /> : null}
                            {value.currentStep.id === 5 ? <FifthStep /> : null}
                            <JourneySteps steps={value.steps} />
                        </>
                    )
                }
            </JourneyOnboardingConsumer>
        </JourneyOnboardingProvider>
    );
}