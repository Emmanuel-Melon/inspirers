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
        borderColor={props.borderColor || "brand.accent"}
        borderRadius="0.5rem"
        bg="brand.white"
        px="2"
        py="1"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      >
        {props.children}
      </Box>
    </Box>
  );
};
