import React from "react";
import {
    Stack,
    FormControl,
    Switch,
    FormLabel,
    Heading
} from "@chakra-ui/react";

export const NotificationSettings = () => {

    return (
        <Stack gap={4}>
            <Stack>
                <Heading size="sm">Email Alerts</Heading>
                <Stack
                    alignItems="flex-start"
                    width="100%"
                    gap={2}
                    bg="brand.white"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    borderRadius="1rem"
                    p="4"
                >
                    <FormControl display='flex' alignItems='center' justifyContent="space-between">
                        <FormLabel htmlFor='email-alerts' mb='0' color="brand.secondaryText">
                            Connection Requests
                        </FormLabel>
                        <Switch colorScheme='green' id='email-alerts' color="brand.primary" />
                    </FormControl>
                    <FormControl display='flex' alignItems='center' justifyContent="space-between">
                        <FormLabel htmlFor='email-alerts' mb='0' color="brand.secondaryText">
                            Mentions
                        </FormLabel>
                        <Switch id='email-alerts' color="brand.primary" />
                    </FormControl>
                    <FormControl display='flex' alignItems='center' justifyContent="space-between">
                        <FormLabel htmlFor='email-alerts' mb='0' color="brand.secondaryText">
                            Messages
                        </FormLabel>
                        <Switch id='email-alerts' color="brand.primary" />
                    </FormControl>
                </Stack>
            </Stack>
            <Stack>
                <Heading size="sm">Push Notifications</Heading>
                <Stack
                    alignItems="flex-start"
                    width="100%"
                    gap={2}
                    bg="brand.white"
                    boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    borderRadius="1rem"
                    p="4"
                >
                    <FormControl display='flex' alignItems='center' justifyContent="space-between">
                        <FormLabel htmlFor='email-alerts' mb='0' color="brand.secondaryText">
                            Routines
                        </FormLabel>
                        <Switch colorScheme='green' id='email-alerts' color="brand.primary" />
                    </FormControl>
                    <FormControl display='flex' alignItems='center' justifyContent="space-between">
                        <FormLabel htmlFor='email-alerts' mb='0' color="brand.secondaryText">
                            Reflections
                        </FormLabel>
                        <Switch id='email-alerts' color="brand.primary" />
                    </FormControl>
                </Stack>
            </Stack>
        </Stack>
    )
}