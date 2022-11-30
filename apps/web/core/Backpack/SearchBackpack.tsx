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
import { useFetch } from "../../hooks/useSwr";
import psl from "psl";


// Custom hook to get the width of the screen
// https://usehooks.com/useWindowSize/
// popoverr is aligned to the left when a custom IconButton is used
// popover disappears when mouse leaves the popover
// use a modal?


// link resources to routines
// queue resources in routines
// queue tasks in routines
// drag and drop to reorder tasks/resources in routines
export const SearchBackpack = ({ isLoading, resources, view }) => {
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
