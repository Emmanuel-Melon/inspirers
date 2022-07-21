import { Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { Insights } from "./journeys/components/Insights";
import { Timeline } from "./journeys/components/Timeline";
import { JourneyOverviewCard } from "./journeys/components/JourneyOverviewCard";
import { Milestones } from "./journeys/components/Milestones";
import { Activities } from "./journeys/components/Acitivites";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { useRouter } from "next/router";


export default function Index(props) {
  // When rendering client side don't display anything until loading is complete

  return (
    <Flex direction="column" gap={4} my="8">
      <JourneyOverviewCard user={props.user} />
      <Flex >
        <Flex width="60%" direction="column" gap={4} marginRight={8}>
          <Insights insights={[]} />
          <Timeline />
        </Flex>
        <Flex width="40%" direction="column" gap={4}>
          <Milestones milestones={[]} />
          <Activities activities={[]} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps(context) {
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