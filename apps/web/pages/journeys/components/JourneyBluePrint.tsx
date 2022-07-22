import {
    Flex,
    Text,
    Box,
    Avatar,
    Tag,
    Heading
} from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "ui";
import { FiStar, FiUsers, FiMessageSquare, FiCompass } from "react-icons/fi";

export const JourneyBluePrint = (props) => {
    return (
        <Flex 
            alignItems="flex-start" 
            direction="column" 
            gap={4}
            color="brand.primaryText"
            borderRadius="0rem 0rem 1rem 1rem"
            cursor="pointer"
        >
            <Image 
                height="150" 
                width="150" alt="start journey" 
                src={"https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg"}
            />
            <Flex                 gap={2} 
                alignItems="center">
                <FiCompass />
                <Heading size="sm" >{props.bluePrint?.title || "Journey Title"}</Heading>
            </Flex>
            <Flex 
                gap={2} 
                alignItems="center"
            >
                <Avatar 
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    size="xs"
                    src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997900/inspirers/images/conifer-trophy-1.svg" />
                <Text>Emmanuel Daniel</Text>
            </Flex>
            <Flex 
                gap={4} 
                bg="brand.highlight2" 
                p="2" 
                borderRadius="1rem"
                color="brand.primary"
                justifyContent="space-between"
                width="100%"
            >
                <Flex alignItems="center" gap={2}>
                    <FiUsers /> 1,287
                </Flex>
                <Flex alignItems="center" gap={2}>
                    <FiStar /> 87
                </Flex>
                <Flex alignItems="center" gap={2}>
                    <FiMessageSquare /> 9
                </Flex>
            </Flex>
        </Flex>
    )
}
