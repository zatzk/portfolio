import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { SocialsBar } from '../components/SocialsBar'
import { AboutText } from '../components/AboutText'
import { Btn } from '../components/utils/Button'
import { Box } from '@chakra-ui/react'
import { HeadTag } from '../components/Head'
import { HeadProps } from '../interfaces/HeadProps'


const about = ({ pageTitle, pageName }: HeadProps) => {
  pageTitle = 'About';
  pageName = 'AboutPage';
  
  return (
    <Container height="100%">
      <HeadTag title={pageTitle} name={pageName}/>

      <Navbar />
      <SocialsBar />
      <Container pt={14}>
        <Main >
          <AboutText />
            <Btn  >
              <Box as="a" textDecoration="none" href = "mailto: zatzk.cnt@outlook.com" target="_blank">
                GET IN TOUCH
              </Box>
            </Btn>
        </Main>

        <Footer />
      </Container>
    </Container>
  )
}

export default about
