import { FC } from 'react';
import { Avatar as ChakraAvatar } from "@chakra-ui/react";

type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  name?: string;
  src: string;
  height?: string | number;
};

export const Avatar: FC<AvatarProps> = ({
  size = "md",
  name,
  src,
  height = "auto"
}) => {
  return (
    <ChakraAvatar
      height={height}
      borderRadius="50%"
      size={size}
      name={name}
      src={src}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    />
  );
};
