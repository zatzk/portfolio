import { ContainerDesign } from '../../components/designPage/ContainerDesign'
import { Footer } from '../../components/Footer'
import { NavbarDesign } from '../../components/designPage/NavbarDesign'
import { HeadTag } from '../../components/Head'
import { HeadProps } from '../../interfaces/HeadProps'
import { Box } from '@chakra-ui/react'
import { Container } from '../../components/Container'
import { IntroDesign } from '../../components/designPage/IntroDesign'
import { Gallery } from '../../components/designPage/Gallery'

export default function Design({ title, content }: HeadProps) {
  title = 'Designer Page';
  content = 'Designs';

  return (
    <Container height="100%" bgColor="#fff">
      <HeadTag title={title} content={content}/>
      
      {/* <IntroDesign/> */}
      {/* <ContainerDesign pt={20}/> */}
      
      <NavbarDesign/>
      <Gallery/>
      {/* <Box
        // display={{base:"flex", md:"block"}}

        >
      </Box> */}
      <Footer />
    </Container>
  )
} 

