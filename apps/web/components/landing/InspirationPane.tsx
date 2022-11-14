import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Button, Card } from "ui";

export const InspirationPane = () => {
    return (
        <Flex p="8" margin="0 auto" alignItems="center" justifyContent="center" gap="8">
            <Card>
                <Stack gap={4}>
                    <Heading
                    width="fit-content"
                        _after={{
                            bg: "linear-gradient(90.44deg, #F4C85A -7.46%, #E3A6F2 54.28%, #FBBE95 119.85%)",
                            display: "block",
                            content: '""',
                            width: "100%",
                            height: "15px",
                            marginTop: "-15px"
                        }}
                    >Be an Inspiration</Heading>
                    <Text>You already established yourself in a chosen field. If you made it this far, you must be willing to share about your skills and approches by promoting yourself through helping the others... You learnt in a hard way and you wish you heard about this app before.</Text>

                </Stack>
            </Card>
            <Card>
                <Stack gap={4}>
                    <Heading
                    width="fit-content"
                        _after={{
                            bg: "linear-gradient(90.44deg, #ECB1F6 2.98%, #BBB1F6 55.06%, #F6D8FB 119.85%)",
                            display: "block",
                            content: '""',
                            width: "100%",
                            height: "15px",
                            marginTop: "-15px"
                        }}
                    >Find Inspiration</Heading>
                    <Text>You already sure you dont want to hestitate iany longer and start achiving your goals but you need right tools and enviroment to make it come throught. You can finally track your progress....</Text>
                </Stack>
            </Card>
        </Flex>
    )
}