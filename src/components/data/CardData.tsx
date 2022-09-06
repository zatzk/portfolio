import { v4 as uuidv4 } from 'uuid';
import {
  chakra,
  nextjs,
  nodejs,
  react,
  typescript,
  framer,
  js,
  heroku,
  json,
  tailwind,
  html5,
} from './tools';

export default [
  {
    title: 'My Portfolio Website',
    description: 'This portfolio website! Built with react next.js, chakra-ui and framer-motion',
    tools: [react, nextjs, typescript, chakra, framer],
    proto: 'https://portfolio-zatzk.vercel.app',
    repo: 'https://github.com/zatzk/portfolio',
    id: uuidv4(),
  },
  {
    title: 'Senjougahara bot',
    description: 'A fun multipurpose discord bot that can do memes, translation and music, built with nodejs javascript',
    tools: [js, nodejs],
    proto: 'https://senjougaharabot-website.vercel.app',
    repo: 'https://github.com/zatzk/senjougaharaBot',
    id: uuidv4(),
  },
  {
    title: 'catsGenerator-API',
    description: 'An mock api database of cats memes. This project was built to be originally used by the discord bot "senjougahara bot"',
    tools: [nodejs, js, heroku, json],
    proto: null,
    repo: 'https://github.com/zatzk/geradorDeGatinho-API',
    id: uuidv4(),
  },
  {
    title: 'webpage discord bot',
    description: 'An webpage built entirely with astrojs and tailwindcss to my senjougahara discord bot"',
    tools: [html5, typescript, tailwind],
    proto: 'https://senjougaharabot-website.vercel.app',
    repo: 'https://github.com/zatzk/senjougaharabot-website',
    id: uuidv4(),
  },
  
]