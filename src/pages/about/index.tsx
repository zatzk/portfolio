import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'
import { SocialsBar } from '../../components/SocialsBar'
import { AboutText } from '../../components/AboutText'
import { HeadTag } from '../../components/Head'
import { HeadProps } from '../../interfaces/HeadProps'
import { IntroAbout } from '../../components/aboutPage/IntroAbout'
import { ContainerAbout } from '../../components/aboutPage/ContainerAbout'
import { AboutNavbar } from '../../components/aboutPage/AboutNavbar'
import { FooterAbout } from '../../components/aboutPage/FooterAbout'

export default function About({ title, content }: HeadProps) {
  title = 'About me';
  content = 'About me';
  
  return (
    <Container 
      minH="100dvh" className='thirdThemeSwitch'>
      <HeadTag title={title} content={content}/>
      
      <AboutNavbar />
      {/* <SocialsBar /> */}
      <IntroAbout/>
      <ContainerAbout/>
      <AboutText /> 

      <FooterAbout />

      {/* <Container pt={14}>
        <Main >
             <Btn  >
              <Box as="a" textDecoration="none" href = "mailto: zatzk.cnt@outlook.com" target="_blank">
                GET IN TOUCH
              </Box>
            </Btn> 
            </Main> 
      </Container> */}
      
    </Container>
  )
}