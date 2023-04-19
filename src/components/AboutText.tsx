/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
import { Box, Container, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { TechsProps } from "../interfaces/TechsProps"
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
} from '../data/Tools';

const techs = { chakra, nextjs, nodejs, react, typescript, framer, js, json, tailwind, sass};

export function AboutText() {

  const techList = Object.values(techs).slice(0, 20);

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
          <Flex fontSize="18px" fontFamily="primary" flexDirection="column">

            <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 0.1, duration: 0.8}}>
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
              
            </motion.a>
            <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 0.3, duration: 0.8}}>
              <Box  pb="35px" display="inline-block">
                <Text>
                  Hey there! My name is Jean Luiz, also known by the handle zatzk. 
                  I&#39;m a software engineering student at Instituto Federal da Bahia (IFBA) 
                  and a self-taught designer and digital artist.
                </Text>
              </Box>
            </motion.a>
            <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 0.6, duration: 0.8}}>
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
            </motion.a>

            <motion.a variants={aboutText} initial="hidden" animate="show" transition={{delay: 1.1, duration: 0.8}}>
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
            </motion.a>
            
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

