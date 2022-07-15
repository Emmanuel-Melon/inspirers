import { Image, Img } from '@chakra-ui/react'

export default function Home() {
    return(
    <div align="center">
    {/* <p>"Sorry Mate!, Try some else : ) Like going back Home"</p> */}
    <Image
  borderRadius={'full'}
  boxSize='500px'
  width='1000px'
  src='https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg'
  alt='Sorry Mate!, Try some else : )'
/>
</div>);
}