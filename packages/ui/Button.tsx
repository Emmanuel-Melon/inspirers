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
  size = "md",
  width = "100%",
  variant,
  fullWidth
}) => {
  return (
    <ScaleFade initialScale={0.1} in={true}>
      <ChakraButton
        onClick={onClick}
        colorScheme="brand"
        isLoading={isLoading}
        loadingText={loadingText || "loading"}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        px={4}
        width={width}
        size={size}
        variant={variant}
        border="none"
        disabled={disabled}
        bg={bg || "brand.primary"}
        color={color || "brand.white"}
        borderRadius="1rem"
        cursor="pointer"
        leftIcon={icon}
        _hover={{
          background: "brand.primaryHover"
        }}
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
