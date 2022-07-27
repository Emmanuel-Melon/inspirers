import { Image, Img, Flex, Text, Link, Stack, Heading } from '@chakra-ui/react'
import { Button } from 'ui'
import { FiHome } from "react-icons/fi";

export default function ErrorPage404() {
  return (
    <Flex
      padding='8'
      alignItems="center"
      justifyContent='center'
    >
      <Stack
        gap='4'
      >
        <Heading
          color='brand.primary'
        >
          404 not found.
        </Heading>
        <Text
          color='brand.primaryText'
        > Try something else, Like going back Home : ) </Text>
        <Link
          style={{ textDecoration: 'none' }}
          href='/'>
          <Button
            icon={<FiHome />}
            bg='brand.primary'
            color='brand.white'
            size='md'
            width='fit-content'
          >Take me home
          </Button>
        </Link>
      </Stack>
      <Image
        width='400px'
        src='https://res.cloudinary.com/dwacr3zpp/image/upload/v1658932426/inspirers/images/483e08cb-79ba-41a7-ac5b-247e13bec399.png'
        alt=' Try something else, Like going back Home : ) '
      />
    </Flex>);
}