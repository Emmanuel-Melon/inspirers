import { Avatar, Flex, Text, Heading, VStack } from "@chakra-ui/react";
import { Button } from "ui";
import { FiMoreVertical } from "react-icons/fi";


export const UserBioCard = ({ user }) => {

    return (
        <Flex
            bg="brand.white"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            borderRadius="1rem"
            p="8"
            direction="column"
            color="brand.primaryText"
            gap={8}
            alignItems="center"

        >
            <Text>The UI design for this component is still a work in progress so we only need to get rid of the underline rules on those links.</Text>
        </Flex>
    );
}