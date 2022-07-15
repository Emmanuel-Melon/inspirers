import { Image, Img, Stack, Text, Button } from '@chakra-ui/react'

export default function ErrorPage404() {
    return(
    <Stack align="center">
    <Text>"Sorry Mate!, Try some else : ) Like going back Home"</Text>
    <Image
  borderRadius={'full'}
  boxSize='500px'
  width='1000px'
  src='https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg'
  alt='Sorry Mate!, Try some else : )'
/>
<Button>Home</Button>
</Stack>);
}