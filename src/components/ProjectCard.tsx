/* eslint-disable react/jsx-key */
import { Box, Flex, Heading, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const boxCardVariants = {
  initial: {
    opacity: 1
  },
  hover: {
    opacity: 1,
    scale: 1.02,
    y: -10,
    boxShadow: "0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4",
    borderRadius: "5px",
  },
  
}
const textVariants = {
  hoverIconLink: {
    opacity: 1,
    scale: 1.1
  },
}

export const ProjectCard = ({
  title,
  description,
  tools,
  proto,
  repo,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...props
}) => {
  return (
    <motion.div
    initial="initial"
    whileHover="hover"
    whileTap="hover"
    variants={boxCardVariants}
    transition={{
      ease: 'easeOut',
      delay: 0.15,
    }}
  >
    <Flex
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      alignItems="flex-start"
      padding="2rem 1.75rem"
      position="relative"
      bg="#292929"
      height="20em"
      borderRadius="5px"
      bgGradient="linear(to-b, bgCardColor1, bgCardColor2)"
      >
        <Box as="header" display="block">
          <Flex
            display="flex"
            alignContent="center"
            justifyContent="flex-end"
            alignItems="center"
            mb="35px"

            >
            {proto && (
              <Box as="a" href={proto} target="_blank" pr="15px" _hover={{ color: '#04E0D9' }} transitionDuration="300ms" ><motion.div whileTap="hoverIconLink" whileHover="hoverIconLink" variants={textVariants}><FiExternalLink size={22} /></motion.div></Box>
              )}
            <Box as="a" href={repo} target="_blank" _hover={{ color: '#04E0D9' }} transitionDuration="300ms" ><motion.div whileTap="hoverIconLink" whileHover="hoverIconLink" variants={textVariants}><FiGithub size={22} /></motion.div></Box>
          </Flex>

          <motion.div>
            <Heading _hover={{ color: '#04E0D9' }} transitionDuration="300ms" position="static" fontSize="22px" lineHeight="1.1" mb="10px" >
              {title}
            </Heading>
          </motion.div>

          <Text position="relative"  fontSize="sm">
            {description}
          </Text> 
        </Box>

        
        <Box
          as="footer"
          display="block"
        >
          <List display="flex" flexDirection="row" alignItems="flex-end" flexGrow="1" flexWrap="wrap" mt="20px">
            {tools.map((tool) => (
              <motion.a whileHover={{scale: 1.1}}>

                <ListItem key={tool.id} p="0.5rem">
                  <Icon
                    aria-label={tool.name}
                    transitionDuration="300ms"
                    boxSize="1.5rem"
                    as={tool.icon}
                    _hover={{ fill: tool.color }}
                    />
                </ListItem>
              </motion.a>
            ))}
          </List>


        </Box>
      

      </Flex>
  </motion.div>
  );
};
 
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
  proto: PropTypes.string,
  repo: PropTypes.string.isRequired
};
