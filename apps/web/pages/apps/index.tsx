import {
  Avatar,
  Image,
  Img,
  Stack,
  Text,
  Link,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";
import { ListIntegrations } from "Integrations/ListIntegrations";
import { FiGithub, FiCalendar, FiHardDrive, FiPackage } from "react-icons/fi";
// import { Dropbox } from "react-icons/"
import { EmptyState } from "ui";

const integrations = [
  {
      id: 1,
      name: "Github",
      description: "Github is a web-based hosting service for version control using Git. It is mostly used for computer code.",
      icon: <FiGithub />
  },
  {
      id: 2,
      name: "Google Calendar",
      description: "Google Calendar is a time-management and scheduling calendar service developed by Google.",
      icon: <FiCalendar />
  },
  {
      id: 3,
      name: "Google Drive",
      description: "Google Drive is a file storage and synchronization service developed by Google.",
      icon: <FiHardDrive />
  },
  {
      id: 4,
      name: "DropBox",
      description: "Dropbox is a file hosting service that offers cloud storage, file synchronization, personal cloud.",
      icon: <FiHardDrive />
  }
]

export default function Apps() {
  return (
    <Stack gap={4}>
      <Heading size="lg">Extend Inspirers</Heading>
      <Text>Supercharge your Journey with a set of powerful tools.</Text>
      <ListIntegrations integrations={integrations} />

      <Heading size="md">Installed Apps</Heading>
      <EmptyState 
        title="No apps installed" 
        description="Install apps to supercharge your journey." 
        icon={<FiPackage />}
      />
    </Stack>
  )
}
