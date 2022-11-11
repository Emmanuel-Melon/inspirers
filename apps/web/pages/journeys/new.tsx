import { JourneyOnboardingSteps } from "../../core/Journeys/Onboarding/JourneyOnboardingSteps";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default function NewJourneyPage(props) {
  return <JourneyOnboardingSteps user={props.user} />;
}

export async function getServerSideProps(context) {
  const { session, user } = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const { email, name, image, bio } = session?.user || {};
  const { id } = user || {};

  return {
    props: {
      user: {
        id: id || null,
        email: email || null,
        name: name || null,
        bio: bio || null,
        image: image || null,
      },
    },
  };
}
