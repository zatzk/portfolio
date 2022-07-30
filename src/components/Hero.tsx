import { Container, Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Container 
  maxW="container.lg"
  padding="50px"
  height="50%"
  flexWrap="wrap"
  alignContent="center"
  >
    <Flex
    justifyContent="left"
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    
  >
    <Heading 
      fontSize="6vw" 
      fontWeight="700" 
      fontStyle="normal" 
      fontSize="90"
      >{title}</Heading>
  </Flex>
  </Container>
  
)

Hero.defaultProps = {
  title: 'hi, im zatzk',
}
