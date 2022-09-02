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
              Inspirers is a unique community to help you reach your goals,
              change your habits, share your journey with other peers and master
              the art of success.
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
    // <Flex direction="column">
    //   <Box height="100vh">
    //     <Flex
    //       justifyContent="space-between"
    //       width="100%"
    //       alignItems="center"
    //       p="4"
    //     >
    //       <Flex gap={4} alignItems="center">
    //         <Image
    //           height="120"
    //           width="80"
    //           alt="start journey"
    //           src={
    //             "https://res.cloudinary.com/dwacr3zpp/image/upload/v1658050612/inspirers/brand/logo_transparent.png"
    //           }
    //         />
    //         <Text>Features</Text>
    //         <Text>FAQ</Text>
    //         <Text>About</Text>
    //         <Text>For Teams</Text>
    //         <Text>For Individuals</Text>
    //       </Flex>
    //       <Flex gap={4}>
    //         <Button bg="brand.white" color="brand.primaryText">
    //           Login
    //         </Button>
    //         <Button>Get Started</Button>
    //       </Flex>
    //     </Flex>
    //     <Flex
    //       alignItems="center"
    //       justifyContent="center"
    //       color="brand.primaryText"
    //     >
    //       <Flex direction="column" gap={8}>
    //         <Heading>
    //           Achieve your{" "}
    //           <Box as="span" color="brand.accent">
    //             dreams
    //           </Box>{" "}
    //           and{" "}
    //           <Box as="span" color="brand.secondary">
    //             inspire
    //           </Box>{" "}
    //           others
    //         </Heading>
    //         <Heading size="md">
    //           Get the skills of tomorrow, learn to learn efficiently and take
    //           control of your career for good.
    //         </Heading>
    //         <Flex gap={4}>
    //           <Button bg="brand.white" color="brand.primaryText">
    //             Talk to us
    //           </Button>
    //           <Button>Get Started</Button>
    //         </Flex>
    //       </Flex>
    //       <Image
    //         height="500"
    //         width="500"
    //         alt="start journey"
    //         src={
    //           "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg"
    //         }
    //       />
    //     </Flex>
    //   </Box>
    //   <Flex
    //     p="8"
    //     gap={8}
    //     direction="column"
    //     alignItems="center"
    //     justifyContent="center"
    //     height="100vh"
    //   >
    //     <Heading textAlign="center">
    //       Lets turn every onboarding into a meaningful, structured, and truly
    //       welcoming experience.
    //     </Heading>

    //     <Flex
    //       gap={4}
    //       flexWrap="wrap"
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       {benefits.map((benefit) => {
    //         return (
    //           <Flex
    //             bg="brand.white"
    //             p="8"
    //             borderRadius="1rem"
    //             direction="column"
    //             gap={2}
    //             width="30%"
    //             boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
    //           >
    //             <Text
    //               size="xs"
    //               bg="brand.highlight1"
    //               width="fit-content"
    //               color="brand.accent"
    //               px="4"
    //               py="1"
    //               borderRadius="1rem"
    //             >
    //               {benefit.subHeading}
    //             </Text>
    //             <Heading size="md">{benefit.heading}</Heading>
    //             <Text>{benefit.description}</Text>
    //           </Flex>
    //         );
    //       })}
    //     </Flex>
    //   </Flex>
    //   <Flex
    //     p="8"
    //     gap={8}
    //     direction="column"
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <Heading textAlign="center">Who is this app for?</Heading>
    //     <Flex
    //       gap={4}
    //       flexWrap="wrap"
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       {process.map((benefit) => {
    //         return (
    //           <Flex p="8" borderRadius="1rem" direction="column" gap={2}>
    //             <Flex alignItems="center">
    //               <Image
    //                 height="120"
    //                 width="120"
    //                 alt="start journey"
    //                 src={
    //                   "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"
    //                 }
    //               />
    //               <Heading size="md">{benefit.heading}</Heading>
    //             </Flex>
    //             <Text>{benefit.description}</Text>
    //           </Flex>
    //         );
    //       })}
    //     </Flex>
    //   </Flex>
    //   <Flex
    //     p="8"
    //     gap={8}
    //     direction="column"
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <Heading textAlign="center">How it works</Heading>
    //     <Flex
    //       gap={4}
    //       flexWrap="wrap"
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       {process.map((benefit) => {
    //         return (
    //           <Flex
    //             bg="brand.white"
    //             p="8"
    //             borderRadius="1rem"
    //             direction="column"
    //             gap={2}
    //             width="30%"
    //             boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
    //           >
    //             <Heading
    //               size="xs"
    //               bg="brand.highlight1"
    //               width="fit-content"
    //               px="4"
    //               py="1"
    //               borderRadius="1rem"
    //             >
    //               {benefit.subHeading}
    //             </Heading>
    //             <Heading size="md">{benefit.heading}</Heading>
    //             <Text>{benefit.description}</Text>
    //           </Flex>
    //         );
    //       })}
    //     </Flex>
    //   </Flex>
    //   <Flex
    //     p="8"
    //     gap={8}
    //     direction="column"
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <Heading textAlign="center">Frequently Asked Questions</Heading>
    //     <Flex
    //       gap={4}
    //       flexWrap="wrap"
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       {process.map((benefit) => {
    //         return (
    //           <Flex
    //             p="8"
    //             borderRadius="1rem"
    //             direction="column"
    //             gap={2}
    //             bg="brand.highlight1"
    //             width="80%"
    //           >
    //             <Heading
    //               size="xs"
    //               bg="brand.highlight1"
    //               width="fit-content"
    //               px="4"
    //               py="1"
    //               borderRadius="1rem"
    //             >
    //               {benefit.subHeading}
    //             </Heading>
    //             <Heading size="md">{benefit.heading}</Heading>
    //             <Text>{benefit.description}</Text>
    //           </Flex>
    //         );
    //       })}
    //     </Flex>
    //   </Flex>
    //   <Flex
    //     p="8"
    //     gap={8}
    //     direction="column"
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <Heading textAlign="center">Say Hello</Heading>
    //     <Text>
    //       We might deal with trolls, werewolfs and huge dogs, but we don’t bite.
    //     </Text>
    //     <Button>Get in touch</Button>
    //   </Flex>
    //   <Flex direction="column" color="brand.primaryText">
    //     <Flex justifyContent="space-evenly" p="8">
    //       <Flex gap={4}>
    //         <Flex direction="column" p="8" gap={4}>
    //           <Image
    //             height="150"
    //             width="150"
    //             alt="start journey"
    //             src={
    //               "https://res.cloudinary.com/dwacr3zpp/image/upload/v1658050612/inspirers/brand/logo_transparent.png"
    //             }
    //           />
    //         </Flex>
    //         <Flex direction="column" p="8" gap={4}>
    //           <Heading size="md" color="brand.primary">
    //             Product
    //           </Heading>
    //           <Text>Features</Text>
    //           <Text>Usecases</Text>
    //           <Text>Templates</Text>
    //           <Text>Integtrations</Text>
    //         </Flex>
    //         <Flex direction="column" p="8" gap={4}>
    //           <Heading size="md" color="brand.primary">
    //             Connect
    //           </Heading>
    //           <Text>LinkedIn</Text>
    //           <Text>Twitter</Text>
    //           <Text>help@inspirers.com</Text>
    //         </Flex>
    //         <Flex direction="column" p="8" gap={4}>
    //           <Heading size="md" color="brand.primary">
    //             Resources
    //           </Heading>
    //           <Text>Blog</Text>
    //           <Text>Community</Text>
    //         </Flex>
    //       </Flex>
    //       <Flex direction="column" p="8" gap={4}>
    //         <Heading size="md" color="brand.primary">
    //           Inspirers
    //         </Heading>
    //         <Text>
    //           FigJam and Figma live side-by-side, so all design work, from
    //           ideation to execution, can be found in one place. And, teammates
    //           can leverage design libraries in FigJam to create artifacts that
    //           are consistent and on-brand.
    //         </Text>
    //       </Flex>
    //     </Flex>
    //     <Flex justifyContent="space-evenly" p="4">
    //       <Text>Terms of service - Privacy policy - Cookies</Text>
    //       <Text>Copyright @ 2022 Inspirers</Text>
    //     </Flex>
    //   </Flex>
    // </Flex>
    <Stack>
      <Header />
      <Body />
    </Stack>
  );
}

Landing.publicPage = true;
