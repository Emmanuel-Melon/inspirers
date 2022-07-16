import {
    Flex,
    Text
} from "@chakra-ui/react";
import Image from "next/image";

export const JourneyBluePrint = (props) => {
    console.log(props.bluePrint)
    return (
        <Flex 
            bg="brand.white" 
            p="4" 
            borderRadius="1rem" 
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
            cursor="pointer"
            border="dashed 0.25rem #fff"
            _hover={{
                borderColor: "brand.highlight2"
            }}
        >
            <Image height="120" width="120" alt="start journey" src={props?.bluePrint?.image || "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/abstract-chess.svg"} />
            <Text>{props.bluePrint?.title}</Text>
        </Flex>
    )
}