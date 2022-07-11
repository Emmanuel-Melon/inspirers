import Layout from "../layout/layout";
import { useFetch } from "../hooks/useSwr";
import { Heading, Text } from "@chakra-ui/react";

export default function Profile() {

  const { data, isLoading, isError } = useFetch("/users/1");
  if (isLoading) return <h3>Loading</h3>
  if (isError) return <h3>Error</h3>
  return (
    <Layout>
      <Heading color="brand.primary">Hi, {data.data.name}</Heading>
      <Text color="brand.accent">{data.data.bio}.</Text>
    </Layout>
  );
}