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

  autoFocus?: boolean;
};

export const Input = ({
  placeholder,
  autoFocus,
  size = "sm",
  width,
  ...props
}: InputProps) => {
  return (
    <InputBase
      autoComplete="off"
      placeholder={placeholder}
      cursor="pointer"
      variant="filled"
      focusBorderColor="brand.accent"
      color="brand.secondaryText"
      autoFocus={autoFocus}
      bg="brand.highlight2"
      size={size}
      _hover={{
        background: "brand.white",
      }}
      width={width}
      _focus={{
        outline: "none",
        background: "brand.white",
      }}
      _placeholder={{ opacity: 1, color: "brand.secondaryText" }}
      {...props}
    />
  );
};
