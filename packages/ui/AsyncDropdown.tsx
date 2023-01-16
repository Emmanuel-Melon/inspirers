import { useState, useEffect } from "react";
import { Select, Box, Spinner } from "@chakra-ui/react";

const AsyncDropdown = ({ optionsUrl }) => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box>
      {isLoading ? (
        <Spinner size="md" color="gray.500" />
      ) : (
        <Select placeholder="Select an option">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      )}
    </Box>
  );
};

export default AsyncDropdown;
