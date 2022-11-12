import React, { FC } from "react";
import { Button as ButtonBase, ScaleFade } from "@chakra-ui/react";

type ButtonVariant = "Outlined" | "Link" | null;
type ButtonColor = "Primary" | "Secondary" | null;

// type Button
// <Button variant="outlined" color="secondary">Hello</Button>
// <Button variant="outlined" color="primary">Hello</Button>
// Use the variant prop to change the visual style of the Button. You can set the value to solid, ghost, outline, or link.
// https://chakra-ui.com/docs/components/button#button-variants

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
  type?: "button" | "submit" | "reset" | undefined;
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
  fullWidth,
  border = "solid 0.10rem #eee",
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
        type="type"
      >
        {children}
      </ButtonBase>
    </ScaleFade>
  );
};


// import darken , mode , whiten } from @ chakra - ul / theme - tool
// export const ButtonStyles = {
//  // style object for base or default style
//  baseStyle : { } ,
//  // styles for different sizes ( " sm " , " md " , " lg " )
//   sizes : { } ,
// } ;
//   // styles for different visual variants ( " outline " , " solid " )
//   variants : {
//     primary : ( props ) ⇒ ( {
//       bg : " primary " ,
//       color : " white " ,
//       _hover : {
//         bg : mode ( darken ( " primary " , 20 ) , whiten ( " primary " , 20 ) ) ( pr
//         boxShadow : " md " ,
//       } ,
//     } ) ,
//     secondary : ( props ) ⇒ ( {
//       bg : " secondary " ,
//       color : " white " ,
//       _hover : {
//         bg : mode ( darken ( " secondary " , 20 ) , whiten ( " secondary " , 20 )
//         boxShadow : " md " ,
//       } ,
//     } ) ,
//   // default values for size and variant
//   defaultProps : { } ,