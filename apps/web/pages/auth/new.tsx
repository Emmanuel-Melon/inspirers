import { Flex, Text, Heading, Avatar } from "@chakra-ui/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

/**
 * 
export default function NewUserPage() {
  if (typeof window !== "undefined") {
    window.location.assign(process.env.NEXT_PUBLIC_WEBAPP_URL || "https://app.cal.com");
  }
  return null;
}

 */
export default function NewUser(props) {
  return (
    <Flex width="100%" gap={8}>
      <Flex gap={2} alignItems="center">
        <Avatar src={props.user.image} />
        <Heading size="md">Welcome, {props.user.name}</Heading>
      </Flex>
      <Text>Set a username</Text>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const { id, email, name, bio, image } = session?.user;


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
