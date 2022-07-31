import {
  Flex,
  VStack,
  Avatar,
  Text,
  Button,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";

export const EmptyStateImages: object = {
  JourneyEmptyStateImage:
    "https://res.cloudinary.com/dwacr3zpp/image/upload/v1658951639/inspirers/images/9094bc98-b99d-4474-9803-13eaaaccc383.png",
  ActivityEmptyStateImage:
    "https://res.cloudinary.com/dwacr3zpp/image/upload/v1658951299/inspirers/images/729a0ff0-9727-4b73-b2b5-26d23f5e442d.png",
  MenteesEmptyStateImage:
    "https://res.cloudinary.com/dwacr3zpp/image/upload/v1658951330/inspirers/images/8a6a6be1-df6c-482e-8f05-2e089ab083f5.png",
  TasksEmptyStateImage:
    "https://res.cloudinary.com/dwacr3zpp/image/upload/v1658951972/inspirers/images/3ef610d9-84ff-4ab3-b809-4fda743dceee.png",
  BackpacksEmptyStateImage:
    "https://res.cloudinary.com/dwacr3zpp/image/upload/v1658952252/inspirers/images/3072ccca-26d9-4b94-9b1b-979661a6da7f.png",
};

export const EmptyState = (props) => {
  return (
    <VStack gap="8">
      <Heading>No {props.panelTitle} yet.</Heading>
      <Image alt="Image not loaded." src={props.url} />
      <Link>
        <Button color={"brand.white"} bg={"brand.primary"}>
          {" "}
          Click Me!{" "}
        </Button>
      </Link>
    </VStack>
  );
};
