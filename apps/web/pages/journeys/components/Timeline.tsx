import { FC } from "react";
import { Flex, Heading, Text, Avatar } from "@chakra-ui/react";
import { Button } from "ui";

type Event = {
    avatar: string;
    body: string;
    user: string;
    type: string;
}

type FeedItemProps = {
    event: Event;
}

const FeedItem: FC<FeedItemProps> = ({ event }) => {
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
                    <Button onClick={() => { }}>Reply</Button>
                </Flex>
            </Flex>
        )
    }
    return (
        <Text>{event.body}</Text>
    )
}


export const Timeline = ({ events }) => {
    return (
        <Flex direction="column" gap={4}>
            <Flex>
                <Heading color="brand.primary" size="md">Timeline</Heading>
            </Flex>
            <Text>Connect with friends to view their activity.</Text>
            {
                events && events.map(event => {
                    return <FeedItem event={event} />
                })
            }
        </Flex>
    )
}