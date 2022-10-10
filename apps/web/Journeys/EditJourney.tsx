import { FC, useCallback, useState } from "react";
import { Flex, Heading, Text, Box, Avatar, Stack } from "@chakra-ui/react";
import { Button, Card, IconButton, Input, Modal } from "ui";
import {
    FiX
} from "react-icons/fi";

export const EditJourney = () => {
    return (
        <Stack p="4" width="500px">
            <Flex alignItems="center" gap={4} justifyContent="space-between">
                <Heading size="md">Edit Journey</Heading>
                <IconButton>
                    <FiX />
                </IconButton>
            </Flex>
            <Stack>
                <Input 
                    placeholder="Journey Title" 
                />
                <Button>Save</Button>
            </Stack>
        </Stack>
    )
}

// generate sharable links
// generate embeddable links
// generate referral links
// offer premium resources i.e paid courses, books, etc for referrals
// reach out to influencers and ask them to curate Journeys that they could profit off!
// https://www.convertflow.com/campaigns/coming-soon-landing-pages