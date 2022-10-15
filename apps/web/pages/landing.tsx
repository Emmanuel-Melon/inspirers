import {
  Flex,
  Text,
  Heading,
  Box,
  Stack,
  Spacer,
  Button,
  ButtonGroup,
  Container,
  useMediaQuery,
  Image,
  useColorMode,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
// import Image from "next/image";
// import { Button } from "ui";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const benefits = [
  {
    id: 1,
    heading: "Structure",
    description:
      "Got a question? Our team is here to help you from Monday to Friday, 9:00 AM to 7:00 PM Central European Time.",
    subHeading: "Structure",
  },
  {
    id: 2,
    heading: "Hello, World",
    description:
      "Got a question? Our team is here to help you from Monday to Friday, 9:00 AM to 7:00 PM Central European Time.",
    subHeading: "Mentorship",
  },
  {
    id: 3,
    heading: "Hello, World",
    description:
      "Got a question? Our team is here to help you from Monday to Friday, 9:00 AM to 7:00 PM Central European Time.",
    subHeading: "Support",
  },
  {
    id: 4,
    heading: "Hello, World",
    description:
      "Got a question? Our team is here to help you from Monday to Friday, 9:00 AM to 7:00 PM Central European Time.",
    subHeading: "Opportunities",
  },
  {
    id: 5,
    heading: "Hello, World",
    description:
      "Got a question? Our team is here to help you from Monday to Friday, 9:00 AM to 7:00 PM Central European Time.",
    subHeading: "Recognition",
  },
  {
    id: 6,
    heading: "Hello, World",
    description:
      "Got a question? Our team is here to help you from Monday to Friday, 9:00 AM to 7:00 PM Central European Time.",
    subHeading: "Customization",
  },
];

const process = [
  {
    id: 1,
    heading: "Hello, World",
    description:
      "Got a question? Our team is here to help you from Monday to Friday, 9:00 AM to 7:00 PM Central European Time.",
    subHeading: "Lorem Ipsum",
  },
  {
    id: 2,
    heading: "Hello, World",
    description:
      "Got a question? Our team is here to help you from Monday to Friday, 9:00 AM to 7:00 PM Central European Time.",
    subHeading: "Lorem Ipsum",
  },
  {
    id: 3,
    heading: "Hello, World",
    description:
      "Got a question? Our team is here to help you from Monday to Friday, 9:00 AM to 7:00 PM Central European Time.",
    subHeading: "Lorem Ipsum",
  },
];

const Header = () => {
  const bgValue = useColorModeValue("white", "black");
  const textColorValue = useColorModeValue("black", "white");
  const [Tablet, Desktop] = useMediaQuery([
    "(min-width: 550px)",
    "(min-width: 800px)",
  ]);
  return Desktop ? (
    <Flex px="2rem" mt={2} mb={0} py="1rem" align="center">
      <Flex gap="1rem">
        <Image
          src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1665847774/Rocket.svg"
          alt="icon"
        ></Image>
        <Spacer />
        <Heading display="block" fontFamily="logo">
          Inspirers
        </Heading>
      </Flex>

      <Spacer />
      <Flex gap={8}>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          colorScheme="inherit"
          variant="link"
        >
          Demo
        </Button>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          colorScheme="inherit"
          variant="link"
        >
          Journeys
        </Button>
        <Example />
      </Flex>
    </Flex>
  ) : Tablet ? (
    <Flex px="2rem" mt={2} mb={5} py="1rem" align="center">
      <Flex gap="1rem">
        <Image
          src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1665847774/Rocket.svg"
          alt="icon"
        ></Image>
        <Spacer />
        <Heading display="block">Inspirers</Heading>
      </Flex>
      <Example />
      <Spacer />
      <Flex gap={8}>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          colorScheme="inherit"
          variant="link"
        >
          Demo
        </Button>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          colorScheme="inherit"
          variant="link"
        >
          Journeys
        </Button>
      </Flex>
    </Flex>
  ) : (
    <Flex px="2rem" mt={2} mb={5} py="1rem" align="center">
      <Flex gap="1rem">
        <Image
          src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1665847774/Rocket.svg"
          alt="icon"
        ></Image>
        <Spacer />
        <Heading display="block">Inspirers</Heading>
      </Flex>
      <Spacer />
      <Flex gap={8}>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          colorScheme="inherit"
          variant="link"
        >
          Demo
        </Button>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          colorScheme="inherit"
          variant="link"
        >
          Journeys
        </Button>
        <Example />
      </Flex>
    </Flex>
  );
};
function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColorValue = useColorModeValue("black", "white");

  return (
    <header>
      <Button
        onClick={toggleColorMode}
        display="block"
        _active={{ color: "#a9711a" }}
        colorScheme="inherit"
        variant="link"
      >
        <Icon as={colorMode === "light" ? MoonIcon : SunIcon} />
      </Button>
    </header>
  );
}

const BodyImg = () => {
  const [Tablet, Desktop] = useMediaQuery([
    "(min-width: 550px)",
    "(min-width: 800px)",
  ]);
  return Desktop ? (
    <Container w={600}>
      <Image
        objectFit="contain"
        w={900}
        h={500}
        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1665846497/Hero-illustrationNew.png"
        alt="Inspirers"
      />
    </Container>
  ) : Tablet ? (
    <Container minW={400} display="inline-block" align="center">
      <Image
        objectFit="contain"
        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1665845696/Hero-illustration-new.png"
        alt="Inspirers"
      />
    </Container>
  ) : (
    <Container m={0} p={0} w="100%" align="center">
      <Image
        objectFit="contain"
        m={0}
        p={0}
        w="100%"
        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1665846507/Illustration_Mobile.svg"
        alt="Inspirers"
      />
    </Container>
  );
};

const BodyTxt = (props) => {
  const [Tablet, Desktop] = useMediaQuery([
    "(min-width: 550px)",
    "(min-width: 800px)",
  ]);
  const textColorValue = useColorModeValue("black", "black");

  return Desktop ? (
    <Stack maxW="100%" align="center">
      <Flex maxW={2000} align="center">
        <BodyImg />
        <Stack>
          <Container align="center">
            <Heading textOverflow="none" minW={200} as="h1" fontSize="40px">
              <b>Became achiever</b>{" "}
            </Heading>
            <Heading as="h2" fontSize="30px" mb={4} size="2xl">
              <b>not just a dreamer</b>
            </Heading>
            <Text align="left" maxW={260} mb={4}>
              Whether you're looking to build a business or grow your career or
              just live life to the fullest, Inspirers is here to help.
            </Text>
            <Button
              _hover={{ bg: "#bbe192" }}
              _active={{ color: "#a9711a", bg: "#bbe192" }}
              w={200}
              bg="#D1FEB5"
              color={textColorValue}
              m={4}
            >
              <b>Get Inspired</b>
            </Button>
          </Container>
        </Stack>
      </Flex>
    </Stack>
  ) : Tablet ? (
    <Stack align="center">
      <Heading as="h1" fontSize="70px">
        <b>Became achiever</b>{" "}
      </Heading>
      <Heading m={0} as="h2" fontSize="48px">
        <b>not just a dreamer</b>
      </Heading>
      <Flex mr={10} align="center">
        <BodyImg />
        <Stack>
          <Text align="left" maxW={350} mb={4} fontSize="18px">
            Inspirers is a unique community to help you reach your goals, change
            your habits, share your journey with other peers and master the art
            of success.
          </Text>
          <Button
            _hover={{ bg: "#bbe192" }}
            _active={{ color: "#a9711a", bg: "#bbe192" }}
            w={200}
            bg="#D1FEB5"
            color={textColorValue}
            m={4}
          >
            <b>Get Inspired</b>
          </Button>
        </Stack>
      </Flex>
    </Stack>
  ) : (
    <Stack align="center">
      <Heading as="h1" fontSize="32px">
        <b>Became achiever</b>{" "}
      </Heading>
      <Heading as="h2" fontSize="20px" mb={8} size="2xl">
        <b>not just a dreamer</b>
      </Heading>
      <Text align="left" maxW={260} fontSize="16px">
        Inspirers is a unique community to help you reach your goals, change
        your habits, share your journey with other peers and master the art of
        success.
      </Text>
      <BodyImg />
      <Button
        _hover={{ bg: "#bbe192" }}
        _active={{ color: "#a9711a", bg: "#bbe192" }}
        w={200}
        bg="#D1FEB5"
        color={textColorValue}
        mb={40}
      >
        <b>Get Inspired</b>
      </Button>
    </Stack>
  );
};

const Body = () => {
  const [Tablet, Desktop] = useMediaQuery([
    "(min-width: 550px)",
    "(min-width: 800px)",
  ]);
  return Desktop ? (
    <BodyTxt />
  ) : Tablet ? (
    <Flex gap="1rem" align="center" justify="center">
      <BodyTxt />
    </Flex>
  ) : (
    <BodyTxt />
  );
};

export default function Landing() {
  return (
    <Stack>
      <Header />
      <Body />
    </Stack>
  );
}

Landing.publicPage = true;
