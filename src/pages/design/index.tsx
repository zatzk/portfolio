import { FooterDesign } from '../../components/designPage/FooterDesign'
import { NavbarDesign } from '../../components/designPage/NavbarDesign'
import { HeadTag } from '../../components/Head'
import { Container } from '../../components/Container'
import { DesignProjects } from '../../components/designPage/DesignProjects'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Gallery } from '../../components/Gallery'



export async function getStaticProps() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

  const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey)

  const { data: images } = await supabaseAdmin.from('images').select('id, type, imageSrc, width, height');
  return {
    props: {
      imgFetched: images,
    },
  };
}


export default function Design({ imgFetched }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string>('posters'); 
  
  return (
    <Container minH="100dvh" className='secondThemeSwitch'>
      <HeadTag title={'Design Page'} content={'Design Page'}/>
    
      <NavbarDesign/>
      <DesignProjects selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Gallery selectedCategory={selectedCategory} imgFetched={imgFetched}  /> 
      <FooterDesign />

    </Container>
  )
} 


