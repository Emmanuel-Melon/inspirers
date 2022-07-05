import { Avatar as ChakraAvatar } from "@chakra-ui/react";

type Props = {
    size: string;
    name: string;
    src: string;
    height: string | number;
}

export const Avatar = (props: Props) => {
    return <ChakraAvatar
        height={60}
        borderRadius="50%"
        size={props.size}
        name={props.name} src={props.src}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    />;
};
