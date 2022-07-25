import { Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { Insights } from "../Journey/components/Insights";
import { Timeline } from "../Journey/components/Timeline";
import { JourneyOverviewCard } from "../Journey/components/JourneyOverviewCard";
import { Milestones } from "../Journey/components/Milestones";
import { Activities } from "../Journey/components/Acitivites";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { useRouter } from "next/router";


export default function Index() {
  // When rendering client side don't display anything until loading is complete

  return (
    <Flex direction="column" gap={4} my="8">
      <JourneyOverviewCard />
      <Flex >
        <Flex width="60%" direction="column" gap={4} marginRight={8}>
          <Insights insights={[]} />
          <Timeline events={[]}/>
        </Flex>
        <Flex width="40%" direction="column" gap={4}>
          <Milestones milestones={[]} />
          <Activities activities={[]} />
        </Flex>
      </Flex>
    </Flex>
  );
}

/**
 * export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)
  const { id, email, name, image, bio } = session?.user || {};

  return {
    props: {
      user: {
        id: id || null,
        email: email || null,
        name: name || null,
        bio: bio || null,
        image: image || null
      }
    },
  }
}
 */