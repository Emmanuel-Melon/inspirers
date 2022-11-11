import { Box } from "@chakra-ui/react";

type CardProps = {
  children: React.ReactNode,
  onClick?: () => void,
  bg?: string
}

// box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
export const Card = ({ children, onClick, bg = "brand.white" }: CardProps) => {
  return (
    <Box
      gap={4}
      borderRadius="1rem"
      bg={bg}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      p="4"
      width={"100%"}
      alignItems="center"
      justifyContent="space-between"
      color="brand.primaryText"
      cursor="pointer"
      onClick={onClick}
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Box>
  );
};
