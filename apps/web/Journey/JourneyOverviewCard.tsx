import { Flex, Heading, Text, Box, Avatar } from "@chakra-ui/react";
import { Button } from "ui";
import { FiEye, FiShare2, FiPackage, FiCreditCard, FiSettings } from "react-icons/fi";
import { UserObject } from "types/User";
import { FC } from "react";

type JourneyOverviewCard = UserObject & {
    // rest of the props
};

export const JourneyOverviewCard: FC<JourneyOverviewCard> = ({ user }) => {
    function inviteFriends() {

    }
    return (
        <Flex
            direction="column"

            borderRadius="0rem 0.1rem 0.1rem 0rem"
        >
            <Flex bg="brand.highlight" justifyContent="space-between" borderRadius="1rem" py="4"
                px="2">
                <Box>
                    <Heading color="brand.primary" size="lg" as="h1">Hi, {user?.name}  </Heading>
                    <Text my="4">You haven't started any journey.</Text>
                </Box>
                <Button onClick={() => { }} width="200px">Get Started</Button>
            </Flex>
            <Flex
                justifyContent="space-between"
                p="8"
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
                    <Button onClick={inviteFriends} variant="outline" bg="#fff" color="brand.primary" icon={<FiShare2 />}>Invite Friends</Button>
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
        </Flex>
    )
}