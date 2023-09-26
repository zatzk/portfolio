import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { SocialsBar } from '../components/SocialsBar'
import { HeadTag } from '../components/Head'

export default function Index() {

  return (
    <Container height="100%" className='firstThemeSwitch'>
      <HeadTag title={'Code Page'} content={'Code Page'}/>
      
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

