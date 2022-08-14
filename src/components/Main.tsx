import { Box, BoxProps } from '@chakra-ui/react'

export const Main = (props: BoxProps) => (
  <Box 
    as="main"
    pb={8}
    {...props}
  />
)