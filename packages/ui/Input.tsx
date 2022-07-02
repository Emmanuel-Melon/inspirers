import { FunctionComponent } from "react";
import { Input } from "@chakra-ui/react";

type InputProps = {
    placeholder?: string;
    inputField?: string;
    id?: string;
    type?: string;
    icon?: string;
    label?: string;
    value?: string;
    handleInputchange: React.ChangeEventHandler<HTMLInputElement>;
};

export const TextInput: FunctionComponent<InputProps> = (props) => {
    return <Input
        autoComplete="off"
        placeholder={props.placeholder}
        border="solid 0.15rem #868B8E"
        width={"100%"}
        cursor="pointer"
        padding="0.5rem"
        borderRadius="0.5rem"
        value={props.value}
        name={props.type}
        id={props.type}
        onChange={props.handleInputchange}
        _hover={{
            background: "brand.grey",
        }}
        _focus={{
            outline: "none",
        }}
        {...props} />;
};
