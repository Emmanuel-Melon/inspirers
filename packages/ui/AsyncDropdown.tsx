import { FC, useState, useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";
import { useFetch } from "hooks/useSwr";

type AsyncDropdownProps = {
  placeholder?: string;
  optionsUrl?: string;
}

export const AsyncDropdown: FC<AsyncDropdownProps> = ({ 
  optionsUrl, 
  placeholder,
  ...props
}) => {


  const { data, isLoading, isError } = useFetch(optionsUrl);
  const transformOptions = optionsArr => {
    return optionsArr.map(option => {
      return { value: option.id, label: option.title || option.name }
    })
  }

  return (
    <Select
      tagVariant="solid"
      placeholder={placeholder}
      options={data && transformOptions(data)}
      size="sm"
      {...props}
    />
  );
};
