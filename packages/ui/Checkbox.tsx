import {
  useCheckboxGroup,
  useCheckbox,
  Flex,
  chakra,
  Box,
  Text,
} from "@chakra-ui/react";

export const CustomCheckbox = ({ text, value, ...props }) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);
  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      bg="brand.white"
      borderRadius="1rem"
      rounded="lg"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="brand.secondary"
        borderRadius="0.2rem"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && (
          <Box w={2} h={2} bg="brand.secondary" borderRadius="0.2rem" />
        )}
      </Flex>
      <Text {...getLabelProps()}>
        {text}
        {props.value}
      </Text>
    </chakra.label>
  );
};
