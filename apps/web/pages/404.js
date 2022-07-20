import { Image, Img, Stack, Text, Link} from '@chakra-ui/react'
//import { FaArrowForwardIcon } from 'react-icons/fa'
import {  Button } from 'ui'

export default function ErrorPage404() {
    return(
    <Stack align="center">
    <Text color='brand.primaryText'>"Sorry Mate!, Try some else : ) Like going back Home"</Text>
    <Image
  borderRadius={'full'}
  boxSize='500px'
  width='1000px'
  src='https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg'
  alt='Sorry Mate!, Try some else : )'
/>
<Link
style= {{textDecoration: 'none'}}
href='/'>
<Button
bg= 'brand.primary'
color='white'
size='lg'
>Home
</Button>
</Link>
</Stack>);
}