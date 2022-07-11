import { FunctionComponent } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch, FiInfo } from "react-icons/fi";

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
    return (
        <InputGroup gap={16}>
            <InputLeftElement
                pointerEvents='none'
            >
                <FiSearch color='gray.300' />
                </InputLeftElement>
            <Input
                autoComplete="off"
                placeholder={props.placeholder}
                
                cursor="pointer"
                padding="1rem"
                borderRadius="0.8rem"
                border="none"
                value={props.value}
                name={props.type}
                bg="rgba(192, 216, 192, 0.3)"
                boxShadow="rgba(120, 130, 164, 0.2) 0px 3px 5px"
                id={props.type}
                onChange={props.handleInputchange}
                _hover={{
                    background: "brand.grey",
                }}
                _focus={{
                    outline: "none",
                }}
                {...props} />
        </InputGroup>
    );
};
