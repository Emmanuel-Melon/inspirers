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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
// import Image from "next/image";
// import { Button } from "ui";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiGlobe } from "react-icons/fi";
import { GetServerSidePropsContext } from "next";


const Header = () => {
  const bgValue = useColorModeValue("white", "black");
  const textColorValue = useColorModeValue("black", "white");
  const [Tablet, Desktop] = useMediaQuery([
    "(min-width: 550px)",
    "(min-width: 800px)",
  ]);

  const changeLanguage = () => {

  }

  const translations = {
    subheading: "تطبيق مجاني يتيح للمشاركين التواصل والتّعلّم والمشاركة مع الأخرين الذين يقومون بما تطمح إلى القيام به مهنيًا للارتقاء بمهاراتك إلى مستوى أعلى من خلال التعلّم ممن حققوا نجاحات مماثلة."
  }

  return Desktop ? (
    <Flex align="center">
      <Flex gap="1rem" p="4">
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
      <Flex gap={8} alignItems="center" p="4">
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
        <Menu>
          <MenuButton as={Button} rightIcon={<FiGlobe />} bg="brand.primary">
            English
          </MenuButton>
          <MenuList>
            <MenuItem>English</MenuItem>
            <MenuItem>Arabic</MenuItem>
          </MenuList>
        </Menu>
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
    <Container>
      <Image
        objectFit="contain"
        w={500}
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
    <Stack justifyContent="center" height="100vh">
      <Flex >
        <Stack flex="1" justifyContent="flex-start" alignItems="flex-start">
          <BodyImg />
        </Stack>
        <Stack flex="1" p="4" gap={4}>
          <Heading textOverflow="none" size="4xl" as="h1">
            <b>Achieve your <Box as="span" color="brand.accent">dreams</Box></b>{" "}
          </Heading>
          <Heading as="h2" size="2xl">
            <b>and <Box as="span" color="brand.secondary">Inspire</Box> others</b>
          </Heading>
          <Text align="left">
            Inspirers is a free app that lets you connect, learn and share with people doing what you aspire to do. Do more of the things you love, by learning from those who've already done it!
          </Text>
          <Flex gap={4}>
            <Button
              _hover={{ bg: "#bbe192" }}
              _active={{ color: "#a9711a", bg: "#bbe192" }}
              w={200}
              bg="brand.white"
              color={textColorValue}
            >
              <b>Learn More</b>
            </Button>
            <Button
              _hover={{ bg: "#bbe192" }}
              _active={{ color: "#a9711a", bg: "#bbe192" }}
              w={200}
              bg="brand.primary"
              color={textColorValue}
            >
              <b>Get Inspired</b>
            </Button>
          </Flex>
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
            Inspirers is a free app that lets you connect, learn and share with people doing what you aspire to do. Do more of the things you love, by learning from those who've already done it!
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
        Inspirers is a free app that lets you connect, learn and share with people doing what you aspire to do. Do more of the things you love, by learning from those who've already done it!
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

export default function Landing(props: any) {
  return (
    <Stack>
      <Header />
      <Body />
    </Stack>
  );
}

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  return {
    props: { context },
  };
};

Landing.publicPage = true;
