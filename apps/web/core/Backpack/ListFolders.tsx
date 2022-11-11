import { FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
    Stack,
    Text,
    Flex,
    Heading,
    Box,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/react";
import { Card, IconButton, EmptyState } from "ui";
import { useFetch } from "hooks/useSwr";
import { RiFolder5Line } from "react-icons/ri";
import {
    FiMoreHorizontal,
    FiFolder,
    FiFolderPlus
} from "react-icons/fi";
import { Backpack, Folder } from "@prisma/client";

// link Google Drive
// import youtube subscriptions and playlists
// notify users when a new video is uploaded

export type FolderOverviewProps = {
    folder: Folder;
};
export const FolderOverview: FC<FolderOverviewProps> = ({ folder }) => {
    return (
        <LinkBox  width="30%">
            <Card>
                <Stack gap={4}>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Box
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                            color="brand.accent"
                            fontWeight="700"
                            bg="brand.highlight2"
                            p="4"
                            borderRadius="1rem"
                        >
                            <FiFolder />
                        </Box>
                        <IconButton>
                            <FiMoreHorizontal />
                        </IconButton>
                    </Flex>
                    <LinkOverlay href={`/backpack/${folder.title.toLowerCase()}`}>
                        <Stack>
                            <Heading size="sm">{folder.title}</Heading>
                            <Text color='brand.secondaryText'>0 files</Text>
                        </Stack>
                    </LinkOverlay>
                </Stack>
            </Card>
        </LinkBox>

    )
}


export type ListFoldersProps = {
    backpack: Backpack;
};
export const ListFolders: FC<ListFoldersProps> = ({ backpack }) => {

    const { data: folders, isLoading, isError } = useFetch(`/backpacks/${backpack?.id}/folders`);
    const [parent] = useAutoAnimate();

    if (isError) {
        return <Text>Failed to Load Folders</Text>
    }
    if (isLoading) {
        return <Text>Loading Folders</Text>
    }

    if (folders?.length === 0) {
        return (
            <EmptyState
                heading="Create a new folder"
                description="The Backpack is designed to integrate seamlessly with your everyday life. You can easily track your progress and objectives, as well as stay on top of your life's details - whether it's a calendar, a to-do list or a checklist of your favorite recipes."
                icon={<RiFolder5Line size="1.5rem" />}
            />
        )
    }

    // use under_scores for spaced out folder names
    return (
        <Stack color='brand.primaryText'>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm">Folders</Heading>
                <Flex gap={2}>
                    <IconButton>
                        <FiFolderPlus />
                    </IconButton>
                    <IconButton>
                        <FiMoreHorizontal />
                    </IconButton>
                </Flex>
            </Flex>
            <Flex gap={4} flexWrap="wrap" ref={parent}>
                {folders?.map((folder: Folder) => <FolderOverview key={folder.id} folder={folder} />)}
            </Flex>
        </Stack>
    );
}
