import { Flex, Text, Heading, Stack } from "@chakra-ui/react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useFetch } from "../../hooks/useSwr";
import { JourneyCard } from "../../core/Journeys/components/JourneyCard";
import { GetServerSidePropsContext } from "next";

// Journey creation
// whole page vs modal?
// progress saving!
// can users return to a journey during creation?
// can users edit a journey during creation?
// is there a preview mode?
// can users create a journey from a template?
// can users create a journey from a goal?
// can users create a journey from a routine?
// if a user creates a journey from a goal, should the goal be added to the journey?
// use this for recommendations' feedback: https://dribbble.com/shots/15900878-Video-Branding-Editor

export default function Index(props) {
  const { data: journeys, isLoading, isError } = useFetch(`/journeys/cla6zxzxy098694btiqwmaixd/list`);
  return (
    <>
      <Stack
        justifyContent="space-between"
        width="100%"
        gap={2}
        color="brand.primaryText"
        py="4"
      >
        <Flex justifyContent="space-between" alignItems="center" gap={8}>
          <Stack flex="2">
            <Heading size="md">Journeys</Heading>
            <Text>The key to managing your time is performing the right habits everyday. These habits will improve your life and help you optimize it to reach your goals.</Text>
          </Stack>
        </Flex>
        <Stack>


        </Stack>
      </Stack>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res, query } = context;
  const session = await unstable_getServerSession(req, res, authOptions);
  const { id, email, name, image, bio } = session?.user || {};

  return {
    props: {
      user: {
        ...session?.user,
      }
    },
  };
}
