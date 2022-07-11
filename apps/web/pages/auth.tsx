import Layout from "../layout/layout";
import { AuthForm } from "../Auth/AuthForm";
import type { NextPage } from "next";
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
  return (<AuthForm mode={mode} toggleMode={toggleMode} />);
}

Auth.authPage = true;

export default Auth;