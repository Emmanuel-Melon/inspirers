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
  fullWidth,
  border
}) => {
  return (
    <ScaleFade initialScale={0.1} in={true}>
      <ChakraButton
        onClick={onClick}
        colorScheme="brand"
        isLoading={isLoading}
        loadingText={loadingText || "loading"}
        boxShadow="none"
        px={4}
        width={width}
        size={size}
        variant={variant}
        border={border || "none"}
        disabled={disabled}
        bg={bg || "brand.primary"}
        color={color || "brand.white"}
        cursor="pointer"
        leftIcon={icon}
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
      >
        {children}
      </ChakraButton>
    </ScaleFade>
  );
};
