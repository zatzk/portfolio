import { Box, Container, Flex, FlexProps, Heading, useColorModeValue } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Logo from "./Logo";


export const Navbar = (props: FlexProps) => (
  <Box
    position="fixed"
    w="100%"
    bg={useColorModeValue('#ffffff40', 'gray.900')}
    css={{ backdropFilter: 'blur(10px)' }}
    zIndex={2}
    {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="space-between"
      >
        <Flex alignContent="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        
        <DarkModeSwitch />
      </Container>
    
  </Box>
)