import { useRadio, Box } from "@chakra-ui/react";
import { Card } from "./Card";

export const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" borderRadius="1rem" p="0.5rem" >
      <input {...input} />
      <Box
        {...checkbox}
        _checked={props.checked}
        cursor="pointer"
        _focus={props.focus}
        borderRadius="1rem"

      >
        {props.children}
      </Box>
    </Box>
  );
};
