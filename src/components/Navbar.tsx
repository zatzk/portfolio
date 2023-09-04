import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, HStack, IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Logo from "./Logo";
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { useColorMode } from "@chakra-ui/react";

const Links = [
  {
    name: "code",
    path: "/",
  },
  {
    name: "design",
    path: "/design",
  },
  {
    name: "about",
    path: "/about",
  },
  // {
  //   name: "cv",
  //   path: "/resume.pdf",
  // },
  
];



const NavLink = ({ children, path }: { children: ReactNode; path: string }) => {
  const { colorMode } = useColorMode();
  const boxShadowColor = colorMode === "light" ? "#FF61BE" : "#03e9f4";
  const background = colorMode === "light" ? "#FF61BE" : "#03e9f4";
  const boxShadow = `0 0 5px ${boxShadowColor}, 0 0 25px ${boxShadowColor}, 0 0 50px ${boxShadowColor}, 0 0 200px ${boxShadowColor}`;

  const btn = css`
  a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${background};
    transition: width 0.8s ease 0s, left 0.8s ease 0s;
    width: 0;
    box-shadow: ${boxShadow};
    
  }
  a:hover:after { 
    width: 100%; 
    left: 0; 
    
  }
`
  return (    
    <motion.div 
      whileTap={{ scale: 0.98 }}
    >
      <Box 
        textDecoration="none"
        letterSpacing="4px"
        display="inline-flex"
        padding="15px 15px"
        position="relative"
        // marginRight="10px"
        css={[btn]}
        >    
        <Link href={path}>{children}</Link>
      </Box>
    </motion.div>  
  );
}


export function Navbar() {
  // const { isOpen, onOpen, onClose } = useDisclosure();


  return(
    
    <Box  
      as="header"
      paddingTop={{ base: 4, md: 8 }}
      paddingX={{ base: 4, md: 4, lg: 8 }}
      position="fixed"
      w="100%"
      // css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      >
        <Container  
          display="flex"
          p={4}
          maxW="container.xxl"
          alignContent="center"
          justifyContent="right"
          fontFamily="quinary"
          fontStyle="normal"
          fontWeight="300"
          fontSize="13.5"
          textShadow="rgb(255 215 77 / 20%) -1px -1px 6px, rgb(124 127 255 / 20%) 1px 1px 6px"

          >
          {/* <Logo /> */}

          <HStack spacing={10} alignItems={"center"}>
            
            <HStack
              as={"nav"}
              spacing={0}
              display={{ base: "flex", md: "flex" }}
          >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
          </HStack>

          <DarkModeSwitch  />
          
          {/* old mobile navbar */}
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          </HStack>
          
        </Container>

        {/* old mobile navbar */}
        {/* {isOpen ? (
          <Box pb={4} ml={2} display={{ base:'inline-block', md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
  )
} 