import React, { FC } from "react";
import { Button as ChakraButton, ScaleFade } from "@chakra-ui/react";

type ButtonProps = {
  size?: string;
  onClick: (e: React.MouseEvent) => void;
  fullWidth?: boolean;
  icon?: any;
  color?: string;
  bg?: string;
  loadingText?: string;
  isLoading?: boolean;
  width?: string;
  disabled?: boolean;
  variant?: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  bg,
  color,
  isLoading = false,
  loadingText,
  disabled = false,
  size = "lg",
  width = "100%",
  variant,
  border
}) => {
  return (
    <ScaleFade initialScale={0.1} in={true}>
      <ChakraButton
        onClick={onClick}
        colorScheme="brand"
        isLoading={isLoading}
        loadingText={loadingText || "loading"}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        px={5}
        width={width}
        py={3}
        variant={variant}
        outline="none"
        disabled={disabled}
        bg={bg || "#664900"}
        color={color || "#fff"}
        padding="0.5rem"
        borderRadius="0.5rem"
        size={size}
        cursor="pointer"
        leftIcon={icon}
        _hover={{
          background: "brand.accent",
          color: "brand.white",
        }}
        border={"none"}
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
        justifyContent="center"
      >
        {children}
      </ChakraButton>
    </ScaleFade>
  );
};
