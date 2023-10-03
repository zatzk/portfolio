/* eslint-disable react/prop-types */
import { Box, List, ListItem, useColorMode } from '@chakra-ui/react';
import { css } from '@emotion/react';


export const DesignProjects = ({ selectedCategory, setSelectedCategory }: { selectedCategory: string, setSelectedCategory: React.Dispatch<React.SetStateAction<string>> }) => { 
  const categories = ['posters', 'ui/ux', 'logos'];


  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "#ebebeb" : "#000";

  
  const btn = css`
  li {
    color: ${textColor};
    transition: width 0.8s ease 0s, left 0.8s ease 0s;
  }
  li:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    bottom: -2px;
    content: "";
    display: block;
    height: 3px;
    left: 0%;
    position: absolute;
    background: ${textColor};
    transition: width 0.8s ease 0s, left 0.8s ease 0s;
    width: 0;
    
  }
  li:hover {
    color: #F65252;
    transition: 0.8s;
  }
  li:hover:after { 
    width: 70%; 
    left: 0; 
    background: #F65252;
    transition: 0.8s;
  }
  .active {
    color: #F65252;
    transition: all 0.8s ease ;
  }
  .active:after {
    width: 70%;
    left: 0;
    background: #F65252;
    transition: all 0.8s ease ;

  }
`

  const handleCategoryChange = (newCategory: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setSelectedCategory(newCategory); 
  };

  return (
    <Box 
      as="nav"
      display="inline-flex"
      position="fixed"
      minH="100vh"
      mt={{base:90, md: 0}}
      zIndex={99}
      css={btn}
    >
      <List 
        fontFamily={'quaternary'}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        // w="105px"
        h={"90vh"}
        // h={{base:600, sm:700, md:900}}
      >
      {categories.map((category) => (
        <ListItem
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={selectedCategory === category ? 'active' : ''}
          // _active={selectedCategory === category }
          transform="rotateZ(-90deg)"
          cursor="pointer"
        >
          {category}
        </ListItem>
      ))}
      </List>
    </Box>
  );
};