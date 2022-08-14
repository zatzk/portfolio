import { Box, Button, Text, Container, Flex, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { motion, MotionConfig } from 'framer-motion';
import React from "react";
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export function Projects() {

  
  const boxCardVariants = {
    initial: {
      opacity: 1
    },
    hover: {
      opacity: 0.6,
      scale: 1.02,
      y: -10,
      boxShadow: "0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4",
      borderRadius: "5px",
    },
    
  }
  
  const CardBox = () => (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileTap="hover"
      variants={boxCardVariants}
      transition={{
        ease: 'easeOut',
        delay: 0.15,
      }}
      
    >
      <Box
        position="relative"
        bg="#292929"
        height="18em"
        borderRadius="5px"
        bgGradient="linear(to-b, bgCardColor1, bgCardColor2)"
        >
          <Flex
            position="relative"
            width="100%"
            height="80px"
            alignContent="center"
            justifyContent="flex-end"
          >
            <Box pt="33px" pr="20px"><FiGithub size={22}/></Box>
            <Box pt="33px" pr="25px"><FiExternalLink size={22} /></Box>
          </Flex>
          <Box
            width="100%"
            textAlign="left"
            px="25px"
            pt="10px"
          >
            <Heading fontSize="15px">
              Integrating Algolia Search with Wordpress Multisite
            </Heading>
            <Text pt="19px" fontSize="sm">
              Building a custom multisite compatible Wordpress plugin to build global search with Algolia
            </Text>
          </Box>
          <Box
            width="100%"
            textAlign="left"

          >
            <Text
             px="25px"
             pt="30px"
             fontSize="13px"
             fontFamily="primary"
            >
             Node Express Firebase Vue
             </Text>

          </Box>

        </Box>
    </motion.div>
)
  
  return(
    <Container 
    maxW="container.lg"
    padding="50px"
    height="100%"
    flexWrap="wrap"
    alignContent="center"
    >
     <motion.div 
      initial={{y: -200, opacity: 0}}
      animate={{
        y:0, opacity: 1
        
       }}
      transition={{
        ease: 'easeOut',
        delay: 2,
      }}
     >

      <SimpleGrid 
        display="grid"
        minChildWidth='18.5em'
        columns={[1, 2, 3]} 
        gap="1.10rem"
        padding="0px"
        >
          <CardBox />
          <CardBox />
          <CardBox />

        
        </SimpleGrid>
     </motion.div>
    </Container>
    
  )
}


