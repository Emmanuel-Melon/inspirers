import { Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { Insights } from "../Journey/Insights";
import { Timeline } from "../Journey/Timeline";
import { JourneyOverviewCard } from "../Journey/JourneyOverviewCard";
import { Milestones } from "../Journey/Milestones";
import { Activities } from "../Journey/Acitivites";


export default function Index(props) {
  const session = useSession();
  // When rendering client side don't display anything until loading is complete
  // if (typeof window !== "undefined" && loading) return null
  return (
    <Flex direction="column" gap={4} my="8">
      <JourneyOverviewCard user={session.data?.user} />
      <Flex >
        <Flex width="60%" direction="column" gap={4} marginRight={8}>
          <Insights />
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

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}