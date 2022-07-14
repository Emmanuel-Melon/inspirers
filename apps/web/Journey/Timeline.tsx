import { Flex, Heading, Text, Avatar } from "@chakra-ui/react";
import { Button } from "ui";

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

const FeedItem = ({ event }) => {

    if (event.type === "task") {
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



export const Timeline = () => {
    return (
        <Flex direction="column" gap={4}>
            <Flex>
                <Heading color="brand.primary" size="md">Timeline</Heading>
            </Flex>
            <Text>Connect with friends to view their activity.</Text>
            {
                events.map(event => {
                    return <FeedItem event={event} />
                })
            }
        </Flex>
    )
}