import { FunctionComponent } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch, FiInfo } from "react-icons/fi";

type InputProps = {
    placeholder?: string;
    inputField?: string;
    id?: string;
    type?: string;
    name?: string;
    icon?: string;
    label?: string;
    value?: string;
    handleInputchange: React.ChangeEventHandler<HTMLInputElement>;
};

export const TextInput: FunctionComponent<InputProps> = (props) => {
    return (
        <InputGroup gap={16}>
            <Input
                autoComplete="off"
                placeholder={props.placeholder}
                cursor="pointer"
                padding="1rem"
                variant='outline'
                value={props.value}
                name={props.name}
                type={props.type}
                bg="rgba(192, 216, 192, 0.1)"
                boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                borderRadius="1rem"
                id={props.type}
                onChange={props.handleInputchange}
                focusBorderColor='brand.accent'
                _hover={{
                    background: "brand.white",
                }}
                _focus={{
                    outline: "none",
                    background: "brand.accent"
                }}
                {...props} />
        </InputGroup>
    );
};
