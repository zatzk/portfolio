import { Box, Container, Flex } from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from "react";
import WavyText from "./utils/WavyText";


export function Hero() {
  const [replay] = useState(true);
  const [showFirstComponent, setShowFirstComponent] = useState(false);
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowFirstComponent(!showFirstComponent);
    }, 500);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setShowSecondComponent(!showSecondComponent);
    }, 1000);
  }, []);
  
  return(
  <Container 
    maxW="container.xxl"
    position="relative"
    padding="65px"
    paddingRight="0px"
    paddingTop="0px"
    height="100%"
    flexWrap="wrap"
    alignContent="center"
    fontFamily="quaternary"
  >
    <Flex
      justifyContent="left"
      alignItems="center"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Box 
        fontSize={{base: 80, md: 90, lg: 100, xl: 120}}
        marginTop={{base: 92, md: 92, lg: 0, xl: 0}}
        textShadow="rgb(255 215 77 / 5%) -1px -1px 6px, rgb(124 127 255 / 5%) 1px 1px 6px"
        lineHeight="1"
      >
        <WavyText text="Hello." replay={replay}/>
      </Box>
    </Flex>
    <Flex
      justifyContent="left"
      alignItems="center"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Box 
        display={{ base: 'none', md: 'block' }}
        fontSize={{base: 80, md: 90, lg: 100, xl: 120}}
        textShadow="rgb(255 215 77 / 5%) -1px -1px 6px, rgb(124 127 255 / 5%) 1px 1px 6px"
        lineHeight="1"
      >
         {showFirstComponent && <WavyText text="I am zatzk" replay={replay}/>}
      </Box>
    </Flex>
    <Flex
      justifyContent="left"
      alignItems="center"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Box 
        display={{ base: 'block', md: 'none' }}
        fontSize={{base: 80, md: 90, lg: 100, xl: 120}}
        textShadow="rgb(255 215 77 / 5%) -1px -1px 6px, rgb(124 127 255 / 5%) 1px 1px 6px"
        lineHeight="1"
      >
         {showFirstComponent && <WavyText text="I am" replay={replay}/>}
      </Box>
    </Flex>
    <Flex
      justifyContent="left"
      alignItems="center"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Box 
        display={{ base: 'block', md: 'none' }}
        fontSize={{base: 80, md: 90, lg: 100, xl: 120}}
        textShadow="rgb(255 215 77 / 5%) -1px -1px 6px, rgb(124 127 255 / 5%) 1px 1px 6px"
        lineHeight="1"
      >
         {showFirstComponent && <WavyText text="zatzk" replay={replay}/>}
      </Box>
    </Flex>


    
      <Flex> 
        <Box
          fontSize={{base: 16}}
          color="textColor"
          position={"absolute"}
          left={{ base: 290, md: 660, lg: 750, xl: 900}}
        >
          {showSecondComponent && <WavyText text="Developer" replay={replay}/>}
       </Box>
      </Flex>
      <Flex> 
        <Box
        mt={4}
          fontSize={{base: 16}}
          color="textColor"
          position={"absolute"}
          left={{ base: 290, md: 660, lg: 750, xl: 900}}
        >
          {showSecondComponent && <WavyText text="UI/UX Designer" replay={replay}/>}
       </Box>
      </Flex>

  </Container>
    
  )
}


