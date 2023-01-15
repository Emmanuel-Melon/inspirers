import { JourneyOnboardingSteps } from "core/Journeys/Onboarding/JourneyOnboardingSteps";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";

export default function NewJourneyPage(props: any) {
  return <JourneyOnboardingSteps />;
}


