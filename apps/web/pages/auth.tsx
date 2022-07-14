import { useRouter } from 'next/router'
import { AuthForm } from "../Auth/AuthForm";
import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getProviders, useSession } from "next-auth/react";

const Auth: NextPage = (props) => {
  const [mode, setMode] = useState<string>("signup");
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push('/');
    }
  }, [session, router]);

  function toggleMode () {
    setMode(currentState => {
      if(currentState === "login") {
        return "signup";
      } else {
        return "login";
      }
    })
  }
  return (
    <Flex  p="8" justifyContent="center" alignItems="center" gap={8}>
      <AuthForm mode={mode} toggleMode={toggleMode} providers={props.providers} />
    </Flex>
  );
}

Auth.authPage = true;

export async function getServerSideProps(_context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default Auth;