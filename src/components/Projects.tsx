/* eslint-disable react/jsx-key */
import {
  Container,
  SimpleGrid,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { css } from "@emotion/react";
import { useColorMode } from "@chakra-ui/react";
import CardData from "../data/CardData";
import { CardDataProps } from "../interfaces/CardDataProps"

const unfilteredData: CardDataProps[] = CardData

export function Projects() {
  const { colorMode } = useColorMode();
  const boxShadowColor = colorMode === "light" ? "#FF61BE" : "#03e9f4";
  const background = colorMode === "light" ? "#FF61BE" : "#03e9f4";
  const boxShadow = `0 0 5px ${boxShadowColor}, 0 0 25px ${boxShadowColor}, 0 0 50px ${boxShadowColor}, 0 0 200px ${boxShadowColor}`;

  const emotionStyles = css`
  .chakra-tabs__tab {
    text-decoration: none;
    display: inline-flex;
    position: relative;
    letter-spacing: 1px;
    border-radius: 4px;
    padding: 2px 7px 3px 7px;
    margin: 6px;
    margin-top: 0px;
    margin-bottom: 0px;
    transition: all 0.3s ease;
  }
  .chakra-tabs__tab:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${background};
    transition: width 0.8s ease 0s, left 0.8s ease 0s;
    width: 0;
    box-shadow: ${boxShadow}; 
  }
  .chakra-tabs__tab:hover:after { 
    cursor: pointer;
    width: 100%; 
    left: 0;    
  }
  .chakra-tabs__tab:focus:after { 
    width: 100%; 
    left: 0;    
  }
`;

  const [stack, setStack] = useState<string>("ALL");

  function handleChange(name: string) {
    setStack(name);
  }
  
  const filteredData = 
      stack === "ALL" 
      ? unfilteredData
      : unfilteredData.filter((item) => item.sets.includes(stack));

  return (
    <Container
      maxW="container.lg"
      paddingY="3.125rem"
      height="100%"
      flexWrap="wrap"
      alignContent="center"
    >
      <motion.div
        initial={{ y: -400, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          delay: 2,
        }}
      >
        <Tabs variant="unstyled" css={emotionStyles}
          marginTop="1rem"  
          marginBottom="1.3rem"  
        >
          <TabList
            borderBottom="none"
          >
            <Tab
              fontFamily="primary"
              fontStyle="normal"
              fontWeight="300"
              name="ALL"
              onClick={(event) => {
                handleChange(event.currentTarget.name);
              }}
            >
              ALL
            </Tab>
            <Tab
              fontFamily="primary"
              fontStyle="normal"
              fontWeight="300"
              name="FRONTEND"
              onClick={(event) => {
                handleChange(event.currentTarget.name);
              }}
            >
              FRONTEND
            </Tab>
            <Tab
              fontFamily="primary"
              fontStyle="normal"
              fontWeight="300"
              name="BACKEND"
              onClick={(event) => {
                handleChange(event.currentTarget.name);
              }}
            >
              BACKEND
            </Tab>
            <Tab
              fontFamily="primary"
              fontStyle="normal"
              fontWeight="300"
              name="MOBILE"
              onClick={(event) => {
                handleChange(event.currentTarget.name);
              }}
              >
              MOBILE
            </Tab>
          </TabList>
        </Tabs>
      </motion.div>

      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          delay: 2,
        }}
      >
        <SimpleGrid
          flexWrap="wrap"
          display="grid"
          minChildWidth="18.5em"
          columns={[1, 2, 3]}
          gap="1.10rem"
          padding="0px"
        >
          {filteredData.map((data: CardDataProps) => (
            <ProjectCard
              key={data.title}
              title={data.title}
              description={data.description}
              tools={data.tools}
              proto={data.proto}
              repo={data.repo}
              sets={data.sets}
            />
          ))}
        </SimpleGrid>
      </motion.div>
    </Container>
  );
}
