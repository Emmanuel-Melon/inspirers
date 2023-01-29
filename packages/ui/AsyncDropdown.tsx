import { FC, useState, useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";

type AsyncDropdownProps = {
  placeholder?: string;
  optionsUrl?: string;
}

export const AsyncDropdown: FC<AsyncDropdownProps> = ({ 
  optionsUrl, 
  placeholder,
  ...props
}) => {



  return (
    <Select
      tagVariant="solid"
      placeholder={placeholder}
      options={[]}
      size="sm"
      {...props}
    />
  );
};
