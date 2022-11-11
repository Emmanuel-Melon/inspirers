import { FC, useState, useRef, useEffect } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {
    Box,
    Image,
    Img,
    LinkBox,
    LinkOverlay,
    Stack,
    Text,
    Flex,
    Heading,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    IconButton,
    Tag
} from "@chakra-ui/react";
import { Button, Card, Modal } from "ui";
import moment from 'moment';
import Link from "next/link";
import { Resource } from "@prisma/client";
import { client } from "utils/client";

import {
    FiVideo,
    FiExternalLink,
    FiMoreHorizontal,
    FiFolder,
    FiPlus,
    FiEdit2,
    FiTrash2,
    FiShare2,
    FiRotateCw
} from "react-icons/fi";
import { useFetch } from "../../hooks/useSwr";
import psl from "psl";


// Custom hook to get the width of the screen
// https://usehooks.com/useWindowSize/
// popoverr is aligned to the left when a custom IconButton is used
// popover disappears when mouse leaves the popover
// use a modal?

type ResourceCardProps = {
    resource: Resource;
}

// users could upload audio, video.
export const ResourceCard: FC<ResourceCardProps> = ({ resource }) => {
    const [isHovering, setIsHovering] = useState(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    // consider domains that start with www. as the same as the domain without www.
    const getHostnameFromRegex = (url: string | null) => {
        // run against regex
        const matches = url?.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        // extract hostname (will be null if no match is found)
        console.log(matches);
        return matches && matches[0];
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const url = getHostnameFromRegex(resource.resourceUrl);
    const icon = `url(${url}/favicon.ico)`;

    const deleteResource = () => {
        setIsLoading(true);
        client.delete(`/backpacks/resources/${resource.id}`).then(res => {
            console.log(res);
            setIsLoading(false);
            //  cancel();
        })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
  
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
                <LinkBox>
            <Card>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <Flex gap={4} alignItems="center">
                        <Box
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" color="brand.secondary"
                            bg="brand.highlight1"
                            p="2"
                            borderRadius="1rem"
                            as="div"
                            style={{ backgroundImage: icon, backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }}
                        />
                        <Stack>
                            <LinkOverlay  href={`${resource.resourceUrl}`} target="_blank">
                            <Heading size="xs">{resource.title}</Heading>
                            <Text color="brand.secondaryText">{resource.resourceUrl}</Text></LinkOverlay>
                            <Flex gap={2}>
                                <Tag width="fit-content" bg="brand.highlight3" color="brand.accent" borderRadius="1rem">AWS</Tag>
                                <Tag width="fit-content" bg="brand.highlight3" color="brand.accent" borderRadius="1rem">Cloud</Tag>
                                <Tag width="fit-content" bg="brand.highlight3" color="brand.accent" borderRadius="1rem">Infrastructure</Tag>
                            </Flex>
                        </Stack>
                    </Flex>
                    <Flex gap={2} alignItems="center">
                        {
                            isHovering ? (
                                <Flex gap={2}>
                                    <IconButton onClick={openModal}>
                                        <FiEdit2 />
                                    </IconButton>
                                    <Popover>
                                        <PopoverTrigger>
                                            <IconButton aria-label={""} _hover={{
                                                bg: "brand.hovered"
                                            }}>
                                                <FiMoreHorizontal />
                                            </IconButton>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverHeader>Manage Resource</PopoverHeader>
                                            <PopoverBody>
                                                <List spacing={2} color='brand.secondaryText'>
                                                    <ListItem color='brand.secondaryText'>
                                                        <ListIcon as={FiShare2} color='brand.secondaryText' />
                                                        Share
                                                    </ListItem>
                                                    <ListItem color='brand.secondaryText'>
                                                        <ListIcon as={FiRotateCw} color='brand.secondaryText' />
                                                        Link to Routine
                                                    </ListItem>
                                                    <ListItem
                                                        color='brand.secondaryText'
                                                        onClick={deleteResource}
                                                    >
                                                        <ListIcon as={FiTrash2} color='brand.secondaryText' />
                                                        Delete
                                                    </ListItem>
                                                </List>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </Flex>
                            ) : null
                        }
                    </Flex>
                </Flex>
            </Card>
        </LinkBox>
        <Modal show={isModalOpen} close={closeModal}>
        <Text>Edit Resource</Text>
      </Modal>
        </>
    )
}

// link resources to routines
// queue resources in routines
// queue tasks in routines
// drag and drop to reorder tasks/resources in routines
export const ListRecentlyAdded = ({ resources }) => {
    const [parent] = useAutoAnimate(/* optional config */)
    return (
        <Stack color="brand.primaryText">
            <Flex justifyContent="space-between">
                <Heading size="md">Recently Added</Heading>
                <Flex gap={2}>
                    <IconButton>
                        <FiPlus />
                    </IconButton>
                    <IconButton>
                        <FiMoreHorizontal />
                    </IconButton>
                </Flex>
            </Flex>
            <Stack ref={parent}>
                {
                    resources?.map(resource => (
                        <ResourceCard resource={resource} />
                    ))
                }
            </Stack>
        </Stack>
    );
}


