import React, { useContext } from "react";
import { Avatar, Flex, Heading, Text, Tag, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "ui";
import { JourneyOnboardingContext } from "../../../providers/JourneyOnboardingProvider";
import { FiX, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";

export const FourthStepGuide = () => {
  const context = useContext(JourneyOnboardingContext);
  return (
    <Flex direction="column" gap={4}>
      <Heading color="brand.primary">
        {context.currentStep.id} - {context.currentStep.title} (Optional)
      </Heading>
      <Flex
        alignItems="center"
        bg="brand.white"
        borderRadius="0rem 1rem 1rem 0rem"
        borderLeft="solid 0.25rem"
        borderColor="brand.accent"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      >
        <Image
          height="180"
          width="180"
          alt="start journey"
          src={
            "https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/arabica-1092.svg"
          }
        />
        <Text color="brand.primary">
          You are all set now, let us begin navigating the journey.
        </Text>
      </Flex>
      <Heading size="sm">Topics</Heading>
      <Text>Follow topics to get updates</Text>
      <Heading size="sm">Accounts to follow</Heading>
      <Text>Follow relevant accounts</Text>
    </Flex>
  );
};


export const FourthStep = () => {
  const context = useContext(JourneyOnboardingContext);
  const router = useRouter();

  const handleNext = () => {
    const journeyId = 1;
    router.push({
      pathname: "/journeys/[id]",
      query: { id: journeyId },
    });
  };
  return (
    <Flex
      direction="column"
      gap={4}
      borderRadius="1rem"
      color="brand.primaryText"
    >
      <Text fontWeight="700">Interets</Text>
      <Flex gap={4}>
        <Tag bg="brand.highlight1">Fintech</Tag>
        <Tag bg="brand.highlight">Startups</Tag>
        <Tag bg="brand.highlight2">Networking</Tag>
        <Tag bg="brand.white">Gaming</Tag>
      </Flex>
      <Text fontWeight="700">People you may know!</Text>
      <Flex direction="column" gap={8}>
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
      </Flex>
      <Flex gap={4}>
        <Button
          onClick={context.moveBackwards}
          bg="brand.white"
          color="brand.primaryText"
          icon={<FiX />}
        >
          Skip
        </Button>
        <Button onClick={handleNext} icon={<FiArrowRight />}>
          Continue
        </Button>
      </Flex>
    </Flex>
  );
};
