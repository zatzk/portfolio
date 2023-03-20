/* eslint-disable react/jsx-key */
import { Container, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import React from "react";
import { ProjectCard } from './ProjectCard';
import CardData from '../data/CardData';

export function Projects() {

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
        flexWrap="wrap"
        display="grid"
        minChildWidth='18.5em'
        columns={[1, 2, 3]} 
        gap="1.10rem"
        padding="0px"
        >
          {CardData.map((data) => (
            <ProjectCard 
            title={data.title} 
            description={data.description} 
            tools={data.tools} 
            proto={data.proto} 
            repo={data.repo}       

            />
          ))}
        </SimpleGrid>

     </motion.div>
    </Container>
    
  )
}


