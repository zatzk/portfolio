/* eslint-disable react/prop-types */
import { Box, css, List, ListItem, transition, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';


export const DesignProjects = ({ selectedCategory, setSelectedCategory }: { selectedCategory: string, setSelectedCategory: React.Dispatch<React.SetStateAction<string>> }) => { 
  const categories = ['posters', 'ui/ux', 'logos'];
  

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory); 
  };

  return (
    <Box 
      as="nav"
      display="inline-flex"
      position="absolute"
      minH="100vh"
      zIndex={99}
    >
      <List 
        fontFamily={'quaternary'}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        w="105px"
      >
      {categories.map((category) => (
        <ListItem
          key={category}
          onClick={() => handleCategoryChange(category)}
          _active={selectedCategory === category }
          transform="rotateZ(-90deg)"
          cursor="pointer"
          _hover={{
            color: '#F65252',
            transition: 'all 0.8s ease',
          }}
        >
          {category}
        </ListItem>
      ))}
      </List>
    </Box>
  );
};