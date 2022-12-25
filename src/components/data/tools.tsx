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
  SiChakraui,
  SiFramer,
  SiHeroku,
  SiJson,
  SiLeaflet,
  SiTailwindcss,
} from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';
import { createIcon } from '@chakra-ui/icons'

const astroIcon = createIcon({
  path: (
    <path 
      d="M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035c-2.032 0-3.735-.632-4.187-1.483c-.161.488-.198 1.046-.198 1.402c0 0-.106 1.75 1.111 2.968c0-.632.513-1.145 1.145-1.145c1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582a2.347 2.347 0 0 1-.236-1.029c0-1.11.652-1.523 1.41-2.003c.602-.383 1.272-.807 1.733-1.66a3.129 3.129 0 0 0 .378-1.494a3.14 3.14 0 0 0-.148-.954zM15.551.6c.196.244.296.572.496 1.229l4.368 14.347a18.18 18.18 0 0 0-5.222-1.768L12.35 4.8a.37.37 0 0 0-.71.002l-2.81 9.603a18.175 18.175 0 0 0-5.245 1.771L7.974 1.827c.2-.656.3-.984.497-1.227a1.613 1.613 0 0 1 .654-.484C9.415 0 9.757 0 10.443 0h3.135c.686 0 1.03 0 1.32.117A1.614 1.614 0 0 1 15.55.6z"
      fill="currentColor"
      fill-rule='evenodd'
      stroke="currentColor"
      stroke-width="0"
      role="img"
      focusable="false"
      />
   ),
    viewBox: '0 0 24 24',
})

export const astro = {
  name: 'astro',
  icon: astroIcon,
  color: '#FF0000',
  id: uuidv4()
};
export const leaflet = {
  name: 'leaflet',
  icon: SiLeaflet,
  color: '#0fd620',
  id: uuidv4()
};
export const tailwind = {
  name: 'tailwind',
  icon: SiTailwindcss,
  color: '#0FB6D6',
  id: uuidv4()
};
export const json = {
  name: 'json',
  icon: SiJson,
  color: '#808080',
  id: uuidv4()
};
export const heroku = {
  name: 'Heroku',
  icon: SiHeroku,
  color: '#800080',
  id: uuidv4()
};
export const framer = {
  name: 'Framer Motion',
  icon: SiFramer,
  color: '#800080',
  id: uuidv4()
};

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
