import Layout from "../layout/layout";
import { AuthForm } from "../Auth/AuthForm";
import type { NextPage } from "next";
import { getProviders, signIn, useSession } from "next-auth/react";

const Auth: NextPage = ({ providers }: any) => {
  console.log(providers);
  return (
    <Layout>
      <AuthForm />
    </Layout>
  );
}


export default Auth;