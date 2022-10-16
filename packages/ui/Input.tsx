import { FunctionComponent } from "react";
import { Input as InputBase, InputGroup, InputLeftElement } from "@chakra-ui/react";

type InputProps = {
  placeholder?: string;
  inputField?: string;
  id?: string;
  type?: string;
  name?: string;
  icon?: any;
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
};

export const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <InputGroup>
      <InputBase
        autoComplete="off"
        placeholder={props.placeholder}
        cursor="pointer"
        padding="1rem"
        value={props.value}
        name={props.name}
        type={props.type}
        bg="brand.white"
        id={props.type}
        onChange={props.onChange}
        focusBorderColor="brand.grey"
        color="brand.secondaryText"
        autoFocus={props.autofocus}
        _hover={{
          background: "brand.hovered",
        }}
        _focus={{
          outline: "none",
          background: "brand.highlight",
        }}
        _placeholder={{ opacity: 1, color: "brand.secondaryText" }}
      />
    </InputGroup>
  );
};
