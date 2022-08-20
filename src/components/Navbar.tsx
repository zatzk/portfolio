import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, HStack, IconButton, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Logo from "./Logo";
import { css } from '@emotion/react'
import { motion } from 'framer-motion'


const Links = [
  {
    name: "WORK",
    path: "/",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  
];


const btn = css`
  a {
    text-decoration: none;
    letter-spacing: 4px;
    display: inline-flex;
    padding: 15px 20px;
    position: relative;
    margin-right: 10px;
  }
  a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #03e9f4;
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
    
  }
  a:hover:after { 
    width: 100%; 
    left: 0; 
    
  }
`


const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (    
  <motion.div whileHover={{ scale: 1.2 }}
  >
    <Box css={[btn]}
        > 
        
        <Link  href={path}>{children}</Link>
    </Box>
  </motion.div>  
);


export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return(
    
    <Box  
      as="header"
      position="fixed"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#171923")} 
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      >
        <Container  
          display="flex"
          p={2}
          maxW="container.lg"
          alignContent="center"
          justifyContent="space-between"
          fontFamily="primary"
          fontStyle="normal"
          fontWeight="300"
          fontSize="13.5"
          >
          <Logo />

          <HStack spacing={8} alignItems={"center"}>
            
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
          >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
          </HStack>

          <DarkModeSwitch  />
          
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          </HStack>
          
        </Container>

        {isOpen ? (
          <Box pb={4} ml={2} display={{ base:'inline-block', md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
  )
} 