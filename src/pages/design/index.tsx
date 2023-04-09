import { ContainerDesign } from '../../components/designPage/ContainerDesign'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { NavbarDesign } from '../../components/designPage/NavbarDesign'
import { Hero } from '../../components/Hero'
import { Projects } from '../../components/Projects'
import { SocialsBar } from '../../components/SocialsBar'
import { HeadTag } from '../../components/Head'
import { HeadProps } from '../../interfaces/HeadProps'
import { Box } from '@chakra-ui/react'

export default function Design({ title, content }: HeadProps) {
  title = 'Designer Page';
  content = 'Designs';

  return (
    <ContainerDesign height="100%">
      <HeadTag title={title} content={content}/>
      
      <NavbarDesign />
      {/* <SocialsBar /> */}
      <ContainerDesign pt={14}>
        <Main >
          TEXTO DE APRESENTAÇÃO
          {/* <Hero/>
          <Projects /> */}
        </Main>
      </ContainerDesign>
      <Box
        h="100dvh"
        bgColor="#141416"
      >
        aaa
      <Footer />
      </Box>
    </ContainerDesign>
  )
} 

