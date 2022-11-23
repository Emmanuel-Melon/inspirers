import { FC } from "react";
import { Stack } from "@chakra-ui/react";

type SectionWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
  height?: string;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({ children, height = "100%" }) => {
  return (
    <Stack
      height={height}
      width="100%"
    >
      {children}
    </Stack>
  );
};
