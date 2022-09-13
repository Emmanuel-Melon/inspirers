import {
    Avatar,
    Image,
    Img,
    Stack,
    Text,
    Link,
    Flex,
    Heading,
    Box,
    LinkBox, LinkOverlay
} from "@chakra-ui/react";
import { Card } from "ui";
export const Routine = ({ routine }) => {
    return (
        <LinkBox>
            <Card>
                <LinkOverlay href={`routines/${routine.id}`}>
                    <Text>{routine.title}</Text>
                </LinkOverlay>
            </Card>
        </LinkBox>
    )
}