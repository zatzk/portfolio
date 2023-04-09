import { useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"
import Link from "next/link"
import Image from 'next/image'
import { motion } from "framer-motion"

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  line-height: 10px;
  padding: 18px;
  
  img {
    transition: 200ms ease;
  }
  `

const Logo = () => {
  const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`
  

  return (
    <Link  href="/" scroll={false}>
      <motion.button 
        whileTap={{ scale: 0.93 }}
      >
        <LogoBox>
          <Image 
            src={logoImg}
            alt="logo" 
            width={25} 
            height={15}
          />
          
        </LogoBox>
      </motion.button>
    </Link>
  )
}

export default Logo