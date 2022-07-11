import Layout from "../layout/layout";
import { AuthForm } from "../Auth/AuthForm";
import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";

const Auth: NextPage = ({ providers }: any) => {
  const [mode, setMode] = useState<string>("login");

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
    <Flex  p="8" justifyContent="center" alignItems="center" width="100%">
      <AuthForm mode={mode} toggleMode={toggleMode} />
    </Flex>
  );
}

Auth.authPage = true;

export default Auth;