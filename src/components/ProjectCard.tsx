/* eslint-disable react/jsx-key */
import { Box, Flex, Heading, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useColorMode } from "@chakra-ui/react";
import { CardDataProps } from "../interfaces/CardDataProps"

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
       "0 0 10px #FEC763, 0 0 10px #FF61BE, 0 0 10px #FF61BE, 0 0 10px #FEC763",
      borderRadius: "5px",
    },
  }
  // const iconCardVariants = {
  //   initial: {
  //   opacity: 1,
  //   },
  //   hover: {
  //     scale: 1.1,
  //   },
  // }
  return {boxCardVariants}
  
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
  sets,
}: CardDataProps) => {

  const {boxCardVariants} = useBoxCardVariants();

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
        fontFamily="primary"
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
            alignItems="center"
            mb="35px"
          >
            <Flex
              display="flex"
              w="100%"
              alignContent="center"
              justifyContent="flex-start"
              alignItems="center"
            >
              {sets.map((set, index) => (
                <Box
                  key={Math.random().toString() + index}
                  as="a"
                  fontSize="14px"
                  // textShadow="rgb(255 215 77 / 20%) -1px -1px 6px, rgb(124 127 255 / 20%) 1px 1px 6px"
                >
                  {set}&nbsp;
                </Box>
              ))}
            </Flex>

            <Flex
              display="flex"
              alignContent="center"
              justifyContent="flex-end"
              alignItems="center"
            >
              {proto && (
                <Box
                  as="a"
                  href={proto}
                  target="_blank"
                  pr="15px"
                  _hover={{ color: 'hoverColor' }}
                  transitionDuration="300ms"
                >
                  <motion.div
                    whileTap="hoverIconLink"
                    whileHover="hoverIconLink"
                    variants={textVariants}
                  >
                    <FiExternalLink size={22} />
                  </motion.div>
                </Box>
              )}

              <Box
                as="a"
                href={repo}
                target="_blank"
                _hover={{ color: 'hoverColor' }}
                transitionDuration="300ms"
                >
                <motion.div
                  whileTap="hoverIconLink"
                  whileHover="hoverIconLink"
                  variants={textVariants}
                  >
                  <FiGithub size={22} />
                </motion.div>
              </Box>
            </Flex>
          </Flex>

          <motion.div>
            <Heading
              //_hover={{color: "hoverColor"}}
              fontFamily="primary"
              transitionDuration="300ms"
              position="static"
              fontSize="22px"
              lineHeight="1.1"
              mb="10px"
              // textShadow="rgb(255 215 77 / 20%) -1px -1px 6px, rgb(124 127 255 / 20%) 1px 1px 6px"
            >
              {title}
            </Heading>
          </motion.div>

          <Text
            fontFamily="primary"
            position="relative"
            fontSize="sm"
            // textShadow="rgb(255 215 77 / 20%) -1px -1px 6px, rgb(124 127 255 / 20%) 1px 1px 6px"
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
                <ListItem p="0.5rem">
                  <Icon
                    key={tool.id}
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
  sets: PropTypes.array.isRequired,
  proto: PropTypes.string,
  repo: PropTypes.string.isRequired
};
