import React, { useCallback, useState } from "react";
import {
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Button, Card, Input } from "ui";
import { User } from "types/User";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { FiUser } from "react-icons/fi";
import { FiFacebook, FiGithub, FiMail } from "react-icons/fi";


export const getProviderStyles = (provider: string) => {
  if (provider === "GitHub") {
    return {
      bg: "#000",
      color: "#fff",
    };
  }
  if (provider === "Google") {
    return {
      bg: "#fff",
      color: "#333",
    };
  }
  if (provider === "Facebook") {
    return {
      bg: "#4267B2",
      color: "#fff",
    };
  }
};

export const GetProviderIcon = (providerName: string) => {
  if (providerName === "Facebook") {
    return <FiFacebook />;
  }
  if (providerName === "GitHub") {
    return <FiGithub />;
  }
  if (providerName === "Google") {
    return <FiMail />;
  }
};

type AuthFormProps = {
  mode: "login" | "signup";
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>;
};

export const AuthForm = ({ mode, providers }: AuthFormProps) => {
  const router = useRouter();
  const [authState, setAuthState] = useState<Pick<User, "login" | "password">>({
    login: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthState((currentState) => {
      return {
        ...currentState,
        [name]: value,
      };
    });
  }, []);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (mode === "login") {
      setIsLoading(true);
      signIn("credentials", { email: authState.login, password: authState.password })
        .then((res) => {
          setIsLoading(false);
          router.push("/");
        })
        .catch((err) => {

        });
    } else {
      signIn("credentials", {
        email: authState.login,
        redirect: false,
        password: authState.password,
      });
    }
  };

  return (
    <Box width="420px">
      <Card>
        <Stack>
          <Flex as="form" direction="column" gap={4} p="4">
            <Stack
              width="100%"
              gap={2}
              alignItems="flex-start"
              color="brand.primaryText"
            >
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={onChange}
                  placeholder="e.g name@domain.com"
                  type="text"
                  value={authState.login}
                  name="login"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={onChange}
                  placeholder="Must be 8 characters"
                  type="password"
                  value={authState.password}
                  name="password"
                />
              </FormControl>

              <Button
                icon={<FiUser />}
                onClick={handleClick}
                width="350px"
                isLoading={isLoading}
              >
                {mode.toLocaleUpperCase()}
              </Button>
            </Stack>
          </Flex>
          <Flex
            direction="column"
            gap={4}
            bg="brand.highlight1"
            width="100%"
            borderRadius="0rem 0rem 1rem 1rem"
            p="4"
          >
            <Heading as="h3" size="sm" color="brand.primaryText">
              Or sign in with
            </Heading>
            <Flex gap={4} direction="column">
              {providers &&
                Object.values(providers).map((provider, index) => {
                  const style = getProviderStyles(provider?.name);
                  return (
                    <>
                      {provider?.name !== "Credentials" && (<Button
                        bg={style?.bg || "brand.white"}
                        color={style?.color || "brand.white"}
                        icon={GetProviderIcon(provider?.name)}
                        key={`${index}-${provider?.name}`}
                        border={
                          provider?.name === "Google"
                            ? "solid 0.10rem #000"
                            : "none"
                        }
                        onClick={() =>
                          signIn(provider?.id)
                            .then((res) => {
                              console.log(res);
                            })
                            .catch((err) => {
                              console.log(err);
                            })
                        }
                      >
                        {provider?.name}
                      </Button>)}
                    </>
                  );
                })}
            </Flex>
            <Text>
              Have an account?{" "}
              <Box as="span" fontWeight="700" color="brand.primary">
                Register Now
              </Box>
            </Text>
          </Flex>
          <Text textAlign="center">
            By clicking Signup, you agree to our terms and conditions.
          </Text>
        </Stack>
      </Card>
    </Box>
  );
};
