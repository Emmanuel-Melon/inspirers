import { useState } from "react";
import type { NextPage } from "next";
import {
    Stack,
    Text,
    Heading,
    Flex,
    Box,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { Button, Input, IconButton } from "ui";
import { FiSend, FiCopy, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import { client } from "utils/client";
import { copyLink } from "utils/ui";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

const messagesInFrench = {
  myMessage: "سنخبرك بمجرد أن نكون مستعدين.",
}

// only show the form if the link is valid
const Join: NextPage & {
    publicPage: boolean;
} = (props) => {

    const [email, setEmail] = useState<string>("");
    const [view, setView] = useState<"form" | "success" | "error">("form");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const joinWaitingList = () => {
        setIsLoading(true);
        client.post("/users/subscribe", { email })
            .then((res) => {
                setIsLoading(false);
                setView("success");
            })
            .catch((err) => {
                setView("error");
            });
    }

    const handleCopy = async () => {
        const link = await copyLink("https://join.inspirers.co");
        console.log(link);
    }


    return (
        <Stack as="section" justifyContent="center" alignItems="center" height="100vh" textAlign="center">
            <Stack gap={2} p="4" width="35%" >
                {
                    view === "form" ? (
                        <>
                        <IntlProvider messages={messagesInFrench} locale="ar" defaultLocale="ar">
                            <Heading>We will let you know as soon as we are ready.</Heading>
                            <Input
                                placeholder="Enter your email"
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                value={email}

                            />
                            <Flex justifyContent="flex-end">
                                <Button
                                    icon={<FiSend />}
                                    width="fit-content"
                                    onClick={joinWaitingList}
                                    isLoading={isLoading}
                                >
                                    Send
                                </Button>
                            </Flex>
                            </IntlProvider>
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
                            <Stack>
                                <Text>{`You're`} an inspirer; spread the good news!</Text>
                                <Flex gap={4} justifyContent="center">
                                    <IconButton label="" onClick={() => {}}>
                                        <FiFacebook />
                                    </IconButton>
                                    <IconButton label="" onClick={() => {}}>
                                        <FiTwitter />
                                    </IconButton>
                                    <IconButton label="" onClick={() => {}}>
                                        <FiLinkedin />
                                    </IconButton>
                                    <Button
                                        icon={<FiCopy />}
                                        onClick={handleCopy}
                                    >
                                        Copy Link
                                    </Button>
                                </Flex>
                            </Stack>
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