import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiElectron,
  SiFigma,
  SiStorybook,
  SiAdobe,
  SiSocketdotio,
  SiTypescript,
  SiChakraui
} from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

export const html5 = {
  name: 'HTML5',
  icon: SiHtml5,
  color: '#E34F26',
  id: uuidv4()
};

export const css3 = {
  name: 'CSS3',
  icon: SiCss3,
  color: '#1572B6',
  id: uuidv4()
};

export const js = {
  name: 'JavaScript',
  icon: SiJavascript,
  color: '#F7DF1E',
  id: uuidv4()
};

export const typescript = {
  name: 'Typescript',
  icon: SiTypescript,
  color: '#3178C6',
  id: uuidv4()
};

export const react = {
  name: 'React',
  icon: SiReact,
  color: '#61DAFB',
  id: uuidv4()
};

export const nodejs = {
  name: 'Node.js',
  icon: SiNodedotjs,
  color: '#339933',
  id: uuidv4()
};

export const nextjs = {
  name: 'Next.js',
  icon: SiNextdotjs,
  color: null,
  id: uuidv4()
};

export const electron = {
  name: 'Electron',
  icon: SiElectron,
  color: '#47848F',
  id: uuidv4()
};

export const figma = {
  name: 'Figma',
  icon: SiFigma,
  color: '#F24E1E',
  id: uuidv4()
};

// add chakraui svg to files and import
export const chakra = {
  name: 'Chakra UI',
  icon: SiChakraui,
  color: '#319795',
  id: uuidv4()
};

export const storybook = {
  name: 'Storybook',
  icon: SiStorybook,
  color: '#FF4785',
  id: uuidv4()
};

export const adobe = {
  name: 'Adobe',
  icon: SiAdobe,
  color: '#FF0000',
  id: uuidv4()
};

export const socketIO = {
  name: 'Socket IO',
  icon: SiSocketdotio,
  color: null,
  id: uuidv4()
};

export const sass = {
  name: 'Sass',
  icon: SiSass,
  color: '#CC6699',
  id: uuidv4()
};
