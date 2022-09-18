import { useState } from "react";
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
import { AddRoutine } from "../../Routines/AddRoutine";
import { Button } from "ui";
import { FiPlus } from "react-icons/fi";
import { CustomModal, ViewNavigator } from "ui";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function Routines(props) {
    const { data: routines, isLoading, isError } = useFetch(`/routines/${props.user?.id}/list`);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Stack color="brand.primaryText" gap={4} >
                <Flex justifyContent="space-between" alignItems="center" gap={8}>
                    <Stack flex="2">
                        <Heading size="md">Routines</Heading>
                        <Text>The key to managing your time is performing the right habits everyday. These habits will improve your life and help you optimize it to reach your goals.</Text>
                        <ViewNavigator view="list" changeView={() => {}} openModal={openModal} />
                    </Stack>
                </Flex>
                <ListRoutines routines={routines?.data} isLoading={isLoading} isError={isError} />
            </Stack>
            <CustomModal show={isOpen} close={closeModal}>
                <AddRoutine cancel={closeModal} />
            </CustomModal>
        </>
    );
}


export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(
      context.req,
      context.res,
      authOptions
    );
    const { createdAt, ...user } = session?.user;
  
    if (!session) {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        user
      },
    };
  }
  