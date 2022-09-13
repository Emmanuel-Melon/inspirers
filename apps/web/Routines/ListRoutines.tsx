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
  import { Routine } from "./Routine";

export const ListRoutines = ({ routines }) => {
    console.log(routines);
    return (
        <Flex gap={4}>
            {
                routines?.map(routine => <Routine routine={routine} key={routine.id} />)
            }
        </Flex>
    )
}