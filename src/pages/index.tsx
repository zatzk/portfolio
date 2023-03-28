import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { SocialsBar } from '../components/SocialsBar'
import { HeadTag } from '../components/Head'

interface IndexProps {
  pageTitle: string;
  pageName: string;
}

export default function Index({ pageTitle, pageName }: IndexProps) {
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

