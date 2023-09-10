/* eslint-disable react/jsx-key */
import { Box, HStack } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from 'react';

const Socials = [
  { name: 'github', path: 'https://github.com/zatzk' },
  { name: 'linkedin', path: 'https://www.linkedin.com/in/zatzk/' },
  { name: 'behance', path: 'https://www.behance.net/zatzk' },
  { name: 'instagram', path: 'https://www.instagram.com/zatzk/' },
]

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => {
  const { colorMode } = useColorMode();
  const boxShadowColor = colorMode === "light" ? "#ebebeb" : "#000";
  const background = colorMode === "light" ? "#ebebeb" : "#000";
  const boxShadow = `0 0 5px ${boxShadowColor}, 0 0 25px ${boxShadowColor}, 0 0 50px ${boxShadowColor}, 0 0 200px ${boxShadowColor}`;
  const textColor = colorMode === "light" ? "#ebebeb" : "#000";

  const btn = css`
  a {
    color: ${textColor};
  }
  a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    bottom: 10px;
    content: "";
    display: block;
    height: 2px;
    left: 0%;
    position: absolute;
    background: ${background};
    transition: width 0.8s ease 0s, left 0.8s ease 0s;
    width: 0;
    /* box-shadow: ${boxShadow}; */
    
  }
  a:hover:after { 
    width: 100%; 
    left: 0; 
    
  }
`

  return (
    <Box 

    >
      <motion.div 
        whileTap={{ scale: 0.98 }}
      >
        <Box 
          textDecoration="none"
          letterSpacing="3px"
          display="inline-flex"
          padding="15px 2px"
          position="relative"
          fontFamily="quinary"
          marginRight="10px"
          css={[btn]}
          >
          <Link href={path}>{children}</Link>
        </Box>
      </motion.div>  
    </Box> 
  );
}

export const FooterDesign = () => {
  
  return (
  
  <Box
    as="footer" 
    fontSize="sm"
    position="relative"
    fontFamily="primary"
    padding={{base: "80px 0px", md: "60px 5px"}}
    mt="80px"
    mx="20px"
    top="-20px"
    className="footerDesign"
    >
      <Box display="inline-flex" flexWrap={"wrap"} width="100%" justifyContent="space-around" >
        <Box marginLeft={{base:"30px", md:"4rem"}}>
          <HStack spacing={2} display="inline-flex" flexWrap={"wrap"}> 
          {Socials.map((social) => (
              <NavLink key={social.path} path={social.path}>
                {social.name}
              </NavLink>
          ))}
          </HStack>
        </Box>
        <Box 
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          fontFamily="secondary"
        >
          &copy; {new Date().getFullYear()} Jean Luiz / zatzk. All Rights Reserved.
        </Box>
      </Box>
    </Box>
  )
}