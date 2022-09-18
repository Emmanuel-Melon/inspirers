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
} from "@chakra-ui/react";
// import Image from "next/image";
// import { Button } from "ui";

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
  const [Tablet, Desktop] = useMediaQuery([
    "(min-width: 550px)",
    "(min-width: 800px)",
  ]);
  return Desktop ? (
    <Flex
      px="2rem"
      mt={2}
      mb={0}
      py="1rem"
      bg="#f4f0f0"
      align="center"
      gap="2rem"
    >
      <Heading display="block" color="#240808">
        Inspirers
      </Heading>
      <Spacer />
      <Flex gap={8}>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          color="#240808"
          variant="link"
        >
          Demo
        </Button>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          color="#240808"
          variant="link"
        >
          Journeys
        </Button>
      </Flex>
    </Flex>
  ) : Tablet ? (
    <Flex
      px="2rem"
      mt={2}
      mb={5}
      py="1rem"
      bg="#f4f0f0"
      align="center"
      gap="2rem"
    >
      <Heading display="block" color="#240808">
        Inspirers
      </Heading>
      <Spacer />
      <Flex gap={8}>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          color="#240808"
          variant="link"
        >
          Demo
        </Button>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          color="#240808"
          variant="link"
        >
          Journeys
        </Button>
      </Flex>
    </Flex>
  ) : (
    <Flex
      px="2rem"
      mt={2}
      mb={5}
      py="1rem"
      bg="#f4f0f0"
      align="center"
      gap="2rem"
    >
      <Heading display="block" color="#240808">
        Inspirers
      </Heading>
      <Spacer />
      <Flex gap={8}>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          color="#240808"
          variant="link"
        >
          Demo
        </Button>
        <Button
          display="block"
          _active={{ color: "#a9711a" }}
          color="#240808"
          variant="link"
        >
          Journeys
        </Button>
      </Flex>
    </Flex>
  );
};

const BodyImg = () => {
  const [Tablet, Desktop] = useMediaQuery([
    "(min-width: 550px)",
    "(min-width: 800px)",
  ]);
  return Desktop ? (
    <Container w={600}>
      <Image
        w={900}
        h={500}
        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1661165707/inspirers/Hero-illustration_Tablet.png"
        alt="Inspirers"
      />
    </Container>
  ) : Tablet ? (
    <Container minW={400} display="inline-block" align="center">
      <Image
        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1661165707/inspirers/Hero-illustration_Tablet.png"
        alt="Inspirers"
      />
    </Container>
  ) : (
    <Container m={0} p={0} w="100%" align="center">
      <Image
        m={0}
        p={0}
        w="100%"
        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1661165696/inspirers/Hero_Illustration_Mobile_Large.png"
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
  return Desktop ? (
    <Stack maxW="100%" align="center">
      <Flex maxW={2000} align="center">
        <BodyImg />
        <Stack>
          <Container align="center">
            <Heading
              textOverflow="none"
              minW={200}
              color="#240808"
              as="h1"
              fontSize="40px"
            >
              <b>Became achiever</b>{" "}
            </Heading>
            <Heading as="h2" color="#240808" fontSize="30px" mb={4} size="2xl">
              <b>not just a dreamer</b>
            </Heading>
            <Text align="left" maxW={260} color="#240808" mb={4}>
            Whether you're looking to build a business or grow your career or just live life to the fullest, Inspirers is here to help.
            </Text>
            <Button
              _hover={{ bg: "#bbe192" }}
              _active={{ color: "#a9711a", bg: "#bbe192" }}
              w={200}
              color="#240808"
              bg="#D1FEB5"
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
      <Heading color="#240808" as="h1" fontSize="70px">
        <b>Became achiever</b>{" "}
      </Heading>
      <Heading m={0} as="h2" color="#240808" fontSize="48px">
        <b>not just a dreamer</b>
      </Heading>
      <Flex mr={10} align="center">
        <BodyImg />
        <Stack>
          <Text align="left" maxW={350} color="#240808" mb={4} fontSize="18px">
            Inspirers is a unique community to help you reach your goals, change
            your habits, share your journey with other peers and master the art
            of success.
          </Text>
          <Button
            _hover={{ bg: "#bbe192" }}
            _active={{ color: "#a9711a", bg: "#bbe192" }}
            w={200}
            color="#240808"
            bg="#D1FEB5"
            m={4}
          >
            <b>Get Inspired</b>
          </Button>
        </Stack>
      </Flex>
    </Stack>
  ) : (
    <Stack align="center">
      <Heading color="#240808" as="h1" fontSize="32px">
        <b>Became achiever</b>{" "}
      </Heading>
      <Heading as="h2" color="#240808" fontSize="20px" mb={8} size="2xl">
        <b>not just a dreamer</b>
      </Heading>
      <Text align="left" maxW={260} color="#240808" fontSize="16px">
        Inspirers is a unique community to help you reach your goals, change
        your habits, share your journey with other peers and master the art of
        success.
      </Text>
      <BodyImg />
      <Button
        _hover={{ bg: "#bbe192" }}
        _active={{ color: "#a9711a", bg: "#bbe192" }}
        w={200}
        color="#240808"
        bg="#D1FEB5"
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
