import { Flex, Text, Heading, VStack } from "@chakra-ui/react";
import { UserProfileCard } from "./components/UserProfileCard";
import { UserBasicInfo } from "./components/UserBasicInfo";
import { UserBioCard } from "./components/UserBioCard";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { ProfileSectionsTab } from "./components/ProfileSectionsTab";

export default function UserProfile(props) {
  return (
    <Flex width="100%" gap={8} height="100%">
      <VStack alignItems="flex-start" width="35%">
        <UserProfileCard user={props.user} />
        <UserBasicInfo user={props.user} />
        <UserBioCard user={props.user} />
      </VStack>
      <ProfileSectionsTab user={props.user} />
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
