import { useState } from "react";
import type { NextPage } from "next";
import {
    Stack,
    Text,
    Heading,
    Box,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { Button, Input } from "ui";
import { FiSend } from "react-icons/fi";
import Image from "next/image";

// only show the form if the link is valid
const Join: NextPage & {
    publicPage: boolean;
} = (props) => {

    const [email, setEmail] = useState<string>("");
    const [view, setView] = useState<"form" | "success">("form");

    const handleClick = () => {
        // signIn("email", { email });
        setView("success");
    }
    return (
        <Stack as="section" justifyContent="center" alignItems="center" height="100vh" textAlign="center">
            <Stack gap={2} p="4" width="35%" >
                {
                    view === "form" ? (
                        <>
                            <Heading>We'll let you know as soon as we are ready.</Heading>
                            <Input
                                placeholder="Enter your email"
                                onChange={() => { }}
                            />
                            <Button
                                icon={<FiSend />}
                                width="fit-content"
                                onClick={handleClick}
                            >
                                Send
                            </Button>
                        </>
                    ) : (
                        <Stack gap={8}>
                            <Heading>Thanks for your support and see you soon!</Heading>
                            <Image 
                                src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"
                                width="250px"
                                height="250px"
                                alt="confirmation image"
                            />
                        </Stack>
                    )
                }
            </Stack>
        </Stack>
    );
}

// https://join.slack.com/t/inspirersgroup/shared_invite/zt-1hizeu212-ITm8LSxutxDgcx~HJWYMJQ

Join.publicPage = true;

export default Join;