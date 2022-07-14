import { Flex, Heading, Text, Box, Avatar } from "@chakra-ui/react";
import { Button } from "ui";
import { FiEye, FiShare2, FiPackage, FiCreditCard, FiSettings, FiMoreVertical } from "react-icons/fi";
import { getProviders, useSession } from "next-auth/react";
import { ProtectedRoute } from "../utils/protectedRoute";
import { useEffect } from "react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

const events = [
  {
    id: 1,
    type: "task",
    user: "Ladu Lumori",
    avatar: "https://img.mensxp.com/media/content/2022/Jun/Thor-Might-Make-A-Cameo-In-Deadpool-31200_629de830d26ae.jpeg",
    body: "Ladu has mentioned you in an issue"
  },
  {
    id: 2,
    type: "mention",
    user: "Ladu Lumori",
    avatar: "https://img.mensxp.com/media/content/2022/Jun/Thor-Might-Make-A-Cameo-In-Deadpool-31200_629de830d26ae.jpeg",
    body: "Ladu has mentioned you in an issue"
  },
  {
    id: 3,
    type: "task",
    user: "Ladu Lumori",
    avatar: "https://img.mensxp.com/media/content/2022/Jun/Thor-Might-Make-A-Cameo-In-Deadpool-31200_629de830d26ae.jpeg",
    body: "Ladu has mentioned you in an issue"
  }
]

const FeedItem = ({ event} ) => {

  if(event.type === "task") {
    return (
      <Flex 
      borderRadius="1rem"
      direction="column"
      color="brand.primaryText"
      
      bg="#fff"
      p="4"
      gap={4}
      borderLeft="solid 0.2rem"
      borderColor="brand.white"
      _hover={{
        background: "brand.hovered",
        borderLeft: "solid 0.2rem",
        borderColor: "brand.secondary"
      }}
      cursor="pointer"
      >
        <Flex alignItems="center" gap={2}>
          <Avatar src={event.avatar} />
          <Heading size="sm">{event.user}</Heading>
        </Flex>
        <Text>{event.body}</Text>
        <Flex>
          <Button>Reply</Button>
        </Flex>
      </Flex>
    )
  }
  return (
    <Text>{event.body}</Text>
  )
}

export default function Index(props) {
  const session = useSession();

  // When rendering client side don't display anything until loading is complete
  // if (typeof window !== "undefined" && loading) return null

  console.log(props);



  return (
    <Flex direction="column" gap={4} my="8">
      <Flex justifyContent="space-between">
        <Box>
          <Heading color="brand.primary" size="lg" as="h1">Hi, {session.data?.user?.name}  </Heading>
          <Text my="4">You haven't started any journey.</Text>
        </Box>
        <Button onClick={() => {}}width="200px">Get Started</Button>
      </Flex>
      <Flex
        justifyContent="space-between"
        bg="brand.highlight"
        p="8" borderRadius="1rem"
        color="brand.primaryText"
      >

        <Flex alignItems="center" gap={8}>

          <Flex alignItems="center" gap={4}>
            <Text fontWeight={"700"}>Companions</Text>
            <Flex gap={1}>
              <Avatar
                src="https://img.mensxp.com/media/content/2022/Jun/Thor-Might-Make-A-Cameo-In-Deadpool-31200_629de830d26ae.jpeg"
                border="solid 0.05rem #116979"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              />
              <Avatar border="solid 0.10rem" 
              boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" src="https://i.pinimg.com/originals/f7/fb/bc/f7fbbcc3e50a689cf948a1cb0f21fefc.jpg" />
              <Avatar border="solid 0.10rem"  
              boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kratos_%2815458769560%29.jpg/1200px-Kratos_%2815458769560%29.jpg" />
            </Flex>
          </Flex>
          <Button variant="outline" bg="#fff" color="brand.primary" icon={<FiShare2 />}>Invite Friends</Button>
        </Flex>
        <Flex gap={8} alignItems="center">
          <Flex alignItems="center" gap={1}>
            <FiEye color="#116979" />
            <Text>Public</Text>
          </Flex>
          <Flex alignItems="center" gap={1}>
            <FiPackage color="#116979" />
            <Text>Integrations</Text>
          </Flex>
          <Flex alignItems="center" gap={1}>
            <FiCreditCard color="#116979" />
            <Text>Plan</Text>
          </Flex>
          <Flex alignItems="center" gap={1}>
            <FiSettings color="#116979" />
            <Text>Settings</Text>
          </Flex>
        </Flex>
      </Flex>


      <Flex >
        <Flex width="60%" direction="column" gap={4} marginRight={8}>
          <Flex direction="column" gap={4}>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading color="brand.primary" size="md">Insights</Heading>
              <FiMoreVertical />
            </Flex>
            <Flex justifyContent="space-between">
              <Flex
                bg="brand.primary"
                p="4"
                gap={8}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                borderRadius="1rem"
                direction="column"
                color="brand.white"
              >
                <Flex gap={8} >
                  <Text fontWeight="700">People Reached</Text>
                  <Text>9%</Text>
                </Flex>
                <Flex gap={8} justifyContent="space-between">
                  <Text>1995</Text>
                  <Text>Learn More</Text>
                </Flex>
              </Flex>
              <Flex
                bg="brand.white"
                p="4"
                gap={8}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                borderRadius="1rem"
                direction="column"
                color="brand.primaryText"
              >
                <Flex gap={8} >
                  <Text fontWeight="700">People Reached</Text>
                  <Text>9%</Text>
                </Flex>
                <Flex gap={8} justifyContent="space-between">
                  <Text>1995</Text>
                  <Text>Learn More</Text>
                </Flex>
              </Flex>
              <Flex
                bg="brand.white"
                p="4"
                gap={8}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                borderRadius="1rem"
                direction="column"
                color="brand.primaryText"
              >
                <Flex gap={8} >
                  <Text fontWeight="700">People Reached</Text>
                  <Text>9%</Text>
                </Flex>
                <Flex gap={8} justifyContent="space-between">
                  <Text>1995</Text>
                  <Text>Learn More</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" gap={4}>
            <Flex>
              <Heading color="brand.primary" size="md">Timeline</Heading>
            </Flex>
            <Text>Connect with friends to view their activity.</Text>
            {
                  events.map(event => {
                    return <FeedItem event={event}/>
                  })
                }
          </Flex>
        </Flex>
        <Flex width="40%" direction="column" gap={4}>
          <Flex direction="column" gap={4}>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading color="brand.primary" size="md">Milestones</Heading>
              <Text
                color="brand.secondary"
                bg="brand.highlight"
                fontWeight="700"
                borderRadius="1rem"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                fontSize="12px"
                px="2"
                py="1px"
              >
                View More
              </Text>
            </Flex>
            <Flex
              borderRadius="1rem"
              color="brand.primaryText"
              gap={4}
            >
              <Flex
                borderRadius="1rem"
                direction="column"
                color="brand.accent"
                bg="brand.highlight1"
                p="4"
                flexGrow={1}
              >
                <Flex gap={4} direction="column">
                  <Text fontWeight="700">Write 3 articles.</Text>
                </Flex>
              </Flex>
              <Flex
                borderRadius="1rem"
                direction="column"
                color="brand.accent"
                bg="brand.highlight1"
                p="4"
                flexGrow={1}
              >
                <Flex gap={4} direction="column">
                  <Text fontWeight="700">Write 3 articles.</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" gap={4}>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading color="brand.primary" size="md">Activities</Heading>
              <Text
                color="brand.secondary"
                bg="brand.highlight"
                fontWeight="700"
                borderRadius="1rem"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                fontSize="12px"
                px="2"
                py="1px"
              >
                View More
              </Text>
            </Flex>


            <Flex
              borderRadius="1rem"
              direction="column"
              color="brand.primaryText"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
              bg="#fff"
              p="4"
              borderLeft="solid 0.2rem"
              borderColor="brand.white"
              _hover={{
                background: "brand.hovered",
                borderLeft: "solid 0.2rem",
                borderColor: "brand.secondary"
              }}
              cursor="pointer"
            >
              <Flex gap={4} direction="column">
                <Flex justifyContent="space-between" alignItems="center">
                  <Heading size="sm" color="brand.primaryText">Finish the app</Heading>
                  <FiMoreVertical />
                </Flex>
                <Text>
                  Connect with friends to view their activity.
                </Text>
              </Flex>
            </Flex>
            <Flex
              borderRadius="1rem"
              direction="column"
              color="brand.primaryText"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
              bg="#fff"
              p="4"
            >
              <Flex gap={4} direction="column">
                <Flex justifyContent="space-between" alignItems="center">
                  <Heading size="sm" color="brand.primaryeText" fontWeight="700">Write the article</Heading>
                  <FiMoreVertical />
                </Flex>
                <Text>
                  Connect with friends to view their activity.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}