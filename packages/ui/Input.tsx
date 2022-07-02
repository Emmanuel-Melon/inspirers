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
        borderStyle="dashed"
        borderColor="#216583"
        borderRadius="0"
        cursor="pointer"
        borderWidth="0px 0px 1px 0px"
        value={props.value}
        name={props.type}
        id={props.type}
        width="100%"
        onChange={props.handleInputchange}
        _hover={{
            background: "brand.grey",
        }}
        _focus={{
            outline: "none",
        }}
        {...props} />;
};
