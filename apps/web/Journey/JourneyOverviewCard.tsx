import {
    Flex,
    Heading,
    Text,
    Box,
    Avatar,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Select
} from "@chakra-ui/react";
import { Button } from "ui";
import { FiEye, FiShare, FiPackage, FiCreditCard, FiSettings, FiTruck } from "react-icons/fi";
import { UserObject } from "types/User";
import { FC } from "react";
import { TextInput } from "ui/Input";
import  { useRouter } from "next/router";
import { NewJourney } from "./NewJourney";

type JourneyOverviewCard = UserObject & {
    // rest of the props
};

const Companion = ({ companion }) => {
    return (
        <Avatar src={companion.avatar} />
    )
}



export const JourneyOverviewCard: FC<JourneyOverviewCard> = ({ user }) => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();

    function inviteFriends() { }
    function getStarted() {
        onOpen();
    }
    return (
        <>
            <Flex
                direction="column"
                borderRadius="0rem 0.1rem 0.1rem 0rem"
            >
                <Flex justifyContent="space-between">
                    <Box>
                        <Heading color="brand.primary" size="lg" as="h1">Hi, {user?.name}  </Heading>
                        <Text my="4">You haven't started any journey.</Text>
                    </Box>
                    <Button onClick={onOpen} icon={<FiTruck />}>Get Started</Button>

                </Flex>
                <Flex
                    justifyContent="space-between"
                    p="8"
                    color="brand.primaryText"
                    bg="brand.highlight1"
                    borderRadius="1rem"
                >

                    <Flex alignItems="center" gap={8}>

                        <Flex alignItems="center" gap={4}>
                            <Text fontWeight={"700"}>Companions</Text>
                            <Flex gap={1}>
                                {
                                    [].map(companion => <Companion key={companion.id} companion={companion} />)
                                }
                            </Flex>
                        </Flex>
                        <Button onClick={inviteFriends} variant="outline" bg="#fff" color="brand.primary" icon={<FiShare />}>Invite Friends</Button>
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
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color="primaryText">Emmanuel's New Journey</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <NewJourney />
                    </ModalBody>
                    <ModalFooter gap={4} bg="brand.highlight1">
                        <Button bg="brand.white" color="brand.primaryText" colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={() => {
                            router.push("/journeys/12")
                        }}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}