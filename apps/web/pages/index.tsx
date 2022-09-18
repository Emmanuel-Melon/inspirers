import { Stack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { Insights } from "../Journeys/components/Insights";
import { Timeline } from "../Journeys/components/Timeline";
import { JourneyOverviewCard } from "../Journeys/components/JourneyOverviewCard";
import { Milestones } from "../Journeys/components/Milestones";
import { Activities } from "../Journeys/components/Acitivites";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index(props) {
  // When rendering client side don't display anything until loading is complete
  const router = useRouter();

  function getStarted() {
    router.push("/journeys/new");
  }
  return (
    <Stack width="100%" gap={4}>
      <JourneyOverviewCard user={props.user} getStarted={getStarted} />
      <Timeline events={[]} />
    </Stack>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const { id, email, name, image, bio } = session?.user || {};

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
