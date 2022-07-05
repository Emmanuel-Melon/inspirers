import { FunctionComponent } from "react";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";

export const Avatar = (props) => {
    return <ChakraAvatar 
        height="60" 
        borderRadius="50%" 
        size={props.size} 
        name={props.name} src={props.src}
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
         />;
};
