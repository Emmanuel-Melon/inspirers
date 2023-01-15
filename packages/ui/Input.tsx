import { FunctionComponent } from "react";
import {
  Input as InputBase,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

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
  autoFocus?: boolean;
};

export const Input = (props: InputProps) => {
  return (
    <InputBase
      autoComplete="off"
      placeholder={props.placeholder}
      cursor="pointer"
      value={props.value}
      name={props.name}
      type={props.type}
      bg="brand.white"
      id={props.type}
      variant="filled"
      onChange={props.onChange}
      focusBorderColor="brand.white"
      color="brand.secondaryText"
      autoFocus={props.autoFocus}
      _hover={{
        background: "brand.white",
      }}
      _focus={{
        outline: "none",
        background: "brand.white",
      }}
      _placeholder={{ opacity: 1, color: "brand.secondaryText" }}
      {...props}
    />
  );
};
