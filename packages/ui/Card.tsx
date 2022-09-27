import { Box } from "@chakra-ui/react";

type CardProps = {
  children: React.ReactNode,
  onClick?: () => void,
  bg?: string
}

export const Card = ({ children, onClick, bg = "brand.white" }: CardProps) => {
  return (
    <Box
      gap={4}
      borderRadius="1rem"
      bg={bg}
      boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"
      p="4"
      width={"100%"}
      alignItems="center"
      justifyContent="space-between"
      color="brand.primaryText"
      cursor="pointer"
      onClick={onClick}
      _hover={{ bg: "brand.hovered2" }}
    >
      {children}
    </Box>
  );
};
