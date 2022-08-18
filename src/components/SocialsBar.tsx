import { Box, Container, Icon, Link, List, ListItem, VisuallyHidden } from '@chakra-ui/react'
import Socials from './data/Socials'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';


export const SocialsCard = ({
  icon,
  href,
  name,
  color,
  ...props
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
              _hover={{ color: color }}
              />
            </Link>
        </motion.div>
      </Box>
    </ListItem>
    
  )
}

SocialsCard.propTypes = {
  icon: PropTypes.element.isRequired,
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
      <List
        display="flex"
        flexDirection={{base: 'row',md: 'column', lg: 'column'}}
        alignItems="center"
        mb={{base:"50px",md:"0px",lg:"0px"}}
        padding="0px"
        justifyContent="center"
      >
        {Socials.map((social) => (
          <SocialsCard 
            icon={social.icon}
            href={social.href}
            name={social.name}
            color={social.color}
          />
        ))}
      </List>
      <Box 
        display={{base:"none", md:"block",lg:"block"}}
        width={{base:"0px",md:"1px",lg:"1px"}}
        height={{base:"0px",md:"90px",lg:"90px"}}
        margin="0px auto"
        bg="#04E0D9"
        ></Box>
    </Container>
  )
}


