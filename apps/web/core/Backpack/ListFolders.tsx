import { FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  Stack,
  Text,
  Flex,
  Heading,
  Box,
  LinkBox,
  LinkOverlay,
  Tag,
  TagLabel,
  TagLeftIcon,
  Progress
} from "@chakra-ui/react";
import { Card, IconButton, EmptyState } from "ui";
import { RiFolder5Line } from "react-icons/ri";
import { FiMoreHorizontal, FiFolder, FiFolderPlus, FiUsers, FiBookOpen, FiHeart } from "react-icons/fi";
import { Folder } from "@prisma/client";
import NextLink from "next/link";

export type FolderOverviewProps = {
  folder: Folder;
};
export const FolderOverview: FC<FolderOverviewProps> = ({ folder }) => {
  // using this might be fucked up in list components, it ties the link to the
  return (
    <NextLink
      href={{
        pathname: `/backpacks/${folder.backpackId}/${folder.id}`,
        query: {
          name: folder.title,
          folderId: folder.id,
        },
      }}
      passHref
    >
      <LinkBox flex="1" minW="45%" maxW="50%">
        <Card>
          <Stack gap={2}>
            <Flex alignItems="center" justifyContent="space-between">
              <Box
                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                color="brand.secondaryText"
                fontWeight="700"
                bg="brand.white"
                p="2"
                borderRadius="1rem"
              >
                <FiFolder />
              </Box>
            </Flex>
            <Heading size="sm">{folder?.title}</Heading>
            <LinkOverlay>
            <Flex alignItems="center" gap={2} borderRadius="1rem">
                  <Tag gap={2} alignItems="center" color="brand.secondaryText">
                    <TagLeftIcon as={FiHeart} />
                    <TagLabel>3</TagLabel>
                  </Tag>
                  <Tag gap={2} alignItems="center" color="brand.secondaryText">
                    <TagLeftIcon as={FiBookOpen} />
                    <TagLabel>2</TagLabel>
                  </Tag>
                  <Tag gap={2} alignItems="center" color="brand.secondaryText">
                    <TagLeftIcon as={FiUsers} />
                    <TagLabel>7</TagLabel>
                  </Tag>
                </Flex>
            </LinkOverlay>
            <Progress
            value={2}
            hasStripe
            size="md"
            colorScheme="purple"
            borderRadius="1rem"
            bg="brand.highlight3"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
          />
          <Flex>
            <Text color="brand.secondaryText">Completed Resources 24</Text>
          </Flex>
          </Stack>
        </Card>
      </LinkBox>
    </NextLink>
  );
};

export type ListFoldersProps = {
  folders: Folder[];
  isError?: boolean;
  isLoading?: boolean;
};

// should fetch its own data and probaby receive a key as prop

export const ListFolders: FC<ListFoldersProps> = ({
  isLoading,
  isError,
  folders,
}) => {
  const [parent] = useAutoAnimate();
  if (isError) {
    return <Text>Failed to Load Folders</Text>;
  }

  if (isLoading) {
    return <Text>Loading Folders</Text>;
  }

  if (folders?.length === 0) {
    return (
      <EmptyState
        heading="Create a new folder"
        description="The Backpack is designed to integrate seamlessly with your everyday life. You can easily track your progress and objectives, as well as stay on top of your life's details - whether it's a calendar, a to-do list or a checklist of your favorite recipes."
        icon={<RiFolder5Line size="1.5rem" />}
      />
    );
  }

  return (
    <Stack color="brand.primaryText" width="100%">

      <Flex gap={4} flexWrap="wrap" ref={parent}>
        {folders?.map((folder: Folder) => (
          <FolderOverview key={folder.id} folder={folder} />
        ))}
      </Flex>
    </Stack>
  );
};
