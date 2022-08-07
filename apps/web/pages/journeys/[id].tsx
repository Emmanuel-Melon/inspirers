import { useState } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { JourneyOverviewCard } from "./components/JourneyOverviewCard";
import { OutlineOverview } from "./Overview/OutlineView";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useSwr";
import { PersonalJourney } from "./components/personal";
import { JourneyEditor } from "./components/editor";



export default function Journey(props) {
  const router = useRouter();

  const [started, _setStarted] = useState<boolean>(false);
  const { data, isLoading, isError } = useFetch(`${router.asPath}`);

  if (router.isFallback) {
    return <Text color="brand.primary">Processing Request</Text>;
  }

  if (isError) {
    return <Text>An error has occured</Text>;
  }

  if (data?.data?.userId === props.user?.id) {
    return (
      <Stack gap={4} width="100%">
        <JourneyOverviewCard user={props.user} journey={data?.data} />
        <PersonalJourney journey={data?.data} />
      </Stack>
    )
  }

  return (
    <Flex width="100%" gap={8} direction="column" height="100%">
      <JourneyOverviewCard user={props.user} journey={data?.data} />

      {!isLoading ? (
        <JourneyEditor journey={data?.data} />
      ) : (
        <p>Loading</p>
      )}
    </Flex>
  );
}


export async function getServerSideProps(context) {
  const { session, user } = await unstable_getServerSession(context.req, context.res, authOptions)
  const { email, name, image, bio } = session?.user || {};
  const { id } = user || {};
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