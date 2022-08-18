import { Box, BoxProps } from '@chakra-ui/react'

export const Main = (props: BoxProps) => (
  <Box 
    as="main"
    pb={8}
    px={{base: '0px', md:'50px', lg: '100px'}}
    {...props}
  />
)