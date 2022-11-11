import { useRadio, Box } from "@chakra-ui/react";
import { Card } from "./Card";

export const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <Card>
        <input {...input} />
        <Box
          {...checkbox}
          borderRadius="0.5rem"
          cursor="pointer"
          _checked={props.checked}
          _hover={props.hover}
          _focus={props.focus}
        >
          {props.children}
        </Box>
      </Card>
    </Box>
  );
};
