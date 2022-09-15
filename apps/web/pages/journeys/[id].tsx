import { useState } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import {              JourneyOverviewCard } from "../../Journeys/components/JourneyOverviewCard";
import { OutlineOverview } from "../../Journeys/Overview/OutlineView";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useSwr";
import { PersonalJourney } from "../../Journeys/components/personal";
import { JourneyEditor } from "../../Journeys/components/editor";
import { Spinner } from "ui";

export default function Journey(props) {
  const router = useRouter();

  const [started, _setStarted] = useState<boolean>(false);
  const { data: journey, isLoading, isError } = useFetch(`${router.asPath}`);

  if (router.isFallback) {
    return <Text color="brand.primary">Processing Request</Text>;
  }

  if (isError) {
    return <Text>An error has occured</Text>;
  }

  if (journey.userId === props.user?.id) {
    return (
      <Stack gap={4} width="100%">
        <JourneyOverviewCard user={props.user} journey={journey} />
        <PersonalJourney journey={journey} />
      </Stack>
    );
  }

  return (
    <Flex width="100%" gap={8} direction="column" height="100%">
      <JourneyOverviewCard user={props.user} journey={journey} />

      {!isLoading ? <JourneyEditor journey={journey} /> : <Spinner />}
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const { createdAt, ...user } = session?.user;

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user
    },
  };
}
