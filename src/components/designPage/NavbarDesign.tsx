import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, HStack, IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import LogoDesign from "./LogoDesign";
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import {useEffect} from 'react'

const Links = [
  
  {
    name: "DIGITAL ART",
    path: "/design",
  },
  {
    name: "UI/UX",
    path: "/",
  },
  {
    name: "LOGOS",
    path: "/",
  },
  
];



const NavLink = ({ children, path }: { children: ReactNode; path: string }) => {

  const btn = css`
  a {
    color: #d5ded7
  }
  a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #d5ded7;
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
    box-shadow: #d5ded7;
    
  }
  a:hover:after { 
    width: 100%; 
    left: 0; 
    
  }
`
  
  useEffect(() => {
    const intervalId = setInterval(shuffleText, 1000 / 60);
    setTimeout(() => {
      clearInterval(intervalId);
      resetText();
    }, 900);
    return () => clearInterval(intervalId);
  }, []);
  
  const [text, setText] = useState(children);
  const [shuffleInterval, setShuffleInterval] = useState<NodeJS.Timeout>();

  const shuffleText = () => {
    let shuffledText = '';
    for (let i = 0; i < text.length; i++) {
      shuffledText += text[Math.floor(Math.random() * text.length)];
    }
    setText(shuffledText);
  };

  const resetText = () => {
    setText(children);
  };

  const onMouseEnter = () => {
    const interval = setInterval(shuffleText, 1000 / 60);
    setShuffleInterval(interval);
  };

  const onMouseLeave = () => {
    clearInterval(shuffleInterval);
    resetText();
  };


  return (    
    <motion.div 
      whileTap={{ scale: 0.98 }}
    >
      <Box 
        textDecoration="none"
        letterSpacing="4px"
        display="inline-flex"
        padding="15px 10px"
        position="relative"
        marginRight="10px"
        css={[btn]}
        >    
        <Link href={path} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{text}</Link>
      </Box>
    </motion.div>  
  );
}


export function NavbarDesign() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return(
    
    <Box  
      as="header"
      position="fixed"
      w="100%"
      // css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      >
        <Container  
          display="flex"
          p={2}
          maxW="container.lg"
          alignContent="center"
          justifyContent="space-between"
          fontFamily="tertiary"
          fontStyle="normal"
          fontWeight="300"
          fontSize="13.5"
          >
          <LogoDesign />
          
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