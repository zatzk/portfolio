import { Box, BoxProps, Container, Flex, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";

const line1 = [
  'DIGITAL',
  'ARTIST',
]
const line2 = [  
  'AND',
]
const line3 = [
  'UI',
  'DESIGNER',
]
const line4 = [
  'BORN',
  'IN',
  'BRAZIL',
]

export function IntroDesign(props: BoxProps) {

  const aboutText = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    }
  }
 
  return (
    <Container 
      maxW="100vw"
      padding="50px"
      height="100%"
      flexWrap="wrap"
      position="absolute"
      opacity="1"
      {...props}
    >
      <Flex
        maxW="100dvw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={{base: "300px", md: "300px", lg:"300px"}}
        px={{base: "100px", md: "200px", lg:"300px"}}
      >
        <Flex fontSize="30px" fontWeight="900" fontFamily="secondary" flexDirection="column">
        <motion.div
            variants={aboutText} 
            initial="hidden"
            animate="show" 
            transition={{delay: 0.3, duration: 0.8}}
          >
            {line1.map((text, index) => ( 
              <Text key={index} whiteSpace="nowrap" display="inline-block">
                {text}&nbsp;
              </Text>
            ))}
          </motion.div>
          <motion.div
            variants={aboutText} 
            initial="hidden" 
            animate="show" 
            transition={{delay: 0.6, duration: 0.8}}
          >
            {line2.map((text, index) => ( 
              <Text key={index} whiteSpace="nowrap" display="inline-block">
                {text}&nbsp;
              </Text>
            ))}
          </motion.div>
          <motion.div
            variants={aboutText} 
            initial="hidden" 
            animate="show" 
            transition={{delay: 0.9, duration: 0.8}}
          >
            {line3.map((text, index) => ( 
              <Text key={index} whiteSpace="nowrap" display="inline-block">
                {text}&nbsp;
              </Text>
            ))}
          </motion.div>
          <motion.div
            variants={aboutText} 
            initial="hidden" 
            animate="show" 
            transition={{delay: 1.2, duration: 0.8}}
          >
            {line4.map((text, index) => ( 
              <Text key={index} whiteSpace="nowrap" display="inline-block">
                {text}&nbsp;
              </Text>
            ))}
          </motion.div>
        </Flex>
      </Flex>
    </Container>
  )
}
