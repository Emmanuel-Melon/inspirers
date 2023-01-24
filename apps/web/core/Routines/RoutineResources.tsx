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
    LinkBox, LinkOverlay,
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
import { FiFlag, FiPlayCircle, FiClock, FiPlus, FiArrowRight, FiMoreHorizontal, FiLink } from "react-icons/fi";
import { LinkFolderButton } from "core/Backpack/AddResourceForm";

import { Controller, useForm } from "react-hook-form";

const RoutineResource = () => {
    return (
        <Card>
        <Flex gap={2} justifyContent="space-between">
            <Stack>
                <Heading size="xs">Anderew Mead - Node.js Course</Heading>
                <Flex gap={2}>
                    <Tag
                        size="sm"
                        width="fit-content"
                        bg="brand.highlight2"
                    >
                        Inspirers
                    </Tag>
                    <Tag
                        size="sm"
                        width="fit-content"
                        bg="brand.highlight3"
                    >
                        Inspirers
                    </Tag>
                    <Tag
                        size="sm"
                        width="fit-content"
                        bg="brand.highlight1"
                    >
                        Inspirers
                    </Tag>
                </Flex>
            </Stack>
            <IconButton size="sm" bg="brand.primary">
                <FiArrowRight />
            </IconButton>
        </Flex>
    </Card>
    )
}

export const RoutineResources = ({ routine }) => {

    const { control, register, handleSubmit, setValue } = useForm({
        defaultValues: {
          linkedFolderId: "",
        },
      });
    const resources = [];
    return (
        <Stack alignItems="flex-start" >
            <Flex justifyContent="space-between" width="100%">
            <Stack>
                    <Heading size="sm" color="brand.secondary">Backpack</Heading>
                    <Text color="brand.secondaryText">Pack resources</Text>
                </Stack>
                <IconButton size="sm" bg="brand.highlight2" aria-label={""}>
                    <FiMoreHorizontal />
                </IconButton>
            </Flex>
            {
                resources.length === 0 ? <Card>
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
                </Card> : resources.map(resource => <RoutineResource key={resource.id} resource={resource} />)
            }
        </Stack>
    )
}