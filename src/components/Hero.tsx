import { Box, Container, Flex } from '@chakra-ui/react'
import React, { useEffect } from "react";
import { useState } from "react";
import WavyText from "./textAnimation/WavyText";


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
        textShadow="rgb(255 215 77 / 5%) -1px -1px 6px, rgb(124 127 255 / 5%) 1px 1px 6px"
        >
          <WavyText text="hi, im zatzk" replay={replay}/>
        </Box>
      </Flex>


    
      <Flex> 
        <Box
          fontWeight="bold" 
          fontStyle="normal" 
          fontSize={{base: 15, md: 20, lg: 30}}
          textShadow="rgb(255 215 77 / 20%) -1px -1px 6px, rgb(124 127 255 / 20%) 1px 1px 6px"
        >
          {showComponent && <WavyText text="Developer" replay={replay}/>}
          
       </Box>
      </Flex>
    </Container>
    
  )
}


