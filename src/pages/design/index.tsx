import { ContainerDesign } from '../../components/designPage/ContainerDesign'
import { FooterDesign } from '../../components/designPage/FooterDesign'
import { NavbarDesign } from '../../components/designPage/NavbarDesign'
import { HeadTag } from '../../components/Head'
import { HeadProps } from '../../interfaces/HeadProps'
import { Box } from '@chakra-ui/react'
import { Container } from '../../components/Container'
import { IntroDesign } from '../../components/designPage/IntroDesign'
import { Gallery } from '../../components/designPage/Gallery'
import { Main } from '../../components/Main'


export default function Design({ title, content }: HeadProps) {
  title = 'Designer Page';
  content = 'Designs';

  return (
    <Container height="100%" className='secondThemeSwitch'>
      <HeadTag title={title} content={content}/>
      
      {/* <IntroDesign/> */}
      {/* <ContainerDesign pt={20}/> */}
      
      <NavbarDesign/>

      <Gallery/>

      {/* <Box
        // display={{base:"flex", md:"block"}}

        >
      </Box> */}
      <FooterDesign />
    </Container>
  )
} 

