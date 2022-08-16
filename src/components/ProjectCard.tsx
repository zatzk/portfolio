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
    color: "#04E0D9",
    scale: 1.1
  },
  hoverTitle: {
    opacity: 1,
    color: "#04E0D9"
  },
}

export const ProjectCard = ({
  title,
  description,
  tools,
  proto,
  repo,
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
    <Box
      as="flex"
      px="25px"
      position="relative"
      bg="#292929"
      height="19em"
      borderRadius="5px"
      bgGradient="linear(to-b, bgCardColor1, bgCardColor2)"
      >
        <Flex
          position="relative"
          width="100%"
          height="70px"
          alignContent="center"
          justifyContent="flex-end"
        >
          {proto && (
            <Box as="a" href={proto}  pt="33px" pr="20px"><motion.div whileTap="hoverIconLink" whileHover="hoverIconLink" variants={textVariants}><FiExternalLink size={22} /></motion.div></Box>
          )}
          <Box as="a" href={repo} pt="33px" ><motion.div whileTap="hoverIconLink" whileHover="hoverIconLink" variants={textVariants}><FiGithub size={22} /></motion.div></Box>
        </Flex>
        <Box
          position="relative"
          width="100%"
          textAlign="left"
          pt="10px"
        >
          <motion.div whileTap="hoverTitle" whileHover="hoverTitle" variants={textVariants}>
            <Heading position="relative" fontSize="22px">
              {title}
            </Heading>
          </motion.div>

          <Text position="relative" pt="19px" fontSize="sm">
            {description}
          </Text>
        </Box>

        
        <Box
          width="100%"
          textAlign="left"
          position="absolute"
        >
        <List display="flex" flexDirection="row" alignItems="flex-end" flexWrap="wrap" mt="20px">
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
      

      </Box>
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
