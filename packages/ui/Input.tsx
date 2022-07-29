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
  onChange: any;
};

export const TextInput: FunctionComponent<InputProps> = (props) => {
  return (
    <Input
      autoComplete="off"
      placeholder={props.placeholder}
      cursor="pointer"
      padding="1rem"
      variant="outline"
      value={props.value}
      name={props.name}
      type={props.type}
      bg="brand.white"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      borderRadius="1rem"
      id={props.type}
      onChange={props.onChange}
      focusBorderColor="brand.accent"
      _hover={{
        background: "brand.highlight1",
      }}
      _focus={{
        outline: "none",
        background: "brand.highlight",
      }}
      _placeholder={{ opacity: 1, color: "brand.primary" }}
    />
  );
};
