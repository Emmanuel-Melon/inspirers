import { Image, Img, Stack, Text, Button, Link} from '@chakra-ui/react'
//import { FaArrowForwardIcon } from 'react-icons/fa'

export default function ErrorPage404() {
    return(
    <Stack align="center">
    <Text color='gray.500'>"Sorry Mate!, Try some else : ) Like going back Home"</Text>
    <Image
  borderRadius={'full'}
  boxSize='500px'
  width='1000px'
  src='https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg'
  alt='Sorry Mate!, Try some else : )'
/>
<Link href='/'>
<Button
bg="#002366"
color='white'
size='lg'
>Home
</Button>
</Link>
</Stack>);
}