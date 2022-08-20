import { Box, Container, Flex, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";

export function AboutText() {
  
 
  const aboutText = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    }
  }
  return (
  <Container 
    maxW="container.lg"
    padding="50px"
    height="100%"
    flexWrap="wrap"
    alignContent="center"
  >
    <Flex
      padding={{base: "0px", md: "50px", lg:"100px"}}
      >
        <Flex fontSize="18px" flexDirection="column">

          <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 0.3, duration: 0.8}}>
            <Box  pb="22px" display="inline-block">
              <Text>
                Hey there! My name is Jean Luiz, also known in the web as zatzk. 
                I&#39;m a software engineering&#39;s student at Instituto Federal da Bahia (IFBA) 
                and a self-taught designer and artist.
              </Text>
            </Box>
          </motion.a>
          <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 0.6, duration: 0.8}}>
            <Box pb="22px" display="inline-block">
              <Text>
                I was born and raised in the city of Salvador/Brazil. 
                I grew up very passionate about technology, and this passion 
                led me to the eager of learning more about coding and design and to 
                use my acquired knowledge and ideas to develop applications.
              </Text>
            </Box>
          </motion.a>
          <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 0.9, duration: 0.8}}>
            <Box pb="22px" display="inline-block">
              <Text>
                When I&#39;m not coding or studying about it, I usually focus on creative activities 
                related to UI and UX design, or digital art as a hobby.
                I also have some other hobbies besides digital art, like studying languages, 
                playing RTS and RPG games and listen to music.
              </Text>
            </Box>
          </motion.a>
        </Flex>
      
    </Flex>
  </Container>

)
}

