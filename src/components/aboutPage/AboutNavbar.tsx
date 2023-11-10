import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, HStack, IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { useColorMode } from "@chakra-ui/react";

const Links = [
  {
    name: "CODE",
    path: "/",
  },
  {
    name: "DESIGN",
    path: "/design",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  // {
  //   name: "cv",
  //   path: "/resume.pdf",
  // },
  
];



const NavLink = ({ children, path }: { children: string; path: string }) => {

  const btn = css`

    a {
    position: relative;
    display: inline-block;
    a-decoration: none;
    color: #fff;
    z-index: 1;
    }

    a::before,
    a::after {
      content: '${children}';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    a::before {
      color: #00ffff;
      z-index: -1;
    }

    a::after {
      color: #ff00ff;
      z-index: -2;
    }

    a:hover::before {
      animation: glitchy 0.3s ease 0.3s infinite;
    }

    a:hover::after {
      animation: glitchy 0.3s ease infinite reverse;
    }

    @keyframes glitchy {
      0%   {transform: translate(-2px, 2px);}
      25%  {transform: translate(-2px, -2px);}
      50%  {transform: translate(2px, 2px);}
      75%  {transform: translate(2px, -2px);}
      100%  {transform: translate(-2px, 2px);}
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


export function AboutNavbar() {
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
          fontFamily="secondary"
          fontStyle="normal"
          fontWeight="300"
          fontSize="13.5"
          // textShadow="rgb(255 215 77 / 10%) -1px -1px 6px, rgb(124 127 255 / 10%) 1px 1px 6px"
          >
          {/* <Logo /> */}

          <HStack spacing={{ base: 0, md: 10 }} alignItems={"center"}>
            
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
          
          {/* <DarkModeSwitch /> */}
          <Box/>
          
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