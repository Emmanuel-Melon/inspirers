import {
  Flex,
  Heading,
  VStack,
  Text,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { Input } from "ui/Input";
import { Button } from "ui";
import { UserObject } from "types/User";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { FiFacebook, FiGithub, FiMail, FiUser } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";

type AuthFormProps = {
  mode: "login" | "signup";
  toggleMode: any;
  providers: any;
};

const GetIcon = (providerName: string) => {
  if (providerName === "Facebook") {
    return <FiFacebook />;
  }
  if (providerName === "GitHub") {
    return <FiGithub />;
  }
  if (providerName === "Google") {
    return <AiOutlineGoogle />;
  }
};

const getProviderStyles = (provider: string) => {
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

export const AuthForm = ({ mode, toggleMode, providers }: AuthFormProps) => {
  const router = useRouter();
  const [user, setUser] = useState<UserObject>({
    login: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((currentState) => {
      return {
        ...currentState,
        [name]: value,
      };
    });
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    if (mode === "login") {
      setIsLoading(true);

      signIn("email", { email: user.login })
        .then((res) => {

        })
        .catch((err) => {
  
        });
      /**
             * const account = await client.post("/users/login", {
                email: user.login || null,
                password: user.password
            });
             */
      setIsLoading(false);

      router.push("/");
    } else {
      signIn("email", {
        email: user.login,
        redirect: false,
        password: user.password,
      });
      /**
             * client.post("users", {
                ...user,
                email: user.login || null,
                password: user.password
            });
             */
    }
  };

  return (
    <VStack gap={2} width="420px">
      <Heading as="h1" size="lg" color="brand.primary" textAlign="center">
        Inspirers
      </Heading>
      <Text textAlign="center">
        Inspirers is a community of individuals who share a love for inspiring
        and empowering others.
      </Text>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        bg="#fff"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        borderRadius="0.5rem"
        borderTop="solid 0.5rem"
        borderColor="brand.primary"
      >
        <Flex as="form" direction="column" gap={4} p="8">
          <VStack
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
                value={user.login}
                name="login"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={onChange}
                placeholder="Must be 8 characters"
                type="password"
                value={user.password}
                name="password"
              />
            </FormControl>

            <Text>Trouble signing in? Try SSO</Text>

            <Button
              icon={<FiUser />}
              onClick={handleClick}
              width="350px"
              isLoading={isLoading}
            >
              {mode.toLocaleUpperCase()}
            </Button>
          </VStack>
        </Flex>
        <Flex
          direction="column"
          gap={4}
          bg="brand.highlight2"
          width="100%"
          borderRadius="0rem 0rem 1rem 1rem"
          p="8"
        >
          <Heading as="h3" size="sm" color="brand.primaryText">
            Or sign in with
          </Heading>
          <Flex gap={4} direction="column">
            {providers &&
              Object.values(providers).map((provider) => {
                const style = getProviderStyles(provider?.name);
                return (
                  <Button
                    bg={style?.bg || "brand.white"}
                    color={style?.color || "brand.white"}
                    icon={GetIcon(provider.name)}
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
                    {provider.name}
                  </Button>
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
      </Flex>
      <Text textAlign="center">
        By clicking Signup, you agree to our terms and conditions.
      </Text>
    </VStack>
  );
};
