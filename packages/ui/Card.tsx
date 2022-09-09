import { Box } from "@chakra-ui/react";

type CardProps = {
  children: any,
  onClick: any
}

export const Card = ({ children, onClick }: CardProps) => {
  return (
    <Box
      gap={4}
      borderRadius="1rem"
      bg="brand.white"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      p="4"
      width={"100%"}
      alignItems="center"
      justifyContent="space-between"
      color="brand.primaryText"
      cursor="pointer"
      onClick={onClick}
    >
      {children}
    </Box>
  );
};
