import { IdentityProvider } from "@prisma/client/";
import { GetStaticProps, GetStaticPropsContext, NextApiRequest } from 'next';
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

export const identityProviderNameMap: { [key in IdentityProvider]: string } = {
  [IdentityProvider.GITHUB]: "Github",
  [IdentityProvider.GOOGLE]: "Google",
};

export const redirectUnauthorized = async (context: GetStaticPropsContext) => {
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