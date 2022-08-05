import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import Head from 'next/head'

const about = () => (
  <Container height="100vh">
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="zatzk's homepage" />
        <meta name="author" content="Jean Luiz" />
        <meta name="author" content="zatzk" />
        <link rel="shortcut icon" href="/src/public/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="zatzk's portfolio" />
        <meta name="og:title" content="zatzk's portfolio" />
        <meta property="og:type" content="website" />
        <title>zatzk - Portfolio</title>
      </Head>

    <Navbar />
    
    <Container pt={14}>
      <Main  height="70vh" >
        
      </Main>

      <Footer />
    </Container>
  </Container>
)

export default about
