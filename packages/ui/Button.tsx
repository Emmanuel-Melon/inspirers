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
}) => {
  return (
    <ScaleFade initialScale={0.1} in={true}>
      <ChakraButton
        onClick={onClick}
        colorScheme="brand"
        isLoading={isLoading}
        loadingText={loadingText || "loading"}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
        px={5}
        width={width}
        py={3}
        variant={variant}
        outline="none"
        disabled={disabled}
        bg={bg || "brand.white"}
        color={color || "brand.secondary"}
        size={size}
        leftIcon={icon}
        _hover={{
          background: "brand.accent",
          color: "brand.white",
        }}
        border="border.primary"
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
        justifyContent="flex-start"
      >
        {children}
      </ChakraButton>
    </ScaleFade>
  );
};
