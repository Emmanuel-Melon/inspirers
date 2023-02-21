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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ListIntegrations } from "core/Integrations/ListIntegrations";
import { FiGithub, FiCalendar, FiHardDrive, FiPackage } from "react-icons/fi";
// import { Dropbox } from "react-icons/"

export default function Apps() {
  return (
    <Grid gap={4}>
      <ListIntegrations integrations={[]} />
    </Grid>
  );
}
