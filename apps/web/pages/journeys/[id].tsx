import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { JourneyOverviewCard } from "./components/JourneyOverviewCard";
import { OutlineOverview } from "./Overview/OutlineView";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useSwr";
import { PersonalJourney } from "./components/personal";
import { JourneyEditor } from "./components/editor";

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
          title: "Goals",
        },
        {
          id: "cl5o8pq8t0070fgbt5eqar9bc",
          title: "Resources and Companions",
        },
      ],
    },
    {
      id: "cl5o8pq8t0070fgbt5eqar9bb",
      title: "Writing an Essay",
      subChapters: [],
    },
    {
      id: "cl5o8pq8t0070fgbt5eqar9bc",
      title: "SAT Preparation",
      subChapters: [
        {
          id: "cl5o8pq8t0070fgbt5eqar9bk",
          title: "Algebra 1",
        },
        {
          id: "cl5o8pq8t0070fgbt5eqar9bl",
          title: "English",
        },
        {
          id: "cl5o8pq8t0070fgbt5eqar9bm",
          title: "AP Physics",
        },
      ],
    },
  ],
};

export default function Journey(props) {
  const router = useRouter();

  const [started, _setStarted] = useState<boolean>(false);
  const { data, isLoading, isError } = useFetch(`${router.asPath}`);

  if (router.isFallback) {
    return <Text color="brand.primary">Processing Request</Text>;
  }

  if (isError) {
    return <p>Done</p>;
  }

  if (data?.data?.user?.id === "cl5ubrlsj0911srbtwhibuim9") {
    return <PersonalJourney journey={data?.data} />;
  }

  return (
    <Flex width="100%" gap={8} direction="column" height="100%">
      <Flex>{started ? <JourneyOverviewCard /> : null}</Flex>

      {!isLoading ? (
        <JourneyEditor journey={data?.data} />
      ) : (
        <p>Loading</p>
      )}
    </Flex>
  );
}

export async function getStaticPaths({ params }) {
  console.log(params);
  return { paths: [], fallback: true };
}

export async function getStaticProps(context) {
  console.log(context);
  // read the posts dir from the fs
  return { props: { journey: {} } };
}

/**
 * 
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
 */
