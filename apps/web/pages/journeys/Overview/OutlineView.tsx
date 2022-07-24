import {
    Avatar,
    Flex,
    Heading,
    Text,
    VStack,
    Stack,
    List,
    ListItem,
    ListIcon,
    Tag

} from "@chakra-ui/react";
import {
    FiMapPin,
    FiArrowRight,
    FiCheck,
    FiBookmark,
    FiHeart,
    FiClock,
    FiBarChart,
    FiTruck,
    FiMessageSquare
} from "react-icons/fi";
import { Button } from "ui";
import { UserProfileCard } from "../../user/components/UserProfileCard";
import { ResourcesOverview } from "./ResourcesOverview";
import { JourneyOutline } from "./JourneyOutline";


export const OutlineOverview = ({ journey, user }) => {
    return (
        <Flex gap={8}>
            <Flex flex={2}>
                <Flex direction="column" color="brand.primaryText" gap={4}>
                    <Flex direction="column" width="100%" gap={8}>
                        <Flex justifyContent="space-between" width="100%" alignItems="center" color="brand.primary">
                            <Heading>{journey.title}</Heading>
                            <FiBookmark size="2rem" />
                        </Flex>
                        <Flex gap={16}>
                            <Flex gap={2} alignItems="center">
                                <Avatar src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/burgundy-53.svg" size="sm" />
                                <Text>Emmanuel Daniel</Text>
                            </Flex>
                            <Flex gap={2}>
                                <Tag gap={2}><FiClock /> 22/07/2019</Tag>
                                <Tag gap={2}><FiBookmark /> 38</Tag>
                                <Tag gap={2}><FiMessageSquare /> Comments</Tag>
                                <Tag gap={2}><FiHeart /> subscribers</Tag>
                            </Flex>
                        </Flex>
                        <Stack>
                        <Heading size="md">Introduction</Heading>
                            <Text>The youth represent 50% of today's population and 100% of the future. I've used LinkedIn for several years but barely got noticed because such platforms are biased and only favor the experienced.</Text>
                            <Text>
                                In the first half, you will learn how to build a full search experience using Algolia's search API and by utilizing Algolia's InstantSearch library. In the second half, you will learn how to extend Algolia's widgets by building a custom search experience.
                            </Text>
                            <Text>
                                By the end of this course, you will have gained hands-on experience by building a fully functional search experience using Algolia.
                            </Text>
                        </Stack>
                    </Flex>
                    <ResourcesOverview />
                    <JourneyOutline journey={journey} />
                </Flex>
            </Flex>
            <Flex flex={1} direction="column" gap={4}>
                <UserProfileCard user={user} />

                <Heading size="md">Journey Info</Heading>
                <Stack alignItems="flex-start" gap={2}
                >
                    <Tag borderRadius="1rem" gap={2}><FiBarChart /> Beginner</Tag>
                    <Tag borderRadius="1rem" gap={2}><FiBarChart /> Invite Friends</Tag>
                    <Tag borderRadius="1rem" gap={2}><FiBarChart /> Share</Tag>
                    <Button
                        size="sm"
                        icon={<FiTruck />}
                        onClick={() => {}}
                    >
                        Begin Journey
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    )
}