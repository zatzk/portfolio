import React, { useState, useEffect } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

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
      h="100vh"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bgImage="/images/untitled.gif"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      color="#d5ded7"
      style={{ filter: `opacity(${opacity})` }} // Set opacity based on state value
      transition="all 0.15s ease-out"
      {...props}
    />
  );
};
