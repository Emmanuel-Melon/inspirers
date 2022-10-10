import { useState } from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { JourneyOverviewCard } from "../../Journeys/components/JourneyOverviewCard";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useSwr";
import { PersonalJourney } from "../../Journeys/components/personal";
import { JourneyEditor } from "../../Journeys/components/editor";
import { Card, Spinner } from "ui";
import { ListRoutines } from "Routines/ListRoutines";

// use roles!
export default function Journey(props) {
  const router = useRouter();

  const [started, _setStarted] = useState<boolean>(false);
  const { data: journey, isLoading, isError } = useFetch(`${router.asPath}`);
  const { data: routines } = useFetch(`/routines/${props.user?.id}/list`);

  // list goals here!
  // list resources here!
  // when you click on a goal, it should open up the goal editor
  // goal editor should have a list of resources
  // goal editor should allow you to add routines
  // goal editor should allow you to add resources
  // goal editor should allow you to add a task
  // show journey overview
  // show routine stats
  // show all reflections

  if (router.isFallback) {
    return <Text color="brand.primary">Processing Request</Text>;
  }

  if (isError) {
    return <Text>An error has occured</Text>;
  }

  if (journey?.userId === props.user?.id) {
    return (
      <Stack gap={4} width="100%">
        <JourneyOverviewCard user={props.user} journey={journey} />
        <Flex gap={8}>
          <Flex gap={4} flex="2" overflowX="scroll">
          <Flex gap={4}>
            <Card>
              <Text>33 Days</Text>
            </Card>
            <Card>
              <Text>33 Days</Text>
            </Card>
            <Card>
              <Text>33 Days</Text>
            </Card>
            <Card>
              <Text>33 Days</Text>
            </Card>
          </Flex>
          </Flex>
          <Stack flex="1">
            <PersonalJourney journey={journey} />
          </Stack>
        </Flex>
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
