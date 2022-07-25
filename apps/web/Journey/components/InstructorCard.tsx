import {
    Flex,
    Text,
    Tag
} from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "ui";
import { FiCompass, FiUsers, FiPlus } from "react-icons/fi";

export const InstructorCard = (props) => {
    return (
        <Flex 
            direction="column" 
            gap={2}
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            p="4"
            bg="brand.white"
            borderRadius="0rem 0rem 1rem 1rem"
            color="brand.primaryText"
            cursor="pointer"
            borderTop="solid 0.25rem"
            borderColor="brand.secondary"
            width="100%"
            _hover={{
                borderTop: "solid 0.25rem",
                borderColor: "brand.accent"
            }}
        >
            <Image 
                height="150" 
                width="120" alt="start journey" 
                src={"https://res.cloudinary.com/dwacr3zpp/image/upload/v1658081606/inspirers/images/lumiere-office-worker-presenting-graphics-1.png"}
                style={{
                    margin: 0
                }}
            />
            <Text color="brand.primary" fontWeight="700">Emmanuel Daniel</Text>
            <Text>Software Developer</Text>
            <Flex gap={2}>
                <Tag borderRadius="1rem" bg="brand.highlight2">Fitness</Tag>
                <Tag borderRadius="1rem" bg="brand.highlight1">Fitness</Tag>
                <Tag borderRadius="1rem" bg="brand.highlight">Fitness</Tag>
            </Flex>
            <Flex gap={4}>
                <Flex alignItems="center" gap={2}>
                    <FiUsers /> 1,287
                </Flex>
                <Flex alignItems="center" gap={2}>
                    <FiCompass /> 87
                </Flex>
            </Flex>
            <Button size="sm" width="100%" icon={<FiPlus /> }>Follow Mentor</Button>
        </Flex>
    )
}
