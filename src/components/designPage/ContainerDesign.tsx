import React, { useState, useEffect } from 'react';
import { Box, BoxProps, Text } from '@chakra-ui/react';

export const ContainerDesign = (props: BoxProps) => {

  const [opacity, setOpacity] = useState(0.6); // Initial opacity value

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      
      const delta = event.deltaY > 0 ? -0.1 : 0.1;
      const newOpacity = Math.max(0, Math.min(opacity + delta, 0.6));
      setOpacity(newOpacity);
    };

    window.addEventListener('wheel', handleScroll, { passive: false }); // Add wheel event listener

    return () => {
      window.removeEventListener('wheel', handleScroll); // Remove wheel event listener on component unmount
    };
  }, [opacity]);

  return (
    <Box
      h="100dvh"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      // bgImage="/images/portfolioBg.gif"
      // bgSize="cover"
      // bgPosition="center"
      // bgAttachment="fixed"
      color="#d5ded7"
      style={{ filter: `opacity(${opacity})` }} // Set opacity based on state value
      transition="all 0.15s ease-out"
      {...props}
    > 
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
      >
        <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/videos/portfolioBg.mp4" type="video/mp4" />
      </video>
        <Box 
          position="absolute"
          display={{base:"none", md:"block",lg:"block"}}
          width={{base:"0px",md:"1px",lg:"1px"}}
          height={{base:"0px",md:"40px",lg:"40px"}}
          margin="0px auto"
          bg="#d5ded7"
        />
        <Text
          position="absolute"
          display={{base:"none", md:"block",lg:"block"}}
          alignItems="left"
          marginLeft="90px"
          marginBottom="10px"
        >
          Scroll here
        </Text>
      </Box>
    </Box>
  );
};
