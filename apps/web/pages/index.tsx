import { Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { Insights } from "./journeys/components/Insights";
import { Timeline } from "./journeys/components/Timeline";
import { JourneyOverviewCard } from "./journeys/components/JourneyOverviewCard";
import { Milestones } from "./journeys/components/Milestones";
import { Activities } from "./journeys/components/Acitivites";


export default function Index() {
  const session = useSession();
  // When rendering client side don't display anything until loading is complete
  // if (typeof window !== "undefined" && loading) return null
  return (
    <Flex direction="column" gap={4} my="8">
      <JourneyOverviewCard user={session.data?.user} />
      <Flex >
        <Flex width="60%" direction="column" gap={4} marginRight={8}>
          <Insights insights={[]} />
          <Timeline />
        </Flex>
        <Flex width="40%" direction="column" gap={4}>
          <Milestones milestones={[]}/>
          <Activities activities={[]} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  return {
    props: {
      session,
    },
  }
}