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
    Progress,
    Tag
} from "@chakra-ui/react";
import { Button, Card, IconButton, EmptyState, Modal, Spinner } from "ui";
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
    FiRotateCw,
    FiShoppingBag,
    FiChevronDown,
    FiFilter
} from "react-icons/fi";
import { useFetch } from "../hooks/useSwr";
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

    console.log(resource);

    // https://www.youtube.com/watch?v=2OY4tE2TrcI
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

    // extract hostname from url
    return (
        <>
            <LinkBox>
                <Card>
                    <Flex
                        alignItems="center"
                        justifyContent="flex-start"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <Flex gap={4} alignItems="flex-start" justifyContent="flex-start">
                            <Box
                                boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" color="brand.secondary"
                                bg="brand.highlight1"
                                p="2"
                                borderRadius="1rem"
                                as="div"
                                style={{ backgroundImage: icon, backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }}
                            />
                            <Stack>
                                <LinkOverlay href={`${resource.resourceUrl}`} target="_blank">
                                    <Heading size="xs">{resource.title}</Heading>
                                </LinkOverlay>
                                <Progress
                                    value={resource?.progress || 0}
                                    borderRadius="1rem"
                                    size="sm"
                                    colorScheme='green'
                                />
                            </Stack>
                            <Stack>
                                <Text>Added</Text>
                                <Text fontSize="xs" color="brand.secondaryText">{moment(resource.createdAt).fromNow()}</Text>
                            </Stack>
                            <Stack>
                                <Text>Type</Text>
                                <Text fontSize="xs" color="brand.secondaryText">{resource.type}</Text>
                            </Stack>
                            <Stack>
                                <LinkOverlay href={`${resource.resourceUrl}`} target="_blank">
                                    <Text size="xs">Topics</Text>
                                </LinkOverlay>
                                <Flex gap={2}>
                                    {
                                        resource?.tags?.map((tag, index) => {
                                            return (
                                                <Tag key={index} width="fit-content" bg={tag.color} color="brand.white" borderRadius="0.5rem" size="sm">{tag.title}</Tag>
                                            )
                                        })
                                    }
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
                                        <Popover matchWidth>
                                            <PopoverTrigger>
                                                <IconButton aria-label={""} _hover={{
                                                    bg: "brand.hovered"
                                                }}>
                                                    <FiMoreHorizontal />
                                                </IconButton>
                                            </PopoverTrigger>
                                            <PopoverContent borderRadius="1rem">
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverHeader>Manage Resource</PopoverHeader>
                                                <PopoverBody >
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
export const ListRecentlyAdded = ({ isLoading, resources, view }) => {
    const [parent] = useAutoAnimate(/* optional config */);

    if (isLoading) {
        return (
            <Flex alignItems="center" justifyContent="center" h="100vh">
                <Spinner />
            </Flex>
        )
    }
    return (
        <Stack color="brand.primaryText">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading size="sm" color="brand.secondaryText">Recently Added</Heading>
                <Flex gap={2}>
                <IconButton>
                        <FiFilter />
                    </IconButton>
                    <IconButton>
                        <FiChevronDown />
                    </IconButton>
                    <IconButton>
                        <FiMoreHorizontal />
                    </IconButton>
                </Flex>
            </Flex>
            {
                view === 'grid' ? (
                    <Flex ref={parent}>
                        {
                            resources && resources?.map(resource => (
                                <ResourceCard resource={resource} />
                            ))
                        }
                    </Flex>
                ) : null
            }
            {
                view === 'list' ? (
                    <Stack ref={parent}>
                        {
                            resources && resources?.map(resource => (
                                <ResourceCard resource={resource} />
                            ))
                        }
                    </Stack>
                ) : null
            }
        </Stack>
    );
}


/**
 *  <EmptyState
                    heading="Fill your backpack"
                    description="Create or find resources all the resources you need to grow your business."
                    icon={<FiShoppingBag size="1rem" />
 */
