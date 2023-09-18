import { FooterDesign } from '../../components/designPage/FooterDesign'
import { NavbarDesign } from '../../components/designPage/NavbarDesign'
import { HeadTag } from '../../components/Head'
import { HeadProps } from '../../interfaces/HeadProps'
import { Container } from '../../components/Container'
import { Gallery } from '../../components/designPage/Gallery'
import { DesignProjects } from '../../components/designPage/DesignProjects'
import { useState } from 'react'


export default function Design({ title, content }: HeadProps) {
  title = 'Designer Page';
  content = 'Designs';

  const [selectedCategory, setSelectedCategory] = useState<string>('posters'); 


  return (
    <Container minH="100dvh" className='secondThemeSwitch'>
      <HeadTag title={title} content={content}/>
    
      <NavbarDesign/>
      <DesignProjects selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Gallery selectedCategory={selectedCategory} /> 
      <FooterDesign />

    </Container>
  )
} 

