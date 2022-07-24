import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { JourneyOverviewCard } from "./components/JourneyOverviewCard";
import { OutlineOverview } from "./Overview/OutlineView";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

const journey = {
  id: "cl5o8pq8t0070fgbt5eqar9ba",
  title: "Getting Into Harvard",
  chapters: [
    {
      id: "cl5o8pq8t0070fgbt5eqar9ba",
      title: "Introduction",
      subChapters: [
        {
          id: "cl5o8pq8t0070fgbt5eqar9bb",
          title: "Goals"
        },
        {
          id: "cl5o8pq8t0070fgbt5eqar9bc",
          title: "Resources and Companions"
        }
      ]
    },
    {
      id: "cl5o8pq8t0070fgbt5eqar9bb",
      title: "Writing an Essay",
      subChapters: []
    },
    {
      id: "cl5o8pq8t0070fgbt5eqar9bc",
      title: "SAT Preparation",
      subChapters: [
        {
          id: "cl5o8pq8t0070fgbt5eqar9bb",
          title: "Algebra 1"
        },
        {
          id: "cl5o8pq8t0070fgbt5eqar9bc",
          title: "English"
        },
        {
          id: "cl5o8pq8t0070fgbt5eqar9bd",
          title: "AP Physics"
        }
      ]
    }
  ]
}

export default function Journey(props) {

  const [started, setStarted] = useState<boolean>(false);

  return (
    <Flex width="100%" gap={8} direction="column">
      {
        started ? <JourneyOverviewCard /> : null
      }
      <OutlineOverview journey={journey} user={props.user} />
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