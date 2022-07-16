import { useRadio, Box } from "@chakra-ui/react";

export const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        _checked={props.checked}
        _hover={props.hover}
        _focus={props.focus}
        border={props.border || "none"}
        borderRadius="1rem"
      >
        {props.children}
      </Box>
    </Box>
  );
};
