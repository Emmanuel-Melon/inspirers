import {
    Flex,
    Input,
    Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { TextInput } from "./Input";
import { Button } from "./Button";
import { FiBell, FiInfo } from "react-icons/fi";


export const Navbar = () => {

    function handleTitleChange() {

    }
    return (
        <Flex as="header" width="100%" p="8" gap={8}>
            <TextInput
                handleInputchange={handleTitleChange}
                placeholder="Search inspirers..."
                type="text"
                value={""}
            />
            <Flex 
                bg="brand.primary" 
                color="brand.white" 
                borderRadius="0.4rem" 
                alignItems="center" 
                px="3" 
                justifyContent="center"
                boxShadow="rgba(120, 130, 164, 0.2) 0px 3px 5px"
                cursor="pointer"
                _hover={{
                    background: "brand.secondary",
                    color: "brand.white",
                  }}
            >
                <FiBell />
            </Flex>
        </Flex>
    );
}
