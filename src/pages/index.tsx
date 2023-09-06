import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { SocialsBar } from '../components/SocialsBar'
import { HeadTag } from '../components/Head'
import { HeadProps } from '../interfaces/HeadProps'

export default function Index({ title, content }: HeadProps) {
  title = 'Developer Page';
  content = 'Projects';

  return (
    <Container height="100%" className='firstThemeSwitch'>
      <HeadTag title={title} content={content}/>
      
      <Navbar />
      <SocialsBar />
      <Container pt={14}>
        <Hero/>
        <Main >
          <Projects />
        </Main>

        <Footer />
      </Container>
    </Container>
  )
} 

