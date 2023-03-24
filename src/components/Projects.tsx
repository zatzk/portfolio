/* eslint-disable react/jsx-key */
import {
  Container,
  SimpleGrid,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { AnimatePresence, HTMLMotionProps, motion, MotionProps } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import CardData from "../data/CardData";
import { useState } from "react";
import { css } from "@emotion/react";

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
    background: #03e9f4;
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
    
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
export function Projects() {
  const [stack, setStack] = useState("ALL");

  function handleChange(id) {
    setStack(id);
  }
  
  const filteredData = 
      stack === "ALL" 
      ? CardData
      : CardData.filter((item) => item.typeProject.includes(stack));

  return (
    <Container
      maxW="container.lg"
      paddingY="3.125rem"
      height="100%"
      flexWrap="wrap"
      alignContent="center"
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
          {filteredData.map((data) => (
            <ProjectCard
              key={data.title}
              title={data.title}
              description={data.description}
              tools={data.tools}
              proto={data.proto}
              repo={data.repo}
            />
          ))}
        </SimpleGrid>
      </motion.div>
    </Container>
  );
}
