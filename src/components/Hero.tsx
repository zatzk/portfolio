import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect } from "react";
import { useState } from "react";
import WavyText from "./WavyText";


export function Hero() {
  const [replay, setReplay] = useState(true);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 1000);
  }, []);
  
  return(
    <Container 
    maxW="container.lg"
    padding="50px"
    height="100%"
    flexWrap="wrap"
    alignContent="center"
    >
      <Flex
      justifyContent="left"
      alignItems="center"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
      
    >
      <Box 
        fontWeight="bold"
        fontStyle="normal" 
        fontSize={{base: 50, md: 80, lg: 90}}
        >
          <WavyText text="hi, im zatzk" replay={replay}/>
        </Box>
      </Flex>


    
      <Flex> 
        <Box
          fontWeight="bold" 
          fontStyle="normal" 
          fontSize={{base: 15, md: 20, lg: 30}}
        >
          {showComponent && <WavyText text="Developer" replay={replay}/>}
          
       </Box>
      </Flex>
    </Container>
    
  )
}


