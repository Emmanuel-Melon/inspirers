import React, { useContext, useState } from "react";
import {
  Avatar,
  Flex,
  Heading,
  Text,
  VStack,
  Checkbox,
  Tag,
} from "@chakra-ui/react";
import { Button } from "ui";
import Image from "next/image";
import { useFetch } from "../../../hooks/useSwr";

export const RecommendedAccounts = () => {
    const { data, isLoading, isError } = useFetch('/connections/cl7roxqwu000865btoyx4lw1h/recommendations');
    return (
        <>
        <Flex direction="column" gap={8} height="400px" overflowY="scroll">
          {[].map((account) => {
            return (
              <Flex
                gap={4}
                borderRadius="1rem"
                justifyContent="space-between"
                width="100%"
              >
                <Flex alignItems="flex-start" gap={4} direction="column">
                  <Flex gap={2} alignItems="center">
                    <Avatar src={account.avatar} />
                    <VStack alignItems="flex-start">
                      <Heading size="sm">{account.name}</Heading>
                      <Text>{account.bio}</Text>
                    </VStack>
                  </Flex>
                </Flex>
                <Button onClick={() => {}} width="fit-content">
                  Follow
                </Button>
              </Flex>
            );
          })}

          <Text>
            The Inspirers app helps you stay motivated by connecting with groups
            of people with similar goals.
          </Text>
          <Flex>
            <Image
              height="200"
              width="200"
              alt="start journey"
              src={
                "https://res.cloudinary.com/dwacr3zpp/image/upload/v1658948628/inspirers/images/1a595af8-d3e7-4b77-bef6-420b4836a3ad.png"
              }
            />
          </Flex>
          <Text>There are no accounts to follow at the moment.</Text>
        </Flex>
        </>
    )
}