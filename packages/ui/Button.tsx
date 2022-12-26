import React, { FC } from "react";
import { Button as ButtonBase, ScaleFade } from "@chakra-ui/react";

type ButtonVariant = "Outlined" | "Link" | null;
type ButtonColor = "Primary" | "Secondary" | null;
type ButtonType = "button" | "submit" | "reset" | undefined;

type ButtonProps = {
  size?: string;
  onClick?: (e: React.MouseEvent) => void;
  fullWidth?: boolean;
  icon?: any; // optional 
  color?: ButtonColor | string;
  bg?: string;
  loadingText?: string;
  isLoading?: boolean;
  width?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  type?: ButtonType;
  style?: React.CSSProperties;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  bg = "brand.primary",
  color = "brand.primaryText",
  isLoading = false,
  loadingText,
  disabled = false,
  size = "md",
  width = "100%",
  variant,
  fullWidth = false,
  type = "button"
}) => {

  return (
    <ScaleFade initialScale={0.1} in={true}>
      <ButtonBase
        onClick={onClick}
        colorScheme="brand"
        isLoading={isLoading}
        loadingText={loadingText}
        boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
        px={4}
        width={width}
        size={size}
        borderRadius="0.5rem"
        variant={variant}
        disabled={disabled}
        bg={bg}
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
        type={type}
      >
        {children}
      </ButtonBase>
    </ScaleFade>
  );
};