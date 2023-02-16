import { useState } from "react";
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Tag,
  TagLeftIcon,
  TagLabel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Button, Card, IconButton } from "ui";
import { Routine, RoutineType } from "@prisma/client";
import {
  FiChevronRight,
  FiTrash2,
  FiSunrise,
  FiBriefcase,
  FiHeart,
  FiBarChart2,
  FiClock,
  FiUsers,
} from "react-icons/fi";
import moment from "moment";
import { client } from "utils/client";
import { LinkFolderModal } from "core/Backpack/LinkFolder";
import NextLink from "next/link";
import {
  addHours,
  parse,
  format,
  formatDistance,
  formatRelative,
  subDays,
} from "date-fns";

import {
    HiOutlineBell,
    HiOutlineHome,
    HiOutlineTemplate,
    HiOutlineClipboardCheck,
    HiOutlineCollection,
  } from "react-icons/hi";

type RoutineItemProps = {
  routine: Routine;
};

export const RoutineItem = ({ routine }: RoutineItemProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteRoutine = () => {
    setIsLoading(true);
    client
      .delete(`/routines/${routine.id}`)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        // cancel();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <NextLink href={`routines/${routine.id}`}>
      <LinkBox>
        <Card>
          <Flex>
            <Flex gap={4} alignItems="center" width="100%">
              <Stack width="100%">
                <LinkOverlay>
                  <Flex alignItems="center" gap={8}>
                    <Heading size="sm" color="brand.accent">{routine.title}</Heading>
                  </Flex>
                </LinkOverlay>
                <Flex gap={4}>
                  <Text width="fit-content">{`${format(
                    new Date(routine.startsAt),
                    "HH:mm"
                  )} - ${format(new Date(routine.finishesAt), "HH:mm")}`}</Text>
                </Flex>
                <Flex gap={4}>
                <Tag bg="brand.highlight1" color="brand.primaryText">
                    <TagLeftIcon as={FiClock} />
                    <TagLabel>{routine.duration} hrs</TagLabel>
                  </Tag>
                  <Tag bg="brand.highlight2" color="brand.primaryText">
                    <TagLeftIcon as={HiOutlineClipboardCheck} />
                    <TagLabel>3 objectives</TagLabel>
                  </Tag>
                </Flex>
              </Stack>
            </Flex>
            <Stack alignItems="flex-end">
              <Popover>
                <PopoverTrigger>
                  <IconButton
                    aria-label={""}
                    _hover={{
                      bg: "brand.hovered",
                    }}
                  >
                    <FiChevronRight />
                  </IconButton>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Manage Routine</PopoverHeader>
                  <PopoverBody>
                    <Stack>
                      <Button
                        size="sm"
                        onClick={deleteRoutine}
                        icon={<FiTrash2 />}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Stack>
          </Flex>
        </Card>
      </LinkBox>
    </NextLink>
  );
};
