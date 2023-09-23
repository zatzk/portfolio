import { BoxProps, Container, Flex, Text, keyframes } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { css } from '@emotion/react'

const line1 = [
  'SOFTWARE',
  'ENGINEER',
]
const line2 = [  
  'UX/UI',
  'DESIGNER',
]
const line3 = [
  'AND',
]
const line4 = [
  'DIGITAL',
  'ARTIST',
]

export function IntroAbout(props: BoxProps) {

  const glitchAnimation = css`

    .glitch {
      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
      animation: glitch 425ms infinite;
      opacity: 0.75;
    }

    .glitch span {
      position: absolute;
      top: 0;
      left: 0;
    }

    .glitch span:first-child {
      animation: glitch 500ms infinite;
      clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
      transform: translate(-0.04em, -0.03em);
      opacity: 0.75;
    }

    .glitch span:last-child {
      animation: glitch 375ms infinite;
      clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
      transform: translate(0.04em, 0.03em);
      opacity: 0.75;
    }

    @keyframes glitch {
      0% {
        text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
          0.025em 0.04em 0 #fffc00;
      }
      15% {
        text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
          0.025em 0.04em 0 #fffc00;
      }
      16% {
        text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
          -0.05em -0.05em 0 #fffc00;
      }
      49% {
        text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
          -0.05em -0.05em 0 #fffc00;
      }
      50% {
        text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
          0 -0.04em 0 #fffc00;
      }
      99% {
        text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
          0 -0.04em 0 #fffc00;
      }
      100% {
        text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
          -0.04em -0.025em 0 #fffc00;
      }
    }
  `

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
      maxW="100dvw"
      maxH="100dvh"
      padding="50px"
      height="100%"
      flexWrap="wrap"
      position="absolute"
      opacity="1"
      {...props}
    >
      <Flex
        maxW="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        css={glitchAnimation}
        // py={{base: "100px", md: "150px", lg:"300px"}}
        // px={{base: "100px", md: "150px", lg:"300px"}}
      >
        <Flex
         zIndex="1"
         fontSize="30px" 
         fontWeight="900" 
         fontFamily="secondary" 
         flexDirection="column"
         className="glitch"
         cursor="default"
         >
        <motion.div
            variants={aboutText} 
            initial="hidden"
            animate="show" 
            transition={{delay: 0.3, duration: 0.8}}
            
          >
            {line1.map((text, index) => ( 
              <Text
               key={index} 
               whiteSpace="nowrap" 
               display="inline-block"
               >
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
