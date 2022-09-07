import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
import { UserProfileCard } from "../../User/components/UserProfileCard";
import { UserBasicInfo } from "../../User/components/UserBasicInfo";
import { UserBioCard } from "../../User/components/UserBioCard";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { ProfileSectionsTab } from "../../User/components/ProfileSectionsTab";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useSwr";

export default function UserProfile(props) {
  const router = useRouter();
  console.log(router.asPath);
  const { data, isLoading, isError } = useFetch(`/users/${props.user.id}`) || {};
  console.log(data);
  return (
    <Flex width="100%" gap={8} height="100%">
      <VStack alignItems="flex-start" width="35%">
        <UserProfileCard user={data?.data} />
        <UserBasicInfo user={data?.data} />
        <UserBioCard user={data?.data} />
      </VStack>
      <ProfileSectionsTab user={data?.data} />
    </Flex>
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
