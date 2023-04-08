import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { SocialsBar } from '../components/SocialsBar'
import { HeadTag } from '../components/Head'
import { HeadProps } from '../interfaces/HeadProps'

export default function Index({ pageTitle, pageName }: HeadProps) {
  pageTitle = 'Projects';
  pageName = 'Homepage';

  return (
    <Container height="100%">
      <HeadTag title={pageTitle} name={pageName}/>
      
      <Navbar />
      <SocialsBar />
      <Container pt={14}>
        <Main >
          <Hero/>
          <Projects />
        </Main>

        <Footer />
      </Container>
    </Container>
  )
} 

