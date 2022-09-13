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
} from "@chakra-ui/react";
import { useFetch } from "../../hooks/useSwr";
import { ListRoutines } from "../../Routines/ListRoutines";
import { Button } from "ui";

export default function Routines() {
    const { data: routines, isLoading, isError } = useFetch(`/routines/cl7uzd9a10146nvbt246jxnc2/list`);
    return (
        <Stack color="brand.primaryText">
            <Flex justifyContent="space-between">
                <Heading>Routines</Heading>
                <Button>New Routine</Button>
            </Flex>
            <ListRoutines routines={routines?.data} />
        </Stack>
    );
}
