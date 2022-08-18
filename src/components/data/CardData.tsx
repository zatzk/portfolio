import { v4 as uuidv4 } from 'uuid';
import {
  chakra,
  electron,
  figma,
  nextjs,
  nodejs,
  react,
  socketIO,
  storybook,
  typescript,
  framer,
  js,
  heroku,
  json,
} from './tools';

export default [
  {
    title: 'My Portfolio Website',
    description: 'This portfolio website! Built with react next.js, chakra-ui and framer-motion',
    tools: [react, nextjs, typescript, chakra, framer],
    proto: null,
    repo: 'https://github.com/zatzk/portfolio',
    id: uuidv4(),
  },
  {
    title: 'Senjougahara bot',
    description: 'A fun multipurpose discord bot that can do memes, translation and music, built with nodejs javascript',
    tools: [js, nodejs],
    proto: null,
    repo: 'https://github.com/zatzk/senjougaharaBot',
    id: uuidv4(),
  },
  {
    title: 'geradorDeGatinho-API',
    description: 'An mock api database of cats memes. This project was built to be originally used by the discord bot "senjougahara bot"',
    tools: [nodejs, js, heroku, json],
    proto: null,
    repo: 'https://github.com/zatzk/geradorDeGatinho-API',
    id: uuidv4(),
  },
  
]