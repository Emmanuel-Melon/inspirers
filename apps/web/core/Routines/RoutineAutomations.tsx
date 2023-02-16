import {
  Avatar,
  Image,
  Img,
  Stack,
  Text,
  Link,
  Flex,
  Heading,
  Box,
  LinkBox,
  LinkOverlay,
  Progress,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Tag,
  IconButton,
} from "@chakra-ui/react";
import { AsyncDropdown, Button, Card, CustomCheckbox } from "ui";
import { useRouter } from "next/router";
import moment from "moment";
import {
  FiFlag,
  FiPlayCircle,
  FiClock,
  FiPlus,
  FiArrowRight,
  FiMoreHorizontal,
  FiLink,
} from "react-icons/fi";
import { LinkFolderButton } from "core/Backpack/AddResourceForm";
import { useFetch } from "hooks/useSwr";

import { Controller, useForm } from "react-hook-form";

const RoutineAutomation = ({ automation }) => {
  return (
    <Card>
      <Flex gap={2} justifyContent="space-between">
        <Stack>
          <Heading size="xs">{automation.title}</Heading>
        </Stack>
        <IconButton size="sm" bg="brand.primary" aria-label={"arrow right"}>
          <FiArrowRight />
        </IconButton>
      </Flex>
    </Card>
  );
};

export const RoutineAutomations = ({ routine }) => {
  const { control, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      linkedFolderId: "",
    },
  });
  const {
    data: automations,
    isLoading,
    isError,
  } = useFetch(`routines/cldrlwksq0000btwjjoqql4ws/automations`);

  if (isLoading) {
    return <p>Loading</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }
  return (
    <Stack alignItems="flex-start">
      <Flex justifyContent="space-between" width="100%">
        <Stack>
          <Heading size="sm" color="brand.secondary">
            Automations
          </Heading>
          <Text color="brand.secondaryText">
            This is what you need to complete this routine.
          </Text>
        </Stack>
        <IconButton size="sm" bg="brand.highlight2" aria-label={""}>
          <FiMoreHorizontal />
        </IconButton>
      </Flex>
      {automations.length === 0 ? (
        <Card>
          <Flex gap={4} alignItems="center" justifyContent="space-between">
            <Text color="brand.secondaryText">No Resources Linked</Text>
            <Controller
              name="linkedFolderId"
              control={control}
              render={({ field }) => (
                <AsyncDropdown
                  optionsUrl=""
                  {...field}
                  placeholder="Choose a folder"
                />
              )}
            />
          </Flex>
        </Card>
      ) : (
        automations?.map((automation) => (
          <RoutineAutomation key={automation.id} automation={automation} />
        ))
      )}
    </Stack>
  );
};
