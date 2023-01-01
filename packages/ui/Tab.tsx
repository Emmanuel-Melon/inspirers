import React, { useCallback } from "react";
import {
  useMultiStyleConfig,
  useTab,
  Button,
  
} from "@chakra-ui/react";

export const CustomTab = React.forwardRef(function InnerComponent(props, ref) {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Button
        {...tabProps}
        size="sm"
        borderRadius="1rem"
        leftIcon={props.icon}
        bg={isSelected ? "brand.highlight1" : "brand.highlight2"}
        color={isSelected ? "brand.primaryText" : "brand.secondaryText"}
        _hover={{
          bg: isSelected ? "brand.hovered" : "brand.highlight3",
          color: isSelected ? "brand.secondaryText" : "brand.secondaryText",
        }}
      >
        {tabProps.children}
      </Button>
    );
  });