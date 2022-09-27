import { FunctionComponent } from "react";
import { Input as InputBase, InputGroup, InputLeftElement } from "@chakra-ui/react";
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
  onChange: any;
};

export const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <InputBase
      autoComplete="off"
      placeholder={props.placeholder}
      cursor="pointer"
      padding="1rem"
      variant='filled'
      value={props.value}
      name={props.name}
      type={props.type}
      bg="brand.highlight1"
      id={props.type}
      onChange={props.onChange}
      focusBorderColor="brand.secondary"
      autoFocus={props.autofocus}
      _hover={{
        background: "brand.hovered",
      }}
      _focus={{
        outline: "none",
        background: "brand.highlight2",
      }}
      _placeholder={{ opacity: 1, color: "brand.primaryText" }}
    />
  );
};
