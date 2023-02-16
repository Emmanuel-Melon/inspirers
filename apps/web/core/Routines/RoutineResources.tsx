import {
  Box,
  Stack,
  Text,
  Link,
  Flex,
  Heading,
  Tag,
  IconButton,
} from "@chakra-ui/react";
import { AsyncDropdown, Button, Card, CustomCheckbox } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import { FiArrowRight, FiMoreHorizontal, FiFolder } from "react-icons/fi";
import { LinkFolderButton } from "core/Backpack/AddResourceForm";
import { useFetch } from "hooks/useSwr";

import { Controller, useForm } from "react-hook-form";

const RoutineResource = ({ resource }) => {
  return (
    <Card>
      <Flex gap={2} justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap={2}>
          <Box color="brand.accent">
            <FiFolder />
          </Box>
          <Stack>
            <Heading size="sm">{resource.title}</Heading>
          </Stack>
        </Flex>
        <Button>Link Folder</Button>
      </Flex>
    </Card>
  );
};

export const RoutineResources = ({ routine }) => {
  const { control, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      linkedFolderId: "",
    },
  });
  
  const {
    data: resources,
    isLoading,
    isError,
  } = useFetch(`backpacks/cldxkhcr90001btj6bhh9cdqr/folders`);
  
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }
  return (
    <Stack alignItems="flex-start">
      {resources?.length === 0 ? (
        <Card>
          <Flex gap={4} alignItems="center" justifyContent="space-between">
            <Text color="brand.secondaryText">No folders</Text>
          </Flex>
        </Card>
      ) : (
        resources?.map((resource) => (
          <RoutineResource key={resource.id} resource={resource} />
        ))
      )}
    </Stack>
  );
};
