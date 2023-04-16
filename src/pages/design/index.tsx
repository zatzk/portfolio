import { ContainerDesign } from '../../components/designPage/ContainerDesign'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { NavbarDesign } from '../../components/designPage/NavbarDesign'
import { HeadTag } from '../../components/Head'
import { HeadProps } from '../../interfaces/HeadProps'
import { Box } from '@chakra-ui/react'
import { Container } from '../../components/Container'
import { IntroDesign } from '../../components/designPage/IntroDesign'

export default function Design({ title, content }: HeadProps) {
  title = 'Designer Page';
  content = 'Designs';

  return (
    <Container height="100%" bgColor="#141416">
      <HeadTag title={title} content={content}/>
      
      <NavbarDesign/>
      <IntroDesign/>
      <ContainerDesign pt={14}/>
      
      <Box
        h="100dvh"
      >
        aaa
      <Footer />
      </Box>
    </Container>
  )
} 

