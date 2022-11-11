import { FC } from 'react';
import { IconButton as IconButtonBase } from "@chakra-ui/react";

export type IconButtonProps = {
    children?: React.ReactNode;
    label?: string;
    onClick?: () => void;
    size?: "xs" | "sm" | "md" | "lg";
    color?: string;
}

export const IconButton: FC<IconButtonProps> = ({ 
    color = "brand.secondaryText",
    children, 
    label, 
    onClick,
    size = "sm",
}) => {
    return (
        <IconButtonBase
            aria-label={label}
            onClick={onClick}
            bg="brand.white"
            borderRadius="50%"
            p="2"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
            color={color}
            _hover={{
                bg: "brand.hovered",
            }}
            size={size}
        >
            {children}
        </IconButtonBase>
    );
}
