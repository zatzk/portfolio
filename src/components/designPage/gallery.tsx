import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import Image from 'next/image'

import imageData from '../../data/imageData';


export const Gallery = () => {
 


  return (
    <Container
      maxH="100%"
      maxW="85%"
      paddingTop="8rem"
      height="100%"
      flexWrap="wrap"
      alignContent="center"
      mr={0}
    >

      <SimpleGrid
        // marginTop={10}
        flexWrap="wrap"
        display="grid"
        minChildWidth="30rem"
        columns={[1, 2, 3]}
        gap="0.8rem"
        padding="0px"
          >
        {imageData.map((image, index) => (
          <Image height={5000} width={5000} key={index} src={image.src} alt="test" />
          ))}
        
      </SimpleGrid>
    </Container>
  );
};
