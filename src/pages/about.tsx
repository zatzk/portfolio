import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import Head from 'next/head'
import { SocialsBar } from '../components/SocialsBar'

const about = () => (
  <Container height="100vh">
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="zatzk's homepage" />
        <meta name="author" content="Jean Luiz" />
        <meta name="author" content="zatzk" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <meta property="og:site_name" content="zatzk's portfolio" />
        <meta name="og:title" content="zatzk's portfolio" />
        <meta property="og:type" content="website" />
        <title>zatzk's portfolio - About</title>
      </Head>

    <Navbar />
    <SocialsBar />
    <Container pt={14}>
      <Main  height="100%" >
        
      </Main>

      <Footer />
    </Container>
  </Container>
)

export default about
