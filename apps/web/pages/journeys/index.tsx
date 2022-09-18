import { Flex, Text, Heading, Stack } from "@chakra-ui/react";
import { JourneyCard } from "../../Journeys/components/JourneyCard";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useFetch } from "../../hooks/useSwr";
import { JourneyBluePrint } from "../../Journeys/components/JourneyBluePrint";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { InstructorCard } from "../../Journeys/components/InstructorCard";
import { MyJourneys } from "../../Journeys/components/MyJourneys";
import { FeaturedMentors } from "Journeys/components/FeaturedMentors";
import { RecommendJourneys } from "Journeys/components/RecommendedJourneys";
import { ListRoutines } from "../../Routines/ListRoutines";

export default function Index(props) {
  const { data: routines, isLoading, isError } = useFetch(`/routines/cl7zrw659000810btyaacqm54/list`);
  return (
    <>
      <Stack
        justifyContent="space-between"
        width="100%"
        gap={8}
        color="brand.primaryText"
        py="4"
      >
        <Flex justifyContent="space-between" alignItems="center" gap={8}>
          <Stack flex="2">
            <Heading size="md">Journeys</Heading>
            <Text>The key to managing your time is performing the right habits everyday. These habits will improve your life and help you optimize it to reach your goals.</Text>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const { id, email, name, image, bio } = session?.user || {};

  return {
    props: {
      user: {
        id: id || null,
        email: email || null,
        name: name || null,
        bio: bio || null,
        image: image || null,
      },
    },
  };
}
