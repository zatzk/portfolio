/* eslint-disable react/jsx-key */
import { Box, HStack } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import Link from "next/link";

const Socials = [
  { name: 'github', path: 'https://github.com/zatzk' },
  { name: 'linkedin', path: 'https://www.linkedin.com/in/zatzk/' },
  { name: 'behance', path: 'https://www.behance.net/zatzk' },
  { name: 'instagram', path: 'https://www.instagram.com/zatzk/' },
  { name: 'cv', path: '/resume.pdf' },
]

const NavLink = ({ children, path }: { children: string; path: string }) => {

  const glitchAnimation = css`
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
    <Box 
      css={glitchAnimation}
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
          fontFamily="secondary"
          marginRight="10px"
          >
          <Link href={path}>{children}</Link>
        </Box>
      </motion.div>  
    </Box> 
  );
}

export const FooterAbout = () => {
  
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
    border={{base: "1px solid #ebebeb", md: "1px solid #ebebeb"}}
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