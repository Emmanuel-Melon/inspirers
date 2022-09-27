import React, { FC } from "react";
import { Button as ButtonBase, ScaleFade } from "@chakra-ui/react";

export type ButtonProps = {
  size?: "xs" | "sm" | "md" | "lg";
  onClick: (e: React.MouseEvent) => void;
  fullWidth?: boolean;
  icon?: React.ReactElement;
  color?: string;
  bg?: string;
  loadingText?: string;
  isLoading?: boolean;
  width?: string;
  disabled?: boolean;
  variant?: string; // add button variants
  border?: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  bg,
  color = "brand.primaryText",
  isLoading = false,
  loadingText,
  disabled = false,
  size = "md",
  width = "100%",
  variant,
  fullWidth,
  border,
}) => {
  return (
    <ScaleFade initialScale={0.1} in={true}>
      <ButtonBase
        onClick={onClick}
        colorScheme="brand"
        isLoading={isLoading}
        loadingText={loadingText || "Loading"}
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        px={4}
        width={width}
        size={size}
        borderRadius="0.5rem"
        variant={variant}
        border={border || "none"}
        disabled={disabled}
        bg={bg || "brand.primary"}
        color={color}
        cursor="pointer"
        leftIcon={icon}
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
        _hover={{
          bg: "brand.hovered"
        }}
      >
        {children}
      </ButtonBase>
    </ScaleFade>
  );
};
