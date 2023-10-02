/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
import { Box, Container, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { TechsProps } from "../../interfaces/TechsProps"
import { css } from '@emotion/react'
import {
  chakra,
  nextjs,
  nodejs,
  react,
  typescript,
  framer,
  js,
  json,
  tailwind,
  sass,
} from '../../data/Tools';

const techs = { chakra, nextjs, nodejs, react, typescript, framer, js, json, tailwind, sass};

export function AboutText() {

  const techList = Object.values(techs).slice(0, 20);

  const aboutText = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    }
  }

  const glitchAnimation = css`

    .glitch {
      text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
      animation: glitch 525ms infinite;
      /* opacity: 0.75; */
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

const hoverText = css`
.hoveringText {
  background: linear-gradient(-60deg, #ebebeb, transparent) no-repeat right bottom / 0 var(--bg-h);
  transition: background-size 850ms;
  padding-bottom: 2px;
  --bg-h: 2px;
}
.hoveringText:where(:hover, :focus-visible) {
  background-size: 100% var(--bg-h);
  background-position-x: left;
  transition: background-size 850ms;
}


`
  
  return (
    <Container 
      maxW="container.xl"
      padding="50px"
      
      height="100%"
      flexWrap="wrap"
      alignContent="left"
      fontFamily="secondary"
    >
      <Flex
        padding={{base: "0px", md: "50px", lg:"100px"}}
        >
          <Flex cursor="default" zIndex="1" fontSize={38} flexDirection="column" css={[glitchAnimation, hoverText]}>

            {/* <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 0.1, duration: 0.8}}>
              <Box mb="30px" fontSize="22px"  pb="12px" display="flex">
                <Text>
                  Background
                </Text>
                <Box 
                position="relative"
                display={{base:"block", md:"block",lg:"block"}}
                width={{base:"90px",md:"300px",lg:"400px"}}
                height={{base:"1px",md:"1px",lg:"1px"}}
                alignItems="flex-end"
                flexDirection="column"
                ml="15px"
                mt="15px"
                bg="gray.500"
                ></Box>
              </Box>
              
            </motion.a> */}
            <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 0.3, duration: 0.8}}>
              <Box pb="35px" display="inline-block">
                <Text>
                  hey there! I am <motion.span className="glitch">jean luiz</motion.span>, also go by <motion.span className="glitch">zatzk</motion.span> as handle.<br/>
                  I&#39;m a <span className="hoveringText">software engineer</span>, <span className="hoveringText">UX/UI designer</span> and <span className="hoveringText">digital artist</span> based in salvador/brazil.<br/>here you can find my <motion.button onClick={() => window.open("/resume.pdf")} whileHover={{scale: 1.5}} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="glitch">cv</motion.button>, or if you want to get in <motion.button onClick={() => window.open("mailto:zatzk@outlook.com")} whileHover={{scale: 1.5}} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="glitch">touch</motion.button>.
                </Text>
              </Box>
            </motion.a>
           
            {/* <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 0.6, duration: 0.8}}>
              <Box pb="35px" display="inline-block">
                <Text>
                  I was born and raised in the city of Salvador/Brazil. 
                  I grew up very passionate about technology, and this passion 
                  led me to the eager of learning more about coding and design and to 
                  use my acquired knowledge and ideas to develop applications.
                </Text>
              </Box>
            </motion.a>
            <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 0.9, duration: 0.8}}>
              <Box pb="35px" display="inline-block">
                <Text>
                  When I&#39;m not coding or studying about it, I usually focus on creative activities 
                  related to UI and UX design, or digital art as a hobby.
                  I also have some other hobbies besides digital art, like studying languages, 
                  playing RTS and RPG games and listen to music.
                </Text>
              </Box>
            </motion.a> */}

            {/* <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 1.1, duration: 0.8}}>
              <Box mt="30px" fontSize="22px" pt="22px" pb="22px" display="flex">
                <Text>
                  Technologies
                </Text>
                <Box 
                position="relative"
                display={{base:"block", md:"block",lg:"block"}}
                width={{base:"90px",md:"300px",lg:"400px"}}
                height={{base:"1px",md:"1px",lg:"1px"}}
                alignItems="flex-end"
                flexDirection="column"
                ml="15px"
                mt="15px"
                bg="gray.500"
                ></Box>
              </Box>
            </motion.a>
            
            <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 1.3, duration: 0.8}}>
              <Box display="block" >
                <Grid 
                  flexWrap="wrap"
                  display="grid"
                  templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }} 
                  gap={2}
                  >
                  {techList.map((tech) => (
                    <motion.div whileHover={{scale: 1.1}}>
                      <Techs 
                      icon={tech.icon}
                      name={tech.name}
                      color={tech.color || undefined}
                      />
                      </motion.div>
                    ))}
                  </Grid>
                
                
              </Box>
            </motion.a> */}
            
          </Flex>
        
      </Flex>
    </Container>

  )
}
const Techs = ({icon, color, name}: TechsProps) => {

  return (
    <GridItem
      p={{ base: '15px', md:'20px', lg: '20px' }}
      textAlign="center"
      alignContent="center"
      display="flex"
      flexDirection="column"
      listStyleType="none"
      fontSize="15px"
    >
      <Icon
        mx="auto"
        mb="0.5rem"
        boxSize={{ base: '30px', md: '40px', lg: '50px' }}
        as={icon}
        transitionDuration="300ms"
        color={color}
        />
      {name}
    
    </GridItem>
  )
}

