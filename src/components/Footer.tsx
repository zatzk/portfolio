import { Box, Flex } from '@chakra-ui/react'

export const Footer = () => (
  <Box
    as="footer" 
    fontSize="sm"
    opacity={0.4}
    fontFamily="primary"
    textAlign="center"
    pb="20px"
    mt="80px"
    >
       &copy; {new Date().getFullYear()} Jean Luiz. All Rights Reserved.
  </Box>
)
