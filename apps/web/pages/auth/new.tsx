import { Flex, Text, Heading, Avatar } from "@chakra-ui/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

export default function NewUser(props) {
  return (
    <Flex justifyContent="space-between" width="100%" gap={8}>
      <Flex gap={2} alignItems="center">
        <Avatar src={props.user.image} />
        <Heading size="md">Welcome, {props.user.name}</Heading>
      </Flex>
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
        id,
        email,
        name,
        bio,
        image,
      },
    },
  };
}
