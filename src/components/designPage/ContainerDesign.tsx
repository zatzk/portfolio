import { Box, BoxProps } from '@chakra-ui/react'

export const ContainerDesign = (props: BoxProps) => (
  <Box
    h="100dvh"
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    bgImage="/images/giphy.gif"
    bgSize="cover"
    bgPosition="center"
    bgAttachment="fixed"
    color="#d5ded7"
    
    transition="all 0.15s ease-out"
    {...props}
  />
)
