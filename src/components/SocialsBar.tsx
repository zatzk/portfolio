import { Box, Container, Icon, Link, List, ListItem } from '@chakra-ui/react'
import Socials from '../data/Socials'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';


export const SocialsCard = ({
  icon,
  href,
  name,
}) => {

  return (
    <ListItem>
      <Box p="12px">
        <motion.div
          whileHover={{scale: 1.1}}
        >
          <Link href={href} target="_blank" >
            <Icon 
              width="20px"
              height="20px"
              as={icon}
              name={name}
              _hover={{ color: 'hoverColor' }}
              />
            </Link>
        </motion.div>
      </Box>
    </ListItem>
    
  )
}

SocialsCard.propTypes = {
  icon: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}


export function SocialsBar() {

  return(
    <Container
      width={{base: '100%', md: '60px',lg: '90px'}}
      position={{base:"absolute",md:"fixed",lg:"fixed"}}
      bottom="0px"
      right={{base: '0px', md: '20px',lg:"20px"}}
      left={{base: '0px', md: 'auto',lg:"auto"}}
      zIndex={10}
      justifyContent="center"
    
    >
      <motion.div 
      initial={{y: 200, opacity: 0}}
      animate={{
        y:0, opacity: 1
        
       }}
      transition={{
        ease: 'easeOut',
        delay: 1.4,
      }}
     >
      <List
        display="flex"
        flexDirection={{base: 'row',md: 'column', lg: 'column'}}
        alignItems="center"
        mb={{base:"50px",md:"0px",lg:"0px"}}
        padding="0px"
        justifyContent="center"
        color="textColor"
      >
        {Socials.map((social) => (
          // eslint-disable-next-line react/jsx-key
          <SocialsCard 
            key={social.name}
            name={social.name}
            icon={social.icon}
            href={social.href}
          />
        ))}
      </List>
      <Box 
        display={{base:"none", md:"block",lg:"block"}}
        width={{base:"0px",md:"1px",lg:"1px"}}
        height={{base:"0px",md:"90px",lg:"90px"}}
        margin="0px auto"
        bg="hoverColor"
        ></Box>
      </motion.div>
    </Container>
  )
}


