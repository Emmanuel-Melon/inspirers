import type { NextPage } from "next";
import {
    Stack,
    Text,
    Heading,
    Box,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";

// only show the form if the link is valid
const Invite: NextPage & {
    publicPage: boolean;
} = (props) => {
    return (
        <Box as="section">
            <Stack gap={2} p="4">
                <Heading>See what Inspirers is up to</Heading>
                <Text>Slack is a messaging app that brings your whole team together.</Text>
            </Stack>
        </Box>
    );
}
 
// https://join.slack.com/t/inspirersgroup/shared_invite/zt-1hizeu212-ITm8LSxutxDgcx~HJWYMJQ

Invite.publicPage = true;

export default Invite;