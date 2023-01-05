import { JourneyOnboardingSteps } from "../../core/Journeys/Onboarding/JourneyOnboardingSteps";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";

export default function NewJourneyPage(props: any) {
  return <JourneyOnboardingSteps user={props.user} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res } = context;
  const session = await unstable_getServerSession(req, res, authOptions);

  return {
    props: {
      user: {}
    },
  };
}

