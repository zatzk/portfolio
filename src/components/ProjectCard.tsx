/* eslint-disable react/jsx-key */
import { Box, Flex, Heading, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useColorMode } from "@chakra-ui/react";

const useBoxCardVariants = () => {
  const { colorMode } = useColorMode();

  const boxCardVariants = {
    initial: {
      opacity: 1,
    },
    hover: {
      opacity: 1,
      scale: 1.02,
      y: -4,
      boxShadow: colorMode === 'dark' ?
       "0 0 10px #03e9f4, 0 0 10px #03e9f4, 0 0 10px #03e9f4, 0 0 10px #03e9f4"
       :
       "0 0 10px #9D72FF, 0 0 10px #9D72FF, 0 0 10px #9D72FF, 0 0 10px #9D72FF",
      borderRadius: "5px",
    },
  }
  const iconCardVariants = {
    initial: {
    opacity: 1,
    },
    hover: {
      scale: 1.1,
      color: colorMode === 'dark' ? '#04E0D9' : '#9D72FF',
    },
    exit: {
      color: colorMode === 'dark' ? '#fff' : '#000',
    },
  }
  return {boxCardVariants, iconCardVariants}
  
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

  const {boxCardVariants, iconCardVariants} = useBoxCardVariants();
  
  return (
    <motion.div
      color='textColor'
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
              <Box
                as="a"
                href={proto}
                target="_blank"
                pr="15px"
                // _hover={{ color: '#04E0D9' }}
                transitionDuration="300ms"
              >
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  whileTap="hover"
                  variants={iconCardVariants}
                >
                  <FiExternalLink size={22} />
                </motion.div>
              </Box>
            )}

            <Box
              as="a"
              href={repo}
              target="_blank"
              // _hover={{ color: '#04E0D9' }}
              transitionDuration="300ms"
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                whileTap="hover"
                variants={iconCardVariants}
              >
                <FiGithub size={22} />
              </motion.div>
            </Box>
          </Flex>

          <motion.div>
            <Heading
              //_hover={{color: "hoverColor"}}
              transitionDuration="300ms"
              position="static"
              fontSize="22px"
              lineHeight="1.1"
              mb="10px"
              textShadow="rgb(255 215 77 / 20%) -1px -1px 6px, rgb(124 127 255 / 20%) 1px 1px 6px"
            >
              {title}
            </Heading>
          </motion.div>

          <Text
            position="relative"
            fontSize="sm"
            textShadow="rgb(255 215 77 / 20%) -1px -1px 6px, rgb(124 127 255 / 20%) 1px 1px 6px"
          >
            {description}
          </Text>
        </Box>


        <Box
          as="footer"
          display="block"
        >
          <List display="flex" flexDirection="row" alignItems="flex-end" flexGrow="1" flexWrap="wrap" mt="20px">
            {tools.map((tool) => (
              <motion.a whileHover={{ scale: 1.1 }}>

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
