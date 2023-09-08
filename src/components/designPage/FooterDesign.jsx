import { Box } from '@chakra-ui/react'

export const FooterDesign = () => (
  <Box
    as="footer" 
    fontSize="sm"
    position="relative"
    fontFamily="primary"
    // textAlign="center"
    padding="100px 0"
    mt="80px"
    mx="20px"
    top="-20px"
    className="footerDesign"
    >
       &copy; {new Date().getFullYear()} Jean Luiz / zatzk. All Rights Reserved.
  </Box>
)
