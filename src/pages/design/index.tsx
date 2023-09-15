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
import { DesignProjects } from '../../components/designPage/DesignProjects'
import { useState } from 'react'


export default function Design({ title, content }: HeadProps) {
  title = 'Designer Page';
  content = 'Designs';

  const [selectedCategory, setSelectedCategory] = useState<string>('posters'); 


  return (
    <Container minH="100dvh" className='secondThemeSwitch'>
      <HeadTag title={title} content={content}/>
      
      {/* <IntroDesign/> */}
      {/* <ContainerDesign pt={20}/> */}
      
      <NavbarDesign/>
      <DesignProjects selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Gallery selectedCategory={selectedCategory} /> 
      

      {/* <Box
        // display={{base:"flex", md:"block"}}

        >
      </Box> */}
      <FooterDesign />
    </Container>
  )
} 

