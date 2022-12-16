import { Box, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"
import Link from "next/link"
import Image from 'next/image'
import { motion } from "framer-motion"

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  line-hight: 10px;
  padding: 18px;
  
  img {
    transition: 200ms ease;
  }
  `

const Logo = () => {
  const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`
  //const logoImg =  `https://i.imgur.com${useColorModeValue('/4rbdnFL','/PiLt6pp',)}.png`


  return (
    <Link  href="/" scroll={false}>
      <a>
        <motion.button whileHover={{ scale: 1.2 }}>
          
          <LogoBox>
            <Image 
              src={logoImg}
              width={25} 
              height={15}
              
              alt="logo" 
              />
            
          </LogoBox>
        </motion.button>
      </a>
    </Link>
  )
}

export default Logo